/**
 * @fileoverview gRPC-Web generated client stub for admin.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as admin_v1_admin_login_pb from '../../admin/v1/admin_login_pb';
import * as admin_v1_admin_pb from '../../admin/v1/admin_pb';


export class AdminServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_login_pb.LoginResponse,
    (request: admin_v1_admin_login_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_login_pb.LoginResponse.deserializeBinary
  );

  login(
    request: admin_v1_admin_login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_login_pb.LoginResponse>;

  login(
    request: admin_v1_admin_login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_login_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_login_pb.LoginResponse>;

  login(
    request: admin_v1_admin_login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_login_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoGetInformation = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_pb.GetInformationResponse,
    (request: admin_v1_admin_pb.GetInformationRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_pb.GetInformationResponse.deserializeBinary
  );

  getInformation(
    request: admin_v1_admin_pb.GetInformationRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_pb.GetInformationResponse>;

  getInformation(
    request: admin_v1_admin_pb.GetInformationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_pb.GetInformationResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_pb.GetInformationResponse>;

  getInformation(
    request: admin_v1_admin_pb.GetInformationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_pb.GetInformationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminService/GetInformation',
        request,
        metadata || {},
        this.methodInfoGetInformation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminService/GetInformation',
    request,
    metadata || {},
    this.methodInfoGetInformation);
  }

  methodInfoGetList = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_v1_admin_pb.GetListResponse,
    (request: admin_v1_admin_pb.GetListRequest) => {
      return request.serializeBinary();
    },
    admin_v1_admin_pb.GetListResponse.deserializeBinary
  );

  getList(
    request: admin_v1_admin_pb.GetListRequest,
    metadata: grpcWeb.Metadata | null): Promise<admin_v1_admin_pb.GetListResponse>;

  getList(
    request: admin_v1_admin_pb.GetListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_pb.GetListResponse) => void): grpcWeb.ClientReadableStream<admin_v1_admin_pb.GetListResponse>;

  getList(
    request: admin_v1_admin_pb.GetListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_v1_admin_pb.GetListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.v1.AdminService/GetList',
        request,
        metadata || {},
        this.methodInfoGetList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.v1.AdminService/GetList',
    request,
    metadata || {},
    this.methodInfoGetList);
  }

}

