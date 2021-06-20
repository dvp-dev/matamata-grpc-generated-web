/**
 * @fileoverview gRPC-Web generated client stub for contents.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var contents_v1_tag_pb = require('../../contents/v1/tag_pb.js')

var contents_v1_category_pb = require('../../contents/v1/category_pb.js')

var contents_v1_article_pb = require('../../contents/v1/article_pb.js')
const proto = {};
proto.contents = {};
proto.contents.v1 = require('./contents_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.contents.v1.ContentServiceClient =
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
proto.contents.v1.ContentServicePromiseClient =
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
 *   !proto.contents.v1.TagGetOneRequest,
 *   !proto.contents.v1.TagGetOneResponse>}
 */
const methodDescriptor_ContentService_TagGetOne = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/TagGetOne',
  grpc.web.MethodType.UNARY,
  contents_v1_tag_pb.TagGetOneRequest,
  contents_v1_tag_pb.TagGetOneResponse,
  /**
   * @param {!proto.contents.v1.TagGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.TagGetOneRequest,
 *   !proto.contents.v1.TagGetOneResponse>}
 */
const methodInfo_ContentService_TagGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_tag_pb.TagGetOneResponse,
  /**
   * @param {!proto.contents.v1.TagGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.TagGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.TagGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.TagGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.tagGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/TagGetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagGetOne,
      callback);
};


/**
 * @param {!proto.contents.v1.TagGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.TagGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.tagGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/TagGetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.TagGetMultipleRequest,
 *   !proto.contents.v1.TagGetMultipleResponse>}
 */
const methodDescriptor_ContentService_TagGetMultiple = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/TagGetMultiple',
  grpc.web.MethodType.UNARY,
  contents_v1_tag_pb.TagGetMultipleRequest,
  contents_v1_tag_pb.TagGetMultipleResponse,
  /**
   * @param {!proto.contents.v1.TagGetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagGetMultipleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.TagGetMultipleRequest,
 *   !proto.contents.v1.TagGetMultipleResponse>}
 */
const methodInfo_ContentService_TagGetMultiple = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_tag_pb.TagGetMultipleResponse,
  /**
   * @param {!proto.contents.v1.TagGetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagGetMultipleResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.TagGetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.TagGetMultipleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.TagGetMultipleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.tagGetMultiple =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/TagGetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagGetMultiple,
      callback);
};


/**
 * @param {!proto.contents.v1.TagGetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.TagGetMultipleResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.tagGetMultiple =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/TagGetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagGetMultiple);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.TagCreateRequest,
 *   !proto.contents.v1.TagCreateResponse>}
 */
const methodDescriptor_ContentService_TagCreate = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/TagCreate',
  grpc.web.MethodType.UNARY,
  contents_v1_tag_pb.TagCreateRequest,
  contents_v1_tag_pb.TagCreateResponse,
  /**
   * @param {!proto.contents.v1.TagCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.TagCreateRequest,
 *   !proto.contents.v1.TagCreateResponse>}
 */
const methodInfo_ContentService_TagCreate = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_tag_pb.TagCreateResponse,
  /**
   * @param {!proto.contents.v1.TagCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagCreateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.TagCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.TagCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.TagCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.tagCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/TagCreate',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagCreate,
      callback);
};


/**
 * @param {!proto.contents.v1.TagCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.TagCreateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.tagCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/TagCreate',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.TagUpdateRequest,
 *   !proto.contents.v1.TagUpdateResponse>}
 */
const methodDescriptor_ContentService_TagUpdate = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/TagUpdate',
  grpc.web.MethodType.UNARY,
  contents_v1_tag_pb.TagUpdateRequest,
  contents_v1_tag_pb.TagUpdateResponse,
  /**
   * @param {!proto.contents.v1.TagUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.TagUpdateRequest,
 *   !proto.contents.v1.TagUpdateResponse>}
 */
const methodInfo_ContentService_TagUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_tag_pb.TagUpdateResponse,
  /**
   * @param {!proto.contents.v1.TagUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.TagUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.TagUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.TagUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.tagUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/TagUpdate',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagUpdate,
      callback);
};


/**
 * @param {!proto.contents.v1.TagUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.TagUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.tagUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/TagUpdate',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.TagDeleteRequest,
 *   !proto.contents.v1.TagDeleteResponse>}
 */
const methodDescriptor_ContentService_TagDelete = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/TagDelete',
  grpc.web.MethodType.UNARY,
  contents_v1_tag_pb.TagDeleteRequest,
  contents_v1_tag_pb.TagDeleteResponse,
  /**
   * @param {!proto.contents.v1.TagDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.TagDeleteRequest,
 *   !proto.contents.v1.TagDeleteResponse>}
 */
const methodInfo_ContentService_TagDelete = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_tag_pb.TagDeleteResponse,
  /**
   * @param {!proto.contents.v1.TagDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_tag_pb.TagDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.TagDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.TagDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.TagDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.tagDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/TagDelete',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagDelete,
      callback);
};


/**
 * @param {!proto.contents.v1.TagDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.TagDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.tagDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/TagDelete',
      request,
      metadata || {},
      methodDescriptor_ContentService_TagDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category1GetOneRequest,
 *   !proto.contents.v1.Category1GetOneResponse>}
 */
const methodDescriptor_ContentService_Category1GetOne = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category1GetOne',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category1GetOneRequest,
  contents_v1_category_pb.Category1GetOneResponse,
  /**
   * @param {!proto.contents.v1.Category1GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1GetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category1GetOneRequest,
 *   !proto.contents.v1.Category1GetOneResponse>}
 */
const methodInfo_ContentService_Category1GetOne = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category1GetOneResponse,
  /**
   * @param {!proto.contents.v1.Category1GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1GetOneResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category1GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category1GetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category1GetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category1GetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category1GetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1GetOne,
      callback);
};


/**
 * @param {!proto.contents.v1.Category1GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category1GetOneResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category1GetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category1GetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1GetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category2GetOneRequest,
 *   !proto.contents.v1.Category2GetOneResponse>}
 */
const methodDescriptor_ContentService_Category2GetOne = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category2GetOne',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category2GetOneRequest,
  contents_v1_category_pb.Category2GetOneResponse,
  /**
   * @param {!proto.contents.v1.Category2GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2GetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category2GetOneRequest,
 *   !proto.contents.v1.Category2GetOneResponse>}
 */
const methodInfo_ContentService_Category2GetOne = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category2GetOneResponse,
  /**
   * @param {!proto.contents.v1.Category2GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2GetOneResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category2GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category2GetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category2GetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category2GetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category2GetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2GetOne,
      callback);
};


/**
 * @param {!proto.contents.v1.Category2GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category2GetOneResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category2GetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category2GetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2GetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category3GetOneRequest,
 *   !proto.contents.v1.Category3GetOneResponse>}
 */
const methodDescriptor_ContentService_Category3GetOne = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category3GetOne',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category3GetOneRequest,
  contents_v1_category_pb.Category3GetOneResponse,
  /**
   * @param {!proto.contents.v1.Category3GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3GetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category3GetOneRequest,
 *   !proto.contents.v1.Category3GetOneResponse>}
 */
const methodInfo_ContentService_Category3GetOne = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category3GetOneResponse,
  /**
   * @param {!proto.contents.v1.Category3GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3GetOneResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category3GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category3GetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category3GetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category3GetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category3GetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3GetOne,
      callback);
};


/**
 * @param {!proto.contents.v1.Category3GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category3GetOneResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category3GetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category3GetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3GetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category1GetMultipleRequest,
 *   !proto.contents.v1.Category1GetMultipleResponse>}
 */
const methodDescriptor_ContentService_Category1GetMultiple = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category1GetMultiple',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category1GetMultipleRequest,
  contents_v1_category_pb.Category1GetMultipleResponse,
  /**
   * @param {!proto.contents.v1.Category1GetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1GetMultipleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category1GetMultipleRequest,
 *   !proto.contents.v1.Category1GetMultipleResponse>}
 */
const methodInfo_ContentService_Category1GetMultiple = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category1GetMultipleResponse,
  /**
   * @param {!proto.contents.v1.Category1GetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1GetMultipleResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category1GetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category1GetMultipleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category1GetMultipleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category1GetMultiple =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category1GetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1GetMultiple,
      callback);
};


/**
 * @param {!proto.contents.v1.Category1GetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category1GetMultipleResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category1GetMultiple =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category1GetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1GetMultiple);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category2GetMultipleRequest,
 *   !proto.contents.v1.Category2GetMultipleResponse>}
 */
const methodDescriptor_ContentService_Category2GetMultiple = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category2GetMultiple',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category2GetMultipleRequest,
  contents_v1_category_pb.Category2GetMultipleResponse,
  /**
   * @param {!proto.contents.v1.Category2GetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2GetMultipleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category2GetMultipleRequest,
 *   !proto.contents.v1.Category2GetMultipleResponse>}
 */
const methodInfo_ContentService_Category2GetMultiple = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category2GetMultipleResponse,
  /**
   * @param {!proto.contents.v1.Category2GetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2GetMultipleResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category2GetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category2GetMultipleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category2GetMultipleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category2GetMultiple =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category2GetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2GetMultiple,
      callback);
};


/**
 * @param {!proto.contents.v1.Category2GetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category2GetMultipleResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category2GetMultiple =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category2GetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2GetMultiple);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category3GetMultipleRequest,
 *   !proto.contents.v1.Category3GetMultipleResponse>}
 */
const methodDescriptor_ContentService_Category3GetMultiple = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category3GetMultiple',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category3GetMultipleRequest,
  contents_v1_category_pb.Category3GetMultipleResponse,
  /**
   * @param {!proto.contents.v1.Category3GetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3GetMultipleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category3GetMultipleRequest,
 *   !proto.contents.v1.Category3GetMultipleResponse>}
 */
const methodInfo_ContentService_Category3GetMultiple = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category3GetMultipleResponse,
  /**
   * @param {!proto.contents.v1.Category3GetMultipleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3GetMultipleResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category3GetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category3GetMultipleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category3GetMultipleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category3GetMultiple =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category3GetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3GetMultiple,
      callback);
};


/**
 * @param {!proto.contents.v1.Category3GetMultipleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category3GetMultipleResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category3GetMultiple =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category3GetMultiple',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3GetMultiple);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category1CreateRequest,
 *   !proto.contents.v1.Category1CreateResponse>}
 */
const methodDescriptor_ContentService_Category1Create = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category1Create',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category1CreateRequest,
  contents_v1_category_pb.Category1CreateResponse,
  /**
   * @param {!proto.contents.v1.Category1CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category1CreateRequest,
 *   !proto.contents.v1.Category1CreateResponse>}
 */
const methodInfo_ContentService_Category1Create = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category1CreateResponse,
  /**
   * @param {!proto.contents.v1.Category1CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1CreateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category1CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category1CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category1CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category1Create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category1Create',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1Create,
      callback);
};


/**
 * @param {!proto.contents.v1.Category1CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category1CreateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category1Create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category1Create',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category2CreateRequest,
 *   !proto.contents.v1.Category2CreateResponse>}
 */
const methodDescriptor_ContentService_Category2Create = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category2Create',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category2CreateRequest,
  contents_v1_category_pb.Category2CreateResponse,
  /**
   * @param {!proto.contents.v1.Category2CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category2CreateRequest,
 *   !proto.contents.v1.Category2CreateResponse>}
 */
const methodInfo_ContentService_Category2Create = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category2CreateResponse,
  /**
   * @param {!proto.contents.v1.Category2CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2CreateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category2CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category2CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category2CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category2Create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category2Create',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2Create,
      callback);
};


/**
 * @param {!proto.contents.v1.Category2CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category2CreateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category2Create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category2Create',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category3CreateRequest,
 *   !proto.contents.v1.Category3CreateResponse>}
 */
const methodDescriptor_ContentService_Category3Create = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category3Create',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category3CreateRequest,
  contents_v1_category_pb.Category3CreateResponse,
  /**
   * @param {!proto.contents.v1.Category3CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category3CreateRequest,
 *   !proto.contents.v1.Category3CreateResponse>}
 */
const methodInfo_ContentService_Category3Create = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category3CreateResponse,
  /**
   * @param {!proto.contents.v1.Category3CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3CreateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category3CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category3CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category3CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category3Create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category3Create',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3Create,
      callback);
};


/**
 * @param {!proto.contents.v1.Category3CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category3CreateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category3Create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category3Create',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category1UpdateRequest,
 *   !proto.contents.v1.Category1UpdateResponse>}
 */
const methodDescriptor_ContentService_Category1Update = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category1Update',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category1UpdateRequest,
  contents_v1_category_pb.Category1UpdateResponse,
  /**
   * @param {!proto.contents.v1.Category1UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1UpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category1UpdateRequest,
 *   !proto.contents.v1.Category1UpdateResponse>}
 */
const methodInfo_ContentService_Category1Update = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category1UpdateResponse,
  /**
   * @param {!proto.contents.v1.Category1UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category1UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category1UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category1UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category1Update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category1Update',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1Update,
      callback);
};


/**
 * @param {!proto.contents.v1.Category1UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category1UpdateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category1Update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category1Update',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category2UpdateRequest,
 *   !proto.contents.v1.Category2UpdateResponse>}
 */
const methodDescriptor_ContentService_Category2Update = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category2Update',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category2UpdateRequest,
  contents_v1_category_pb.Category2UpdateResponse,
  /**
   * @param {!proto.contents.v1.Category2UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2UpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category2UpdateRequest,
 *   !proto.contents.v1.Category2UpdateResponse>}
 */
const methodInfo_ContentService_Category2Update = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category2UpdateResponse,
  /**
   * @param {!proto.contents.v1.Category2UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category2UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category2UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category2UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category2Update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category2Update',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2Update,
      callback);
};


/**
 * @param {!proto.contents.v1.Category2UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category2UpdateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category2Update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category2Update',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category3UpdateRequest,
 *   !proto.contents.v1.Category3UpdateResponse>}
 */
const methodDescriptor_ContentService_Category3Update = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category3Update',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category3UpdateRequest,
  contents_v1_category_pb.Category3UpdateResponse,
  /**
   * @param {!proto.contents.v1.Category3UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3UpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category3UpdateRequest,
 *   !proto.contents.v1.Category3UpdateResponse>}
 */
const methodInfo_ContentService_Category3Update = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category3UpdateResponse,
  /**
   * @param {!proto.contents.v1.Category3UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category3UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category3UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category3UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category3Update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category3Update',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3Update,
      callback);
};


/**
 * @param {!proto.contents.v1.Category3UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category3UpdateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category3Update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category3Update',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category1DeleteRequest,
 *   !proto.contents.v1.Category1DeleteResponse>}
 */
const methodDescriptor_ContentService_Category1Delete = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category1Delete',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category1DeleteRequest,
  contents_v1_category_pb.Category1DeleteResponse,
  /**
   * @param {!proto.contents.v1.Category1DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category1DeleteRequest,
 *   !proto.contents.v1.Category1DeleteResponse>}
 */
const methodInfo_ContentService_Category1Delete = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category1DeleteResponse,
  /**
   * @param {!proto.contents.v1.Category1DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category1DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category1DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category1DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category1DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category1Delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category1Delete',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1Delete,
      callback);
};


/**
 * @param {!proto.contents.v1.Category1DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category1DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category1Delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category1Delete',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category1Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category2DeleteRequest,
 *   !proto.contents.v1.Category2DeleteResponse>}
 */
const methodDescriptor_ContentService_Category2Delete = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category2Delete',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category2DeleteRequest,
  contents_v1_category_pb.Category2DeleteResponse,
  /**
   * @param {!proto.contents.v1.Category2DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category2DeleteRequest,
 *   !proto.contents.v1.Category2DeleteResponse>}
 */
const methodInfo_ContentService_Category2Delete = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category2DeleteResponse,
  /**
   * @param {!proto.contents.v1.Category2DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category2DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category2DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category2DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category2DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category2Delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category2Delete',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2Delete,
      callback);
};


/**
 * @param {!proto.contents.v1.Category2DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category2DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category2Delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category2Delete',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category2Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.Category3DeleteRequest,
 *   !proto.contents.v1.Category3DeleteResponse>}
 */
const methodDescriptor_ContentService_Category3Delete = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/Category3Delete',
  grpc.web.MethodType.UNARY,
  contents_v1_category_pb.Category3DeleteRequest,
  contents_v1_category_pb.Category3DeleteResponse,
  /**
   * @param {!proto.contents.v1.Category3DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.Category3DeleteRequest,
 *   !proto.contents.v1.Category3DeleteResponse>}
 */
const methodInfo_ContentService_Category3Delete = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_category_pb.Category3DeleteResponse,
  /**
   * @param {!proto.contents.v1.Category3DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_category_pb.Category3DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.Category3DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.Category3DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.Category3DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.category3Delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/Category3Delete',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3Delete,
      callback);
};


/**
 * @param {!proto.contents.v1.Category3DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.Category3DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.category3Delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/Category3Delete',
      request,
      metadata || {},
      methodDescriptor_ContentService_Category3Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.ArticleGetOneRequest,
 *   !proto.contents.v1.ArticleGetOneResponse>}
 */
const methodDescriptor_ContentService_ArticleGetOne = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/ArticleGetOne',
  grpc.web.MethodType.UNARY,
  contents_v1_article_pb.ArticleGetOneRequest,
  contents_v1_article_pb.ArticleGetOneResponse,
  /**
   * @param {!proto.contents.v1.ArticleGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.ArticleGetOneRequest,
 *   !proto.contents.v1.ArticleGetOneResponse>}
 */
const methodInfo_ContentService_ArticleGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_article_pb.ArticleGetOneResponse,
  /**
   * @param {!proto.contents.v1.ArticleGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.ArticleGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.ArticleGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.ArticleGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.articleGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleGetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleGetOne,
      callback);
};


/**
 * @param {!proto.contents.v1.ArticleGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.ArticleGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.articleGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleGetOne',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.ArticleGetListRequest,
 *   !proto.contents.v1.ArticleGetListResponse>}
 */
const methodDescriptor_ContentService_ArticleGetList = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/ArticleGetList',
  grpc.web.MethodType.UNARY,
  contents_v1_article_pb.ArticleGetListRequest,
  contents_v1_article_pb.ArticleGetListResponse,
  /**
   * @param {!proto.contents.v1.ArticleGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleGetListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.ArticleGetListRequest,
 *   !proto.contents.v1.ArticleGetListResponse>}
 */
const methodInfo_ContentService_ArticleGetList = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_article_pb.ArticleGetListResponse,
  /**
   * @param {!proto.contents.v1.ArticleGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleGetListResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.ArticleGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.ArticleGetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.ArticleGetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.articleGetList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleGetList',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleGetList,
      callback);
};


/**
 * @param {!proto.contents.v1.ArticleGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.ArticleGetListResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.articleGetList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleGetList',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleGetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.ArticleCreateRequest,
 *   !proto.contents.v1.ArticleCreateResponse>}
 */
const methodDescriptor_ContentService_ArticleCreate = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/ArticleCreate',
  grpc.web.MethodType.UNARY,
  contents_v1_article_pb.ArticleCreateRequest,
  contents_v1_article_pb.ArticleCreateResponse,
  /**
   * @param {!proto.contents.v1.ArticleCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.ArticleCreateRequest,
 *   !proto.contents.v1.ArticleCreateResponse>}
 */
const methodInfo_ContentService_ArticleCreate = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_article_pb.ArticleCreateResponse,
  /**
   * @param {!proto.contents.v1.ArticleCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleCreateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.ArticleCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.ArticleCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.ArticleCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.articleCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleCreate',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleCreate,
      callback);
};


/**
 * @param {!proto.contents.v1.ArticleCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.ArticleCreateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.articleCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleCreate',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.ArticleUpdateRequest,
 *   !proto.contents.v1.ArticleUpdateResponse>}
 */
const methodDescriptor_ContentService_ArticleUpdate = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/ArticleUpdate',
  grpc.web.MethodType.UNARY,
  contents_v1_article_pb.ArticleUpdateRequest,
  contents_v1_article_pb.ArticleUpdateResponse,
  /**
   * @param {!proto.contents.v1.ArticleUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.ArticleUpdateRequest,
 *   !proto.contents.v1.ArticleUpdateResponse>}
 */
const methodInfo_ContentService_ArticleUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_article_pb.ArticleUpdateResponse,
  /**
   * @param {!proto.contents.v1.ArticleUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.ArticleUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.ArticleUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.ArticleUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.articleUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleUpdate',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleUpdate,
      callback);
};


/**
 * @param {!proto.contents.v1.ArticleUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.ArticleUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.articleUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleUpdate',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.contents.v1.ArticleDeleteRequest,
 *   !proto.contents.v1.ArticleDeleteResponse>}
 */
const methodDescriptor_ContentService_ArticleDelete = new grpc.web.MethodDescriptor(
  '/contents.v1.ContentService/ArticleDelete',
  grpc.web.MethodType.UNARY,
  contents_v1_article_pb.ArticleDeleteRequest,
  contents_v1_article_pb.ArticleDeleteResponse,
  /**
   * @param {!proto.contents.v1.ArticleDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.contents.v1.ArticleDeleteRequest,
 *   !proto.contents.v1.ArticleDeleteResponse>}
 */
const methodInfo_ContentService_ArticleDelete = new grpc.web.AbstractClientBase.MethodInfo(
  contents_v1_article_pb.ArticleDeleteResponse,
  /**
   * @param {!proto.contents.v1.ArticleDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  contents_v1_article_pb.ArticleDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.contents.v1.ArticleDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.contents.v1.ArticleDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.contents.v1.ArticleDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.contents.v1.ContentServiceClient.prototype.articleDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleDelete',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleDelete,
      callback);
};


/**
 * @param {!proto.contents.v1.ArticleDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.contents.v1.ArticleDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.contents.v1.ContentServicePromiseClient.prototype.articleDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/contents.v1.ContentService/ArticleDelete',
      request,
      metadata || {},
      methodDescriptor_ContentService_ArticleDelete);
};


module.exports = proto.contents.v1;

