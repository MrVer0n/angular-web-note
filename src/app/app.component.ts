import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';

import { take } from 'rxjs';

import { NotesModel } from './models/notesModel';
import { NotesLoaderService } from './services/notes-loader.service';

const HOST = "http://localhost:4200/";

enum Panels {
  ViewerNote,
  WorkingWithNote
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Panels = Panels;
  currentPanel: Panels;
  selectedNote: NotesModel | null = null;
  readonly notes$ = this.notesLoaderService.getNodes();
  NoteURL!: URL;

  constructor(
    protected notesLoaderService: NotesLoaderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currentPanel = Panels.ViewerNote;
    this.route.queryParams.pipe(take(2)).subscribe((params: Params) => {
      this.selectedNote = params['id'] ? this.notesLoaderService.findNote(params['id']) : null;
    })
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        const tempURL: URL = new URL(HOST + event.url);
        this.selectedNote = Number(tempURL.searchParams.get('id')) ? this.notesLoaderService.findNote(Number(tempURL.searchParams.get('id'))) : null;
      }
    });
  }

  openViewerPanel(note: NotesModel) {
    this.selectedNote = note;
    this.router.navigate(['notes'], { queryParams: { id: note.id } });
    this.NoteURL = new URL(HOST + 'notes?id=' + note.id);
    this.currentPanel = Panels.ViewerNote;
  }

  openWorkingWithNotePanel(note: NotesModel | null) {
    this.router.navigate(['notes']);
    this.selectedNote = note;
    this.currentPanel = Panels.WorkingWithNote;
  }

  deleteNode(note: NotesModel) { this.notesLoaderService.deleteNode(note.id) }
}
