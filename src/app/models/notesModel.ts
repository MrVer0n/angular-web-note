export interface NotesModel {
    id: number;
    title: string,
    updated: Date,
    text: string
}

export interface EditableNotesModel {
    isNew: boolean,
    note: NotesModel
}