import { Route } from '@angular/router';
import { DATA } from './app.component';

export const CHILD_ROUTE: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./hello.component').then((m) => m.HelloComponent),
    providers: [{ provide: DATA, useValue: 'route' }],
  },
];
