// package: admin.v1
// file: admin/v1/admin.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";
import * as admin_v1_admin_login_pb from "../../admin/v1/admin_login_pb";

interface IAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAdminServiceService_ILogin;
    getInformation: IAdminServiceService_IGetInformation;
    getList: IAdminServiceService_IGetList;
}

interface IAdminServiceService_ILogin extends grpc.MethodDefinition<admin_v1_admin_login_pb.LoginRequest, admin_v1_admin_login_pb.LoginResponse> {
    path: "/admin.v1.AdminService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_v1_admin_login_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<admin_v1_admin_login_pb.LoginRequest>;
    responseSerialize: grpc.serialize<admin_v1_admin_login_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<admin_v1_admin_login_pb.LoginResponse>;
}
interface IAdminServiceService_IGetInformation extends grpc.MethodDefinition<admin_v1_admin_pb.GetInformationRequest, admin_v1_admin_pb.GetInformationResponse> {
    path: "/admin.v1.AdminService/GetInformation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_v1_admin_pb.GetInformationRequest>;
    requestDeserialize: grpc.deserialize<admin_v1_admin_pb.GetInformationRequest>;
    responseSerialize: grpc.serialize<admin_v1_admin_pb.GetInformationResponse>;
    responseDeserialize: grpc.deserialize<admin_v1_admin_pb.GetInformationResponse>;
}
interface IAdminServiceService_IGetList extends grpc.MethodDefinition<admin_v1_admin_pb.GetListRequest, admin_v1_admin_pb.GetListResponse> {
    path: "/admin.v1.AdminService/GetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<admin_v1_admin_pb.GetListRequest>;
    requestDeserialize: grpc.deserialize<admin_v1_admin_pb.GetListRequest>;
    responseSerialize: grpc.serialize<admin_v1_admin_pb.GetListResponse>;
    responseDeserialize: grpc.deserialize<admin_v1_admin_pb.GetListResponse>;
}

export const AdminServiceService: IAdminServiceService;

export interface IAdminServiceServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<admin_v1_admin_login_pb.LoginRequest, admin_v1_admin_login_pb.LoginResponse>;
    getInformation: grpc.handleUnaryCall<admin_v1_admin_pb.GetInformationRequest, admin_v1_admin_pb.GetInformationResponse>;
    getList: grpc.handleUnaryCall<admin_v1_admin_pb.GetListRequest, admin_v1_admin_pb.GetListResponse>;
}

export interface IAdminServiceClient {
    login(request: admin_v1_admin_login_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: admin_v1_admin_login_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: admin_v1_admin_login_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    getInformation(request: admin_v1_admin_pb.GetInformationRequest, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetInformationResponse) => void): grpc.ClientUnaryCall;
    getInformation(request: admin_v1_admin_pb.GetInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetInformationResponse) => void): grpc.ClientUnaryCall;
    getInformation(request: admin_v1_admin_pb.GetInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetInformationResponse) => void): grpc.ClientUnaryCall;
    getList(request: admin_v1_admin_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: admin_v1_admin_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: admin_v1_admin_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetListResponse) => void): grpc.ClientUnaryCall;
}

export class AdminServiceClient extends grpc.Client implements IAdminServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: admin_v1_admin_login_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: admin_v1_admin_login_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: admin_v1_admin_login_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_login_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public getInformation(request: admin_v1_admin_pb.GetInformationRequest, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetInformationResponse) => void): grpc.ClientUnaryCall;
    public getInformation(request: admin_v1_admin_pb.GetInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetInformationResponse) => void): grpc.ClientUnaryCall;
    public getInformation(request: admin_v1_admin_pb.GetInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetInformationResponse) => void): grpc.ClientUnaryCall;
    public getList(request: admin_v1_admin_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: admin_v1_admin_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: admin_v1_admin_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: admin_v1_admin_pb.GetListResponse) => void): grpc.ClientUnaryCall;
}
