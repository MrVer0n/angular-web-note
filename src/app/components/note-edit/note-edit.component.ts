import { Component, Input, OnChanges } from '@angular/core';

import { EditableNotesModel, NotesModel } from 'src/app/models/notesModel';
import { NotesLoaderService } from 'src/app/services/notes-loader.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnChanges {

  @Input() selectedNote!: NotesModel | null;
  @Input() lastID!: number;
  name = 'van'
  editedNote!: NotesModel;
  isNew!: boolean;
  constructor(private notesLoaderService: NotesLoaderService ) { }

  ngOnChanges(): void {
    if(this.selectedNote) {
      this.isNew = false;
      this.editedNote = this.selectedNote;
    } else {
      this.isNew = true;
      this.editedNote = {
        id: this.lastID,
        title: '',
        updated: new Date(),
        text: ''
      }
    }
  }
  saveNote() {
    this.isNew ? this.notesLoaderService.addNode(this.editedNote) : this.notesLoaderService.editNode(this.editedNote);
  }
}
