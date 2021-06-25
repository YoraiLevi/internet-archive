// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpc_v1_notes_pb = require('../../grpc/v1/notes_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof grpc_v1_notes_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return grpc_v1_notes_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Note(arg) {
  if (!(arg instanceof grpc_v1_notes_pb.Note)) {
    throw new Error('Expected argument of type Note');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Note(buffer_arg) {
  return grpc_v1_notes_pb.Note.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NoteList(arg) {
  if (!(arg instanceof grpc_v1_notes_pb.NoteList)) {
    throw new Error('Expected argument of type NoteList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteList(buffer_arg) {
  return grpc_v1_notes_pb.NoteList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NoteRequestId(arg) {
  if (!(arg instanceof grpc_v1_notes_pb.NoteRequestId)) {
    throw new Error('Expected argument of type NoteRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteRequestId(buffer_arg) {
  return grpc_v1_notes_pb.NoteRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}


var NoteServiceService = exports.NoteServiceService = {
  list: {
    path: '/NoteService/List',
    requestStream: false,
    responseStream: false,
    requestType: grpc_v1_notes_pb.Empty,
    responseType: grpc_v1_notes_pb.NoteList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_NoteList,
    responseDeserialize: deserialize_NoteList,
  },
  insert: {
    path: '/NoteService/Insert',
    requestStream: false,
    responseStream: false,
    requestType: grpc_v1_notes_pb.Note,
    responseType: grpc_v1_notes_pb.Note,
    requestSerialize: serialize_Note,
    requestDeserialize: deserialize_Note,
    responseSerialize: serialize_Note,
    responseDeserialize: deserialize_Note,
  },
  delete: {
    path: '/NoteService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: grpc_v1_notes_pb.NoteRequestId,
    responseType: grpc_v1_notes_pb.Note,
    requestSerialize: serialize_NoteRequestId,
    requestDeserialize: deserialize_NoteRequestId,
    responseSerialize: serialize_Note,
    responseDeserialize: deserialize_Note,
  },
};

exports.NoteServiceClient = grpc.makeGenericClientConstructor(NoteServiceService);
