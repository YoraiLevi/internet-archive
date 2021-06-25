// package: 
// file: grpc/v1/notes.proto

var grpc_v1_notes_pb = require("../../grpc/v1/notes_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NoteService = (function () {
  function NoteService() {}
  NoteService.serviceName = "NoteService";
  return NoteService;
}());

NoteService.List = {
  methodName: "List",
  service: NoteService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_v1_notes_pb.Empty,
  responseType: grpc_v1_notes_pb.NoteList
};

NoteService.Insert = {
  methodName: "Insert",
  service: NoteService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_v1_notes_pb.Note,
  responseType: grpc_v1_notes_pb.Note
};

NoteService.Delete = {
  methodName: "Delete",
  service: NoteService,
  requestStream: false,
  responseStream: false,
  requestType: grpc_v1_notes_pb.NoteRequestId,
  responseType: grpc_v1_notes_pb.Note
};

exports.NoteService = NoteService;

function NoteServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NoteServiceClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NoteService.List, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

NoteServiceClient.prototype.insert = function insert(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NoteService.Insert, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

NoteServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NoteService.Delete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.NoteServiceClient = NoteServiceClient;

