// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var blog_blog_pb = require('../blog/blog_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_blog_v1_CreateRequest(arg) {
  if (!(arg instanceof blog_blog_pb.CreateRequest)) {
    throw new Error('Expected argument of type blog.v1.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_CreateRequest(buffer_arg) {
  return blog_blog_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_CreateResponse(arg) {
  if (!(arg instanceof blog_blog_pb.CreateResponse)) {
    throw new Error('Expected argument of type blog.v1.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_CreateResponse(buffer_arg) {
  return blog_blog_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_DeleteRequest(arg) {
  if (!(arg instanceof blog_blog_pb.DeleteRequest)) {
    throw new Error('Expected argument of type blog.v1.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_DeleteRequest(buffer_arg) {
  return blog_blog_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_DeleteResponse(arg) {
  if (!(arg instanceof blog_blog_pb.DeleteResponse)) {
    throw new Error('Expected argument of type blog.v1.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_DeleteResponse(buffer_arg) {
  return blog_blog_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_GetRequest(arg) {
  if (!(arg instanceof blog_blog_pb.GetRequest)) {
    throw new Error('Expected argument of type blog.v1.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_GetRequest(buffer_arg) {
  return blog_blog_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_GetResponse(arg) {
  if (!(arg instanceof blog_blog_pb.GetResponse)) {
    throw new Error('Expected argument of type blog.v1.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_GetResponse(buffer_arg) {
  return blog_blog_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_ListRequest(arg) {
  if (!(arg instanceof blog_blog_pb.ListRequest)) {
    throw new Error('Expected argument of type blog.v1.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_ListRequest(buffer_arg) {
  return blog_blog_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_ListResponse(arg) {
  if (!(arg instanceof blog_blog_pb.ListResponse)) {
    throw new Error('Expected argument of type blog.v1.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_ListResponse(buffer_arg) {
  return blog_blog_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_UpdateRequest(arg) {
  if (!(arg instanceof blog_blog_pb.UpdateRequest)) {
    throw new Error('Expected argument of type blog.v1.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_UpdateRequest(buffer_arg) {
  return blog_blog_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_v1_UpdateResponse(arg) {
  if (!(arg instanceof blog_blog_pb.UpdateResponse)) {
    throw new Error('Expected argument of type blog.v1.UpdateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_v1_UpdateResponse(buffer_arg) {
  return blog_blog_pb.UpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogServiceService = exports.BlogServiceService = {
  list: {
    path: '/blog.v1.BlogService/List',
    requestStream: false,
    responseStream: false,
    requestType: blog_blog_pb.ListRequest,
    responseType: blog_blog_pb.ListResponse,
    requestSerialize: serialize_blog_v1_ListRequest,
    requestDeserialize: deserialize_blog_v1_ListRequest,
    responseSerialize: serialize_blog_v1_ListResponse,
    responseDeserialize: deserialize_blog_v1_ListResponse,
  },
  get: {
    path: '/blog.v1.BlogService/Get',
    requestStream: false,
    responseStream: false,
    requestType: blog_blog_pb.GetRequest,
    responseType: blog_blog_pb.GetResponse,
    requestSerialize: serialize_blog_v1_GetRequest,
    requestDeserialize: deserialize_blog_v1_GetRequest,
    responseSerialize: serialize_blog_v1_GetResponse,
    responseDeserialize: deserialize_blog_v1_GetResponse,
  },
  create: {
    path: '/blog.v1.BlogService/Create',
    requestStream: false,
    responseStream: false,
    requestType: blog_blog_pb.CreateRequest,
    responseType: blog_blog_pb.CreateResponse,
    requestSerialize: serialize_blog_v1_CreateRequest,
    requestDeserialize: deserialize_blog_v1_CreateRequest,
    responseSerialize: serialize_blog_v1_CreateResponse,
    responseDeserialize: deserialize_blog_v1_CreateResponse,
  },
  update: {
    path: '/blog.v1.BlogService/Update',
    requestStream: false,
    responseStream: false,
    requestType: blog_blog_pb.UpdateRequest,
    responseType: blog_blog_pb.UpdateResponse,
    requestSerialize: serialize_blog_v1_UpdateRequest,
    requestDeserialize: deserialize_blog_v1_UpdateRequest,
    responseSerialize: serialize_blog_v1_UpdateResponse,
    responseDeserialize: deserialize_blog_v1_UpdateResponse,
  },
  delete: {
    path: '/blog.v1.BlogService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: blog_blog_pb.DeleteRequest,
    responseType: blog_blog_pb.DeleteResponse,
    requestSerialize: serialize_blog_v1_DeleteRequest,
    requestDeserialize: deserialize_blog_v1_DeleteRequest,
    responseSerialize: serialize_blog_v1_DeleteResponse,
    responseDeserialize: deserialize_blog_v1_DeleteResponse,
  },
};

exports.BlogServiceClient = grpc.makeGenericClientConstructor(BlogServiceService);
