import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  @Component({selector: 'app-main', template: ''})
  class MainStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainStubComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
