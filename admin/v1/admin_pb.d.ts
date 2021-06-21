// package: admin.v1
// file: admin/v1/admin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as admin_v1_admin_login_pb from "../../admin/v1/admin_login_pb";

export class Admin extends jspb.Message { 
    getId(): number;
    setId(value: number): Admin;
    getEmail(): string;
    setEmail(value: string): Admin;
    getName(): string;
    setName(value: string): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Admin.AsObject;
    static toObject(includeInstance: boolean, msg: Admin): Admin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Admin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Admin;
    static deserializeBinaryFromReader(message: Admin, reader: jspb.BinaryReader): Admin;
}

export namespace Admin {
    export type AsObject = {
        id: number,
        email: string,
        name: string,
    }
}

export class GetInformationRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetInformationRequest;
    getToken(): string;
    setToken(value: string): GetInformationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInformationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInformationRequest): GetInformationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInformationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInformationRequest;
    static deserializeBinaryFromReader(message: GetInformationRequest, reader: jspb.BinaryReader): GetInformationRequest;
}

export namespace GetInformationRequest {
    export type AsObject = {
        id: number,
        token: string,
    }
}

export class GetInformationResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): GetInformationResponse;
    getEmail(): string;
    setEmail(value: string): GetInformationResponse;
    getName(): string;
    setName(value: string): GetInformationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInformationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetInformationResponse): GetInformationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInformationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInformationResponse;
    static deserializeBinaryFromReader(message: GetInformationResponse, reader: jspb.BinaryReader): GetInformationResponse;
}

export namespace GetInformationResponse {
    export type AsObject = {
        id: number,
        email: string,
        name: string,
    }
}

export class GetListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetListRequest): GetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListRequest;
    static deserializeBinaryFromReader(message: GetListRequest, reader: jspb.BinaryReader): GetListRequest;
}

export namespace GetListRequest {
    export type AsObject = {
    }
}

export class GetListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Admin>;
    setDataList(value: Array<Admin>): GetListResponse;
    addData(value?: Admin, index?: number): Admin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetListResponse): GetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListResponse;
    static deserializeBinaryFromReader(message: GetListResponse, reader: jspb.BinaryReader): GetListResponse;
}

export namespace GetListResponse {
    export type AsObject = {
        dataList: Array<Admin.AsObject>,
    }
}
