// package: contents.v1
// file: contents/v1/polling.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";
import * as contents_v1_article_pb from "../../contents/v1/article_pb";

export class Polling extends jspb.Message { 
    getId(): number;
    setId(value: number): Polling;
    getTitle(): string;
    setTitle(value: string): Polling;
    getStatus(): PollingStatus;
    setStatus(value: PollingStatus): Polling;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): Polling;
    getImageCoverAlt(): string;
    setImageCoverAlt(value: string): Polling;
    getChoice1Label(): string;
    setChoice1Label(value: string): Polling;
    getChoice1ArticleId(): number;
    setChoice1ArticleId(value: number): Polling;
    getChoice1Count(): number;
    setChoice1Count(value: number): Polling;
    getChoice2Label(): string;
    setChoice2Label(value: string): Polling;
    getChoice2ArticleId(): number;
    setChoice2ArticleId(value: number): Polling;
    getChoice2Count(): number;
    setChoice2Count(value: number): Polling;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Polling;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Polling;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Polling;

    hasChoice1Article(): boolean;
    clearChoice1Article(): void;
    getChoice1Article(): contents_v1_article_pb.Article | undefined;
    setChoice1Article(value?: contents_v1_article_pb.Article): Polling;

    hasChoice2Article(): boolean;
    clearChoice2Article(): void;
    getChoice2Article(): contents_v1_article_pb.Article | undefined;
    setChoice2Article(value?: contents_v1_article_pb.Article): Polling;

    hasAdminCreated(): boolean;
    clearAdminCreated(): void;
    getAdminCreated(): admin_v1_admin_pb.Admin | undefined;
    setAdminCreated(value?: admin_v1_admin_pb.Admin): Polling;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Polling.AsObject;
    static toObject(includeInstance: boolean, msg: Polling): Polling.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Polling, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Polling;
    static deserializeBinaryFromReader(message: Polling, reader: jspb.BinaryReader): Polling;
}

export namespace Polling {
    export type AsObject = {
        id: number,
        title: string,
        status: PollingStatus,
        imageCoverUrl: string,
        imageCoverAlt: string,
        choice1Label: string,
        choice1ArticleId: number,
        choice1Count: number,
        choice2Label: string,
        choice2ArticleId: number,
        choice2Count: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        choice1Article?: contents_v1_article_pb.Article.AsObject,
        choice2Article?: contents_v1_article_pb.Article.AsObject,
        adminCreated?: admin_v1_admin_pb.Admin.AsObject,
    }
}

export class PollingCreateUpdate extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): PollingCreateUpdate;
    getStatus(): PollingStatus;
    setStatus(value: PollingStatus): PollingCreateUpdate;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): PollingCreateUpdate;
    getImageCoverAlt(): string;
    setImageCoverAlt(value: string): PollingCreateUpdate;
    getChoice1Label(): string;
    setChoice1Label(value: string): PollingCreateUpdate;
    getChoice1ArticleId(): number;
    setChoice1ArticleId(value: number): PollingCreateUpdate;
    getChoice2Label(): string;
    setChoice2Label(value: string): PollingCreateUpdate;
    getChoice2ArticleId(): number;
    setChoice2ArticleId(value: number): PollingCreateUpdate;
    getIsCustomPublishedAt(): boolean;
    setIsCustomPublishedAt(value: boolean): PollingCreateUpdate;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): PollingCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: PollingCreateUpdate): PollingCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingCreateUpdate;
    static deserializeBinaryFromReader(message: PollingCreateUpdate, reader: jspb.BinaryReader): PollingCreateUpdate;
}

export namespace PollingCreateUpdate {
    export type AsObject = {
        title: string,
        status: PollingStatus,
        imageCoverUrl: string,
        imageCoverAlt: string,
        choice1Label: string,
        choice1ArticleId: number,
        choice2Label: string,
        choice2ArticleId: number,
        isCustomPublishedAt: boolean,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PollingGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PollingGetOneRequest;
    getWithAdminCreated(): boolean;
    setWithAdminCreated(value: boolean): PollingGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PollingGetOneRequest): PollingGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingGetOneRequest;
    static deserializeBinaryFromReader(message: PollingGetOneRequest, reader: jspb.BinaryReader): PollingGetOneRequest;
}

export namespace PollingGetOneRequest {
    export type AsObject = {
        id: number,
        withAdminCreated: boolean,
    }
}

export class PollingGetOneResponse extends jspb.Message { 

    hasPolling(): boolean;
    clearPolling(): void;
    getPolling(): Polling | undefined;
    setPolling(value?: Polling): PollingGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PollingGetOneResponse): PollingGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingGetOneResponse;
    static deserializeBinaryFromReader(message: PollingGetOneResponse, reader: jspb.BinaryReader): PollingGetOneResponse;
}

export namespace PollingGetOneResponse {
    export type AsObject = {
        polling?: Polling.AsObject,
    }
}

export class PollingGetListRequest extends jspb.Message { 
    clearStatusMultipleList(): void;
    getStatusMultipleList(): Array<PollingStatus>;
    setStatusMultipleList(value: Array<PollingStatus>): PollingGetListRequest;
    addStatusMultiple(value: PollingStatus, index?: number): PollingStatus;
    getSearch(): string;
    setSearch(value: string): PollingGetListRequest;
    getPage(): number;
    setPage(value: number): PollingGetListRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): PollingGetListRequest;
    getWithAdminCreated(): boolean;
    setWithAdminCreated(value: boolean): PollingGetListRequest;
    getSortBy(): PollingGetListRequest.Sort;
    setSortBy(value: PollingGetListRequest.Sort): PollingGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PollingGetListRequest): PollingGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingGetListRequest;
    static deserializeBinaryFromReader(message: PollingGetListRequest, reader: jspb.BinaryReader): PollingGetListRequest;
}

export namespace PollingGetListRequest {
    export type AsObject = {
        statusMultipleList: Array<PollingStatus>,
        search: string,
        page: number,
        contentPerPage: number,
        withAdminCreated: boolean,
        sortBy: PollingGetListRequest.Sort,
    }

    export enum Sort {
    NEWEST_UNSPECIFIED = 0,
    OLDEST = 1,
    TITLE_ASCENDING = 2,
    TITLE_DESCENDING = 3,
    CREATED_AT_ASCENDING = 6,
    CREATED_AT_DESCENDING = 7,
    PUBLISHED_AT_ASCENDING = 8,
    PUBLISHED_AT_DESCENDING = 9,
    }

}

export class PollingGetListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Polling>;
    setDataList(value: Array<Polling>): PollingGetListResponse;
    addData(value?: Polling, index?: number): Polling;
    getMaxPage(): number;
    setMaxPage(value: number): PollingGetListResponse;
    getCount(): number;
    setCount(value: number): PollingGetListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PollingGetListResponse): PollingGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingGetListResponse;
    static deserializeBinaryFromReader(message: PollingGetListResponse, reader: jspb.BinaryReader): PollingGetListResponse;
}

export namespace PollingGetListResponse {
    export type AsObject = {
        dataList: Array<Polling.AsObject>,
        maxPage: number,
        count: number,
    }
}

export class PollingCreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): PollingCreateUpdate | undefined;
    setData(value?: PollingCreateUpdate): PollingCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PollingCreateRequest): PollingCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingCreateRequest;
    static deserializeBinaryFromReader(message: PollingCreateRequest, reader: jspb.BinaryReader): PollingCreateRequest;
}

export namespace PollingCreateRequest {
    export type AsObject = {
        data?: PollingCreateUpdate.AsObject,
    }
}

export class PollingCreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Polling | undefined;
    setData(value?: Polling): PollingCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PollingCreateResponse): PollingCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingCreateResponse;
    static deserializeBinaryFromReader(message: PollingCreateResponse, reader: jspb.BinaryReader): PollingCreateResponse;
}

export namespace PollingCreateResponse {
    export type AsObject = {
        data?: Polling.AsObject,
    }
}

export class PollingUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PollingUpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): PollingCreateUpdate | undefined;
    setData(value?: PollingCreateUpdate): PollingUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PollingUpdateRequest): PollingUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingUpdateRequest;
    static deserializeBinaryFromReader(message: PollingUpdateRequest, reader: jspb.BinaryReader): PollingUpdateRequest;
}

export namespace PollingUpdateRequest {
    export type AsObject = {
        id: number,
        data?: PollingCreateUpdate.AsObject,
    }
}

export class PollingUpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Polling | undefined;
    setData(value?: Polling): PollingUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PollingUpdateResponse): PollingUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingUpdateResponse;
    static deserializeBinaryFromReader(message: PollingUpdateResponse, reader: jspb.BinaryReader): PollingUpdateResponse;
}

export namespace PollingUpdateResponse {
    export type AsObject = {
        data?: Polling.AsObject,
    }
}

export class PollingDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PollingDeleteRequest;
    getSoftDelete(): boolean;
    setSoftDelete(value: boolean): PollingDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PollingDeleteRequest): PollingDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingDeleteRequest;
    static deserializeBinaryFromReader(message: PollingDeleteRequest, reader: jspb.BinaryReader): PollingDeleteRequest;
}

export namespace PollingDeleteRequest {
    export type AsObject = {
        id: number,
        softDelete: boolean,
    }
}

export class PollingDeleteResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Polling | undefined;
    setData(value?: Polling): PollingDeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PollingDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PollingDeleteResponse): PollingDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PollingDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PollingDeleteResponse;
    static deserializeBinaryFromReader(message: PollingDeleteResponse, reader: jspb.BinaryReader): PollingDeleteResponse;
}

export namespace PollingDeleteResponse {
    export type AsObject = {
        data?: Polling.AsObject,
    }
}

export enum PollingStatus {
    POLLING_STATUS_ALL_UNSPECIFIED = 0,
    POLLING_STATUS_DRAFT = 1,
    POLLING_STATUS_TRASH = 2,
    POLLING_STATUS_PUBLISH = 3,
    POLLING_STATUS_COMING_SOON = 4,
}
