/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteViewerComponent } from './note-viewer.component';

describe('NoteViewerComponent', () => {
  let component: NoteViewerComponent;
  let fixture: ComponentFixture<NoteViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
