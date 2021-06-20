/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var admin_v1_admin_login_pb = require('../../admin/v1/admin_login_pb.js')
const proto = {};
proto.admin = {};
proto.admin.v1 = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admin.v1.AdminServiceClient =
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
proto.admin.v1.AdminServicePromiseClient =
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
 *   !proto.admin.v1.LoginRequest,
 *   !proto.admin.v1.LoginResponse>}
 */
const methodDescriptor_AdminService_Login = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminService/Login',
  grpc.web.MethodType.UNARY,
  admin_v1_admin_login_pb.LoginRequest,
  admin_v1_admin_login_pb.LoginResponse,
  /**
   * @param {!proto.admin.v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  admin_v1_admin_login_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.LoginRequest,
 *   !proto.admin.v1.LoginResponse>}
 */
const methodInfo_AdminService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  admin_v1_admin_login_pb.LoginResponse,
  /**
   * @param {!proto.admin.v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  admin_v1_admin_login_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminService/Login',
      request,
      metadata || {},
      methodDescriptor_AdminService_Login,
      callback);
};


/**
 * @param {!proto.admin.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminService/Login',
      request,
      metadata || {},
      methodDescriptor_AdminService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.GetInformationRequest,
 *   !proto.admin.v1.GetInformationResponse>}
 */
const methodDescriptor_AdminService_GetInformation = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminService/GetInformation',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.GetInformationRequest,
  proto.admin.v1.GetInformationResponse,
  /**
   * @param {!proto.admin.v1.GetInformationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.GetInformationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.GetInformationRequest,
 *   !proto.admin.v1.GetInformationResponse>}
 */
const methodInfo_AdminService_GetInformation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.GetInformationResponse,
  /**
   * @param {!proto.admin.v1.GetInformationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.GetInformationResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.GetInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.GetInformationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.GetInformationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminServiceClient.prototype.getInformation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminService/GetInformation',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetInformation,
      callback);
};


/**
 * @param {!proto.admin.v1.GetInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.GetInformationResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminServicePromiseClient.prototype.getInformation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminService/GetInformation',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetInformation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.v1.GetListRequest,
 *   !proto.admin.v1.GetListResponse>}
 */
const methodDescriptor_AdminService_GetList = new grpc.web.MethodDescriptor(
  '/admin.v1.AdminService/GetList',
  grpc.web.MethodType.UNARY,
  proto.admin.v1.GetListRequest,
  proto.admin.v1.GetListResponse,
  /**
   * @param {!proto.admin.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.GetListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.v1.GetListRequest,
 *   !proto.admin.v1.GetListResponse>}
 */
const methodInfo_AdminService_GetList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.v1.GetListResponse,
  /**
   * @param {!proto.admin.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.v1.GetListResponse.deserializeBinary
);


/**
 * @param {!proto.admin.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.v1.GetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.v1.GetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.v1.AdminServiceClient.prototype.getList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.v1.AdminService/GetList',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetList,
      callback);
};


/**
 * @param {!proto.admin.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.v1.GetListResponse>}
 *     Promise that resolves to the response
 */
proto.admin.v1.AdminServicePromiseClient.prototype.getList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.v1.AdminService/GetList',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetList);
};


module.exports = proto.admin.v1;

