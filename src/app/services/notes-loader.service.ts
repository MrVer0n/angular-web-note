import { Injectable } from '@angular/core';

import { NodesModel } from '../models/nodesModel';

@Injectable({ providedIn: 'root' })
export class NotesLoaderService {

  notes: NodesModel[] = [];

  constructor() {
    this._uploadNotes<NodesModel>();
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
          dateСreation: new Date(),
          text: "Тут текст заметки."
        },
        {
          id: 1,
          title: "Заголовок 1",
          dateСreation: new Date(),
          text: "Тут текст заметки 2."
        },
        {
          id: 2,
          title: "Заголовок 2",
          dateСreation: new Date(),
          text: "Тут текст заметки 2."
        }
      ];
    }
  }

  private _saveNodes() {
    localStorage.setItem('dataNodes', JSON.stringify(this.notes));
  }

  getNodes() {
    return this.notes;
  }

  addNode(dataNodes: NodesModel) {
    this.notes = this.notes.concat(dataNodes);
    this._saveNodes();
  }

  deleteNode(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    this._saveNodes();
  }

  editNode(updatedNode: NodesModel) {
    this.notes.forEach(note => {
      if(note.id === updatedNode.id) Object.assign(note, updatedNode);
    })
    this._saveNodes();
  }
}
