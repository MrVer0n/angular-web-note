import { Component } from '@angular/core';

import { NotesModel } from './models/notesModel';
import { NotesLoaderService } from './services/notes-loader.service';

enum Panels {
  ViewerNote,
  EditNote
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Panels = Panels;
  currentPanel: Panels;

  notes:NotesModel[] = this.notesLoaderService.getNodes();
  selectedNote:NotesModel | null = null;

  constructor(private notesLoaderService: NotesLoaderService ) {
    this.currentPanel = Panels.ViewerNote;
   }

  openViewerPanel(note:NotesModel) {
    this.selectedNote = note;
    this.currentPanel = Panels.ViewerNote;
  }

  openEditPanel(note: NotesModel | null) {
    this.selectedNote = note;
    this.currentPanel = Panels.EditNote;
  }
}
