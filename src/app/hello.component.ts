import { Component, inject, Input, OnInit } from '@angular/core';
import { DATA } from './app.component';

@Component({
  selector: 'hello',
  standalone: true,
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  data = inject(DATA);

  ngOnInit(): void {
    console.log('data =', this.data);
  }
}
