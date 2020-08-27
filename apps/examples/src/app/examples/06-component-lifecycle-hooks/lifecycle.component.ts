import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'bba-lifecycle',
  template: '<h1>Lifecycle Hooks!</h1>'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    this.initData();
  }
  ngOnDestroy() {
    this.purgeData();
  }

  initData() {}
  purgeData() {}
}