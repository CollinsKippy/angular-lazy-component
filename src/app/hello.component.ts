import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { DATA, MY_TOKEN } from './app.component';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  standalone: true,
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  data = inject(DATA);
  // token = inject(MY_TOKEN);
  helloService = inject(HelloService);

  constructor(@Inject(MY_TOKEN) private token: string) {}

  ngOnInit(): void {
    console.log('data =', this.data);
    console.log('my_token', this.token);
    console.log('my_constant', this.helloService.myConstant);
  }
}
