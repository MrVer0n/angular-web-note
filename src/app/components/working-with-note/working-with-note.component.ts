import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { NotesModel } from 'src/app/models/notesModel';
import { NotesLoaderService } from 'src/app/services/notes-loader.service';

@Component({
  selector: 'app-working-with-note',
  templateUrl: './working-with-note.component.html',
  styleUrls: ['./working-with-note.component.scss']
})
export class NoteEditComponent implements OnChanges {

  @Input() selectedNote!: NotesModel | null;
  @Output() onChengeNote = new EventEmitter();

  editedNote!: NotesModel;
  isNew!: boolean;

  constructor(private notesLoaderService: NotesLoaderService) { }

  ngOnChanges(): void {
    if (this.selectedNote) {
      this.isNew = false;
      this.editedNote = Object.assign({}, this.selectedNote);
    } else {
      this.isNew = true;
      this.editedNote = {
        id: new Date().getUTCMilliseconds(),
        title: '',
        updated: new Date(),
        text: ''
      }
    }
  }
  saveNote() {
    this.editedNote.updated = new Date;
    this.onChengeNote.emit(this.editedNote);
    this.isNew ? this.notesLoaderService.addNode(this.editedNote) : this.notesLoaderService.editNode(this.editedNote);
  }
  exitEditor() {
    this.onChengeNote.emit(this.editedNote);
  }
}
