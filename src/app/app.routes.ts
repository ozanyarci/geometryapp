import { Routes } from '@angular/router';
import { quizReadyGuard, resultReadyGuard } from './core/quiz-guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Geometri · YKS Hazırlık',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'unit/:id',
    title: 'Ünite · Geometri',
    loadComponent: () => import('./pages/unit-detail/unit-detail').then((m) => m.UnitDetail),
  },
  {
    path: 'unit/:id/module/:moduleId',
    title: 'Modül · Geometri',
    loadComponent: () => import('./pages/module-detail/module-detail').then((m) => m.ModuleDetail),
  },
  {
    path: 'unit/:id/module/:moduleId/question',
    title: 'Sorular · Geometri',
    canActivate: [quizReadyGuard],
    loadComponent: () => import('./pages/quiz/quiz').then((m) => m.Quiz),
  },
  {
    path: 'unit/:id/module/:moduleId/result',
    title: 'Sonuç · Geometri',
    canActivate: [resultReadyGuard],
    loadComponent: () => import('./pages/result/result').then((m) => m.Result),
  },
  { path: '**', redirectTo: '' },
];
