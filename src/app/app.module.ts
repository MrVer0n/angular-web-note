import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteViewerComponent } from './components/note-viewer/note-viewer.component';
import { NoteEditComponent } from './components/working-with-note/working-with-note.component';
import { NotesLoaderService } from './services/notes-loader.service';


const COMPONENTS = [
  AppComponent,
  NoteViewerComponent,
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
    FormsModule,
    ClipboardModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
