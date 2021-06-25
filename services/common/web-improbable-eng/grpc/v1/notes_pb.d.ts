// package: 
// file: grpc/v1/notes.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Note extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    id: string,
    title: string,
    content: string,
  }
}

export class NoteList extends jspb.Message {
  clearNotesList(): void;
  getNotesList(): Array<Note>;
  setNotesList(value: Array<Note>): void;
  addNotes(value?: Note, index?: number): Note;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteList.AsObject;
  static toObject(includeInstance: boolean, msg: NoteList): NoteList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoteList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteList;
  static deserializeBinaryFromReader(message: NoteList, reader: jspb.BinaryReader): NoteList;
}

export namespace NoteList {
  export type AsObject = {
    notesList: Array<Note.AsObject>,
  }
}

export class NoteRequestId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteRequestId.AsObject;
  static toObject(includeInstance: boolean, msg: NoteRequestId): NoteRequestId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoteRequestId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteRequestId;
  static deserializeBinaryFromReader(message: NoteRequestId, reader: jspb.BinaryReader): NoteRequestId;
}

export namespace NoteRequestId {
  export type AsObject = {
    id: string,
  }
}

