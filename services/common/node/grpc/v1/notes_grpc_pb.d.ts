// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: grpc/v1/notes.proto

import * as grpc_v1_notes_pb from "../../grpc/v1/notes_pb";
import * as grpc from "grpc";

interface INoteServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  list: grpc.MethodDefinition<grpc_v1_notes_pb.Empty, grpc_v1_notes_pb.NoteList>;
  insert: grpc.MethodDefinition<grpc_v1_notes_pb.Note, grpc_v1_notes_pb.Note>;
  delete: grpc.MethodDefinition<grpc_v1_notes_pb.NoteRequestId, grpc_v1_notes_pb.Note>;
}

export const NoteServiceService: INoteServiceService;

export interface INoteServiceServer extends grpc.UntypedServiceImplementation {
  list: grpc.handleUnaryCall<grpc_v1_notes_pb.Empty, grpc_v1_notes_pb.NoteList>;
  insert: grpc.handleUnaryCall<grpc_v1_notes_pb.Note, grpc_v1_notes_pb.Note>;
  delete: grpc.handleUnaryCall<grpc_v1_notes_pb.NoteRequestId, grpc_v1_notes_pb.Note>;
}

export class NoteServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  list(argument: grpc_v1_notes_pb.Empty, callback: grpc.requestCallback<grpc_v1_notes_pb.NoteList>): grpc.ClientUnaryCall;
  list(argument: grpc_v1_notes_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<grpc_v1_notes_pb.NoteList>): grpc.ClientUnaryCall;
  list(argument: grpc_v1_notes_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<grpc_v1_notes_pb.NoteList>): grpc.ClientUnaryCall;
  insert(argument: grpc_v1_notes_pb.Note, callback: grpc.requestCallback<grpc_v1_notes_pb.Note>): grpc.ClientUnaryCall;
  insert(argument: grpc_v1_notes_pb.Note, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<grpc_v1_notes_pb.Note>): grpc.ClientUnaryCall;
  insert(argument: grpc_v1_notes_pb.Note, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<grpc_v1_notes_pb.Note>): grpc.ClientUnaryCall;
  delete(argument: grpc_v1_notes_pb.NoteRequestId, callback: grpc.requestCallback<grpc_v1_notes_pb.Note>): grpc.ClientUnaryCall;
  delete(argument: grpc_v1_notes_pb.NoteRequestId, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<grpc_v1_notes_pb.Note>): grpc.ClientUnaryCall;
  delete(argument: grpc_v1_notes_pb.NoteRequestId, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<grpc_v1_notes_pb.Note>): grpc.ClientUnaryCall;
}
