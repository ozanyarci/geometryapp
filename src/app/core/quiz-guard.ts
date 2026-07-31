import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { QuizStore } from './quiz-store';

/** Back to the module the student was trying to open. */
function moduleUrl(router: Router, route: Parameters<CanActivateFn>[0]): UrlTree {
  const unitId = route.paramMap.get('id') ?? '';
  const moduleId = route.paramMap.get('moduleId');
  return moduleId
    ? router.createUrlTree(['/unit', unitId, 'module', moduleId])
    : router.createUrlTree(['/unit', unitId]);
}

/**
 * Quiz state does not survive a page reload. Rather than dropping the student
 * onto an empty question screen, send them back to the module page.
 */
export const quizReadyGuard: CanActivateFn = (route) => {
  const store = inject(QuizStore);
  const router = inject(Router);
  if (store.ready()) return true;
  return moduleUrl(router, route);
};

/** The result screen only makes sense once a run has been finished. */
export const resultReadyGuard: CanActivateFn = (route) => {
  const store = inject(QuizStore);
  const router = inject(Router);
  if (store.ready() && store.finished()) return true;
  return moduleUrl(router, route);
};
