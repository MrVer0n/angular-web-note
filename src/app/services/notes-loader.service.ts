import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { NotesModel } from '../models/notesModel';

@Injectable({ providedIn: 'root' })
export class NotesLoaderService {

  noteStream: BehaviorSubject<NotesModel[]>;
  notes: NotesModel[] = [];

  constructor() {
    this._uploadNotes<NotesModel>();
    this.noteStream = new BehaviorSubject<NotesModel[]>((this.notes))
  }

  private _uploadNotes<T>(): void {
    let data: any = localStorage.getItem('dataNodes');
    if (JSON.parse(data) as T[]) {
      this.notes = JSON.parse(data);
    } else {
      //IF NULL => set default
      this.notes = [
        {
          id: 0,
          title: "Заголовок 0",
          updated: new Date(),
          text: "Тут текст заметки."
        },
        {
          id: 1,
          title: "Заголовок 1",
          updated: new Date(),
          text: "Тут текст заметки 2."
        },
        {
          id: 2,
          title: "Заголовок 2",
          updated: new Date(),
          text: "Тут текст заметки 2."
        }
      ];
    }
  }

  private _saveNodes() {
    localStorage.setItem('dataNodes', JSON.stringify(this.notes));
    this.noteStream.next(this.notes)
  }

  getNodes() {
    return this.noteStream;
  }

  addNode(dataNodes: NotesModel) {
    this.notes = this.notes.concat(dataNodes);
    this._saveNodes();
  }

  deleteNode(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    this._saveNodes();
  }

  findNote(id: number) {
    return this.notes.filter(note => note.id == id)[0];
  }

  editNode(updatedNode: NotesModel) {
    this.notes.forEach(note => {
      if(note.id === updatedNode.id) Object.assign(note, updatedNode);
    })
    this._saveNodes();
  }
}
