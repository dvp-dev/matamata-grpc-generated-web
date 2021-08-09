// package: contents.v1
// file: contents/v1/log.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";

export class Log extends jspb.Message { 
    getId(): number;
    setId(value: number): Log;
    getAdminId(): number;
    setAdminId(value: number): Log;
    getContentSource(): string;
    setContentSource(value: string): Log;
    getContentId(): number;
    setContentId(value: number): Log;
    getEvent(): LogEvent;
    setEvent(value: LogEvent): Log;
    getPayload(): string;
    setPayload(value: string): Log;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Log;

    hasAdmin(): boolean;
    clearAdmin(): void;
    getAdmin(): admin_v1_admin_pb.Admin | undefined;
    setAdmin(value?: admin_v1_admin_pb.Admin): Log;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Log.AsObject;
    static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Log;
    static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
    export type AsObject = {
        id: number,
        adminId: number,
        contentSource: string,
        contentId: number,
        event: LogEvent,
        payload: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        admin?: admin_v1_admin_pb.Admin.AsObject,
    }
}

export class LogGetListInput extends jspb.Message { 
    getContentSource(): LogContentSource;
    setContentSource(value: LogContentSource): LogGetListInput;
    getContentId(): number;
    setContentId(value: number): LogGetListInput;
    getAdminId(): number;
    setAdminId(value: number): LogGetListInput;
    getPage(): number;
    setPage(value: number): LogGetListInput;
    getContentPerPage(): number;
    setContentPerPage(value: number): LogGetListInput;
    getWithAdmin(): boolean;
    setWithAdmin(value: boolean): LogGetListInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogGetListInput.AsObject;
    static toObject(includeInstance: boolean, msg: LogGetListInput): LogGetListInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogGetListInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogGetListInput;
    static deserializeBinaryFromReader(message: LogGetListInput, reader: jspb.BinaryReader): LogGetListInput;
}

export namespace LogGetListInput {
    export type AsObject = {
        contentSource: LogContentSource,
        contentId: number,
        adminId: number,
        page: number,
        contentPerPage: number,
        withAdmin: boolean,
    }
}

export class LogGetListOutput extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Log>;
    setDataList(value: Array<Log>): LogGetListOutput;
    addData(value?: Log, index?: number): Log;
    getMaxPage(): number;
    setMaxPage(value: number): LogGetListOutput;
    getCount(): number;
    setCount(value: number): LogGetListOutput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogGetListOutput.AsObject;
    static toObject(includeInstance: boolean, msg: LogGetListOutput): LogGetListOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogGetListOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogGetListOutput;
    static deserializeBinaryFromReader(message: LogGetListOutput, reader: jspb.BinaryReader): LogGetListOutput;
}

export namespace LogGetListOutput {
    export type AsObject = {
        dataList: Array<Log.AsObject>,
        maxPage: number,
        count: number,
    }
}

export enum LogContentSource {
    LOG_CONTENT_SOURCE_ALL_UNSPECIFIED = 0,
    LOG_CONTENT_SOURCE_TAG = 1,
    LOG_CONTENT_SOURCE_ARTICLE = 2,
}

export enum LogEvent {
    LOG_EVENT_ALL_UNSPECIFIED = 0,
    LOG_EVENT_CREATE = 1,
    LOG_EVENT_UPDATE = 2,
    LOG_EVENT_DELETE = 3,
}
