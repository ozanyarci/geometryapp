<#
.SYNOPSIS
  Keeps the local checkout in step with origin/main so the dev server on
  http://localhost:4200 picks up work pushed from elsewhere (a phone session,
  another machine) without anyone typing `git pull`.

.DESCRIPTION
  Polls the remote on an interval and fast-forwards when there is something new.
  It never merges, rebases or discards: if the working tree is dirty, or the
  branch has diverged, it says so and leaves the repo alone. `ng serve` notices
  the changed files on its own and reloads the browser.

  Runs `npm install` after a pull that touched package-lock.json, since the dev
  server would otherwise fail on a dependency that is not on disk yet.

.EXAMPLE
  npm run sync
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/auto-pull.ps1 -IntervalSeconds 30
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/auto-pull.ps1 -Once
#>
[CmdletBinding()]
param(
  [int]$IntervalSeconds = 60,
  [string]$Branch = 'main',
  # Check once and exit, instead of looping. Useful for a quick manual sync.
  [switch]$Once
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

function Write-Stamp([string]$Message, [string]$Color = 'Gray') {
  Write-Host ("[{0}] {1}" -f (Get-Date -Format 'HH:mm:ss'), $Message) -ForegroundColor $Color
}

# True when there are edits to tracked files that a fast-forward might have to
# reconcile. Untracked files are ignored on purpose: build output and scratch
# files are always lying around and none of them can conflict with a merge.
function Test-WorkingTreeDirty {
  return -not [string]::IsNullOrWhiteSpace((git status --porcelain --untracked-files=no))
}

function Sync-Once {
  git fetch --quiet origin $Branch
  if ($LASTEXITCODE -ne 0) {
    Write-Stamp "fetch failed -- offline? retrying next tick." 'Yellow'
    return
  }

  $local = (git rev-parse HEAD).Trim()
  $remote = (git rev-parse "origin/$Branch").Trim()
  if ($local -eq $remote) { return }

  git merge-base --is-ancestor HEAD "origin/$Branch"
  if ($LASTEXITCODE -ne 0) {
    Write-Stamp "local $Branch has commits origin does not -- not touching it. Push or rebase yourself." 'Yellow'
    return
  }

  if (Test-WorkingTreeDirty) {
    Write-Stamp "new commits on origin/$Branch, but the working tree is dirty -- skipping." 'Yellow'
    return
  }

  $changed = git diff --name-only HEAD "origin/$Branch"
  $count = (git rev-list --count "HEAD..origin/$Branch").Trim()
  $subject = (git log -1 --format='%s' "origin/$Branch").Trim()

  git merge --ff-only "origin/$Branch" --quiet
  if ($LASTEXITCODE -ne 0) {
    Write-Stamp "fast-forward failed -- leaving the repo as it is." 'Red'
    return
  }

  Write-Stamp ("pulled {0} commit(s) -- {1}" -f $count, $subject) 'Green'

  if ($changed -contains 'package-lock.json') {
    Write-Stamp "dependencies changed, running npm install..." 'Cyan'
    npm install
    Write-Stamp "npm install done -- restart ng serve if it is unhappy." 'Cyan'
  }
}

if ($Once) {
  Sync-Once
  return
}

Write-Stamp ("watching origin/{0} every {1}s -- Ctrl+C to stop." -f $Branch, $IntervalSeconds) 'Cyan'
while ($true) {
  try { Sync-Once } catch { Write-Stamp ("error: {0}" -f $_.Exception.Message) 'Red' }
  Start-Sleep -Seconds $IntervalSeconds
}
