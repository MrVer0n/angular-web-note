import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesLoaderService } from './services/notes-loader.service';
import { NoteViewerComponent } from './components/note-viewer/note-viewer.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NoteAddComponent } from './components/note-add/note-add.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  AppComponent,
  NoteViewerComponent,
  NoteAddComponent,
  NoteEditComponent
];
const SERVICES = [
  NotesLoaderService,
  DatePipe
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
