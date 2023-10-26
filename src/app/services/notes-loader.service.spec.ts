/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotesLoaderService } from './notes-loader.service';

describe('Service: NoteLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesLoaderService]
    });
  });

  it('should ...', inject([NotesLoaderService], (service: NotesLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
