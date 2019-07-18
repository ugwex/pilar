/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconFaComponent } from './icon-fa.component';

describe('IconFaComponent', () => {
  let component: IconFaComponent;
  let fixture: ComponentFixture<IconFaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
