/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./notes_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.NoteServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.NoteServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.NoteList>}
 */
const methodDescriptor_NoteService_List = new grpc.web.MethodDescriptor(
  '/NoteService/List',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.NoteList,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NoteList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.NoteList>}
 */
const methodInfo_NoteService_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.NoteList,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.NoteList.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.NoteList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.NoteList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NoteServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NoteService/List',
      request,
      metadata || {},
      methodDescriptor_NoteService_List,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.NoteList>}
 *     Promise that resolves to the response
 */
proto.NoteServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NoteService/List',
      request,
      metadata || {},
      methodDescriptor_NoteService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Note,
 *   !proto.Note>}
 */
const methodDescriptor_NoteService_Insert = new grpc.web.MethodDescriptor(
  '/NoteService/Insert',
  grpc.web.MethodType.UNARY,
  proto.Note,
  proto.Note,
  /**
   * @param {!proto.Note} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Note,
 *   !proto.Note>}
 */
const methodInfo_NoteService_Insert = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Note,
  /**
   * @param {!proto.Note} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Note.deserializeBinary
);


/**
 * @param {!proto.Note} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NoteServiceClient.prototype.insert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NoteService/Insert',
      request,
      metadata || {},
      methodDescriptor_NoteService_Insert,
      callback);
};


/**
 * @param {!proto.Note} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Note>}
 *     Promise that resolves to the response
 */
proto.NoteServicePromiseClient.prototype.insert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NoteService/Insert',
      request,
      metadata || {},
      methodDescriptor_NoteService_Insert);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.NoteRequestId,
 *   !proto.Note>}
 */
const methodDescriptor_NoteService_Delete = new grpc.web.MethodDescriptor(
  '/NoteService/Delete',
  grpc.web.MethodType.UNARY,
  proto.NoteRequestId,
  proto.Note,
  /**
   * @param {!proto.NoteRequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Note.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.NoteRequestId,
 *   !proto.Note>}
 */
const methodInfo_NoteService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Note,
  /**
   * @param {!proto.NoteRequestId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Note.deserializeBinary
);


/**
 * @param {!proto.NoteRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Note)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Note>|undefined}
 *     The XHR Node Readable Stream
 */
proto.NoteServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/NoteService/Delete',
      request,
      metadata || {},
      methodDescriptor_NoteService_Delete,
      callback);
};


/**
 * @param {!proto.NoteRequestId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Note>}
 *     Promise that resolves to the response
 */
proto.NoteServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/NoteService/Delete',
      request,
      metadata || {},
      methodDescriptor_NoteService_Delete);
};


module.exports = proto;

