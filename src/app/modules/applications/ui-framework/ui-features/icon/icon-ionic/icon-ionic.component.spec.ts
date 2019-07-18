/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconIonicComponent } from './icon-ionic.component';

describe('IconIonicComponent', () => {
  let component: IconIonicComponent;
  let fixture: ComponentFixture<IconIonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconIonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
