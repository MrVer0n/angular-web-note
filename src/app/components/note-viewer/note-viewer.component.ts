import { Component, Input, OnInit } from '@angular/core';

import { NotesModel } from 'src/app/models/notesModel';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.scss']
})
export class NoteViewerComponent implements OnInit {
  @Input() selectedNote!: NotesModel | null;
  constructor() { }

  ngOnInit() {

  }

}
