import * as grpcWeb from 'grpc-web';

import * as grpc_v1_notes_pb from '../../grpc/v1/notes_pb';


export class NoteServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  list(
    request: grpc_v1_notes_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: grpc_v1_notes_pb.NoteList) => void
  ): grpcWeb.ClientReadableStream<grpc_v1_notes_pb.NoteList>;

  insert(
    request: grpc_v1_notes_pb.Note,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: grpc_v1_notes_pb.Note) => void
  ): grpcWeb.ClientReadableStream<grpc_v1_notes_pb.Note>;

  delete(
    request: grpc_v1_notes_pb.NoteRequestId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: grpc_v1_notes_pb.Note) => void
  ): grpcWeb.ClientReadableStream<grpc_v1_notes_pb.Note>;

}

export class NoteServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  list(
    request: grpc_v1_notes_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_v1_notes_pb.NoteList>;

  insert(
    request: grpc_v1_notes_pb.Note,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_v1_notes_pb.Note>;

  delete(
    request: grpc_v1_notes_pb.NoteRequestId,
    metadata?: grpcWeb.Metadata
  ): Promise<grpc_v1_notes_pb.Note>;

}

