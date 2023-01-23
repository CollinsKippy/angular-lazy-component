import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  myConstant = 'App Class';

  constructor() {}
}

@Injectable()
export class ChildService {
  myConstant = 'Child Service';

  constructor() {}
}
