import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bba-isolated',
  template: '<h1>Hello {{subject}}!</h1>'
})
export class IsolatedComponent implements OnInit {
  subject = 'world';
  constructor() { }
  ngOnInit() { }
}
