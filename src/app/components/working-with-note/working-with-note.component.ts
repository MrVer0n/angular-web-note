import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

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
  @ViewChild('textArea') textArea!:ElementRef;

  editedNote!: NotesModel;
  isNew!: boolean;

  constructor(private notesLoaderService: NotesLoaderService) { }

  ngAfterViewChecked(): void { this.textAreaAdjust() }

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
  exitEditor() { this.onChengeNote.emit(this.editedNote) }

  textAreaAdjust() {
    this.textArea.nativeElement.style.height = '1px';
    this.textArea.nativeElement.style.height = (25+this.textArea.nativeElement.scrollHeight)+'px';
  }
}
