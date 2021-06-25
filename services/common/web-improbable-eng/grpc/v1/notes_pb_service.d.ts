// package: 
// file: grpc/v1/notes.proto

import * as grpc_v1_notes_pb from "../../grpc/v1/notes_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NoteServiceList = {
  readonly methodName: string;
  readonly service: typeof NoteService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_v1_notes_pb.Empty;
  readonly responseType: typeof grpc_v1_notes_pb.NoteList;
};

type NoteServiceInsert = {
  readonly methodName: string;
  readonly service: typeof NoteService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_v1_notes_pb.Note;
  readonly responseType: typeof grpc_v1_notes_pb.Note;
};

type NoteServiceDelete = {
  readonly methodName: string;
  readonly service: typeof NoteService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof grpc_v1_notes_pb.NoteRequestId;
  readonly responseType: typeof grpc_v1_notes_pb.Note;
};

export class NoteService {
  static readonly serviceName: string;
  static readonly List: NoteServiceList;
  static readonly Insert: NoteServiceInsert;
  static readonly Delete: NoteServiceDelete;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class NoteServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  list(
    requestMessage: grpc_v1_notes_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_v1_notes_pb.NoteList|null) => void
  ): UnaryResponse;
  list(
    requestMessage: grpc_v1_notes_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: grpc_v1_notes_pb.NoteList|null) => void
  ): UnaryResponse;
  insert(
    requestMessage: grpc_v1_notes_pb.Note,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_v1_notes_pb.Note|null) => void
  ): UnaryResponse;
  insert(
    requestMessage: grpc_v1_notes_pb.Note,
    callback: (error: ServiceError|null, responseMessage: grpc_v1_notes_pb.Note|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: grpc_v1_notes_pb.NoteRequestId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: grpc_v1_notes_pb.Note|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: grpc_v1_notes_pb.NoteRequestId,
    callback: (error: ServiceError|null, responseMessage: grpc_v1_notes_pb.Note|null) => void
  ): UnaryResponse;
}

