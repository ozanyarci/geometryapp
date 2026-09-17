import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'geometry.last-module.v1';

/** Module ids keyed by unit id. */
type LastModules = Record<string, string>;

/**
 * Remembers which module the student opened last in each unit, so coming back
 * to the unit lands on that module instead of the top of the list.
 *
 * When storage is unavailable (private windows, for example) it falls back to
 * in-memory state for the current session.
 */
@Injectable({ providedIn: 'root' })
export class LastModuleStore {
  private readonly lastModules = signal<LastModules>(this.read());

  /** The module the student opened last in this unit, if there is one. */
  lastModuleId(unitId: string): string | undefined {
    return this.lastModules()[unitId];
  }

  remember(unitId: string, moduleId: string): void {
    if (this.lastModules()[unitId] === moduleId) return;
    this.lastModules.update((current) => ({ ...current, [unitId]: moduleId }));
    this.write();
  }

  private write(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lastModules()));
    } catch {
      // Storage unavailable — the memory lasts for this session only.
    }
  }

  private read(): LastModules {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as unknown;
      // Corrupted or hand-edited data must not break the app.
      if (!parsed || typeof parsed !== 'object') return {};
      return Object.fromEntries(
        Object.entries(parsed as Record<string, unknown>).filter(
          ([, moduleId]) => typeof moduleId === 'string',
        ),
      ) as LastModules;
    } catch {
      return {};
    }
  }
}
