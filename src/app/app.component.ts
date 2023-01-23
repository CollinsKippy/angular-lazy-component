import { Component, InjectionToken, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const DATA = new InjectionToken<string>('data');

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: DATA, useValue: 'parent' }],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
