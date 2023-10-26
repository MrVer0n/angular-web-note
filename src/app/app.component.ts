import { Component } from '@angular/core';

import { NodesModel } from './models/nodesModel';
import { NotesLoaderService } from './services/notes-loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notes:NodesModel[] = this.notesLoaderService.getNodes();

  constructor(public notesLoaderService: NotesLoaderService ) { }
}
