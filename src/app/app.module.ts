import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesLoaderService } from './services/notes-loader.service';
import { NoteViewerComponent } from './components/note-viewer/note-viewer.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NoteAddComponent } from './components/note-add/note-add.component';

const COMPONENTS = [
  AppComponent,
  NoteViewerComponent,
  NoteAddComponent,
  NoteEditComponent
];
const SERVICES = [
  NotesLoaderService
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
