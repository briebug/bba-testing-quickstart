import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bba-simple',
  template: '<h1>Hello {{subject}}!</h1>'
})
export class BasicComponent implements OnInit {
  subject = 'world';
  constructor() { }
  ngOnInit() { }
}
