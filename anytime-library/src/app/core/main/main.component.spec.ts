import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  @Component({selector: 'app-header', template: ''})
  class HeaderStubComponent {}

  // tslint:disable-next-line:component-selector
  @Component({selector: 'router-outlet', template: ''})
  class RouterOutletStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, HeaderStubComponent, RouterOutletStubComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
