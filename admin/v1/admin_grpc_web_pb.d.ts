import * as grpcWeb from 'grpc-web';

import * as admin_v1_admin_login_pb from '../../admin/v1/admin_login_pb';
import * as admin_v1_admin_pb from '../../admin/v1/admin_pb';


export class AdminServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: admin_v1_admin_login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_login_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<admin_v1_admin_login_pb.LoginResponse>;

  getInformation(
    request: admin_v1_admin_pb.GetInformationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_pb.GetInformationResponse) => void
  ): grpcWeb.ClientReadableStream<admin_v1_admin_pb.GetInformationResponse>;

  getList(
    request: admin_v1_admin_pb.GetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: admin_v1_admin_pb.GetListResponse) => void
  ): grpcWeb.ClientReadableStream<admin_v1_admin_pb.GetListResponse>;

}

export class AdminServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: admin_v1_admin_login_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_v1_admin_login_pb.LoginResponse>;

  getInformation(
    request: admin_v1_admin_pb.GetInformationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_v1_admin_pb.GetInformationResponse>;

  getList(
    request: admin_v1_admin_pb.GetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<admin_v1_admin_pb.GetListResponse>;

}

