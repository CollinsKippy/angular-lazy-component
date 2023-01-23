import { Route } from '@angular/router';
import { DATA, MY_TOKEN } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildService, HelloService } from './hello.service';

export const CHILD_ROUTE: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./hello.component').then((m) => m.HelloComponent),
    providers: [
      { provide: DATA, useValue: 'route' },
      {
        provide: MY_TOKEN,
        useFactory: () => ({ name: 'Child_Token' }),
      },
      {
        provide: HelloService,
        useClass: ChildService,
      },
    ],
  },
];
