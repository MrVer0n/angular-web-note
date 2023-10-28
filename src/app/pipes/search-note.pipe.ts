import { Pipe, PipeTransform } from '@angular/core';
import { NotesModel } from '../models/notesModel';

@Pipe({
  name: 'searchNote'
})
export class SearchNotePipe implements PipeTransform {

  transform(notes: NotesModel[] | null, searchNoteTitle: any): NotesModel[] {
    if (!notes) return [];
    if (!searchNoteTitle) return notes;
    searchNoteTitle = searchNoteTitle.toLocaleLowerCase();

    return notes.filter(note => {
      return note.title.toLocaleLowerCase().includes(searchNoteTitle);
    });
  }
}
