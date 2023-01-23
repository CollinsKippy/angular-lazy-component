import { Component, InjectionToken, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './hello.service';

export const DATA = new InjectionToken<string>('data');
export const MY_TOKEN = new InjectionToken<string>('my_token');

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: DATA, useValue: 'parent' },
    {
      provide: MY_TOKEN,
      useFactory: () => ({ name: 'App_Comp_Token' }),
    },
    HelloService,
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
