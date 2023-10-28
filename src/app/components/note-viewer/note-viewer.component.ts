import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ClipboardService } from 'ngx-clipboard';

import { NotesModel } from 'src/app/models/notesModel';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.scss']
})
export class NoteViewerComponent {
  @Input() selectedNote!: NotesModel | null;
  @Input() NoteURL!: URL;
  @Output() onChengeNote = new EventEmitter();
  
  constructor(private clipboardService: ClipboardService) { }

  copyContent() { this.clipboardService.copyFromContent(this.NoteURL.toString()) }

  exitEditor() { this.onChengeNote.emit(null) }
}
