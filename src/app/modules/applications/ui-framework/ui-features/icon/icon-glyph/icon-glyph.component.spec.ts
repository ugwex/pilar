/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconGlyphComponent } from './icon-glyph.component';

describe('IconGlyphComponent', () => {
  let component: IconGlyphComponent;
  let fixture: ComponentFixture<IconGlyphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconGlyphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
