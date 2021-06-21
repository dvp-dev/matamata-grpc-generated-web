// package: contents.v1
// file: contents/v1/tag.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Tag extends jspb.Message { 
    getId(): number;
    setId(value: number): Tag;
    getName(): string;
    setName(value: string): Tag;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tag.AsObject;
    static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tag;
    static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class TagCreateUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): TagCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: TagCreateUpdate): TagCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagCreateUpdate;
    static deserializeBinaryFromReader(message: TagCreateUpdate, reader: jspb.BinaryReader): TagCreateUpdate;
}

export namespace TagCreateUpdate {
    export type AsObject = {
        name: string,
    }
}

export class TagGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): TagGetOneRequest;
    getSearchByName(): string;
    setSearchByName(value: string): TagGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TagGetOneRequest): TagGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagGetOneRequest;
    static deserializeBinaryFromReader(message: TagGetOneRequest, reader: jspb.BinaryReader): TagGetOneRequest;
}

export namespace TagGetOneRequest {
    export type AsObject = {
        id: number,
        searchByName: string,
    }
}

export class TagGetOneResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Tag | undefined;
    setData(value?: Tag): TagGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TagGetOneResponse): TagGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagGetOneResponse;
    static deserializeBinaryFromReader(message: TagGetOneResponse, reader: jspb.BinaryReader): TagGetOneResponse;
}

export namespace TagGetOneResponse {
    export type AsObject = {
        data?: Tag.AsObject,
    }
}

export class TagGetMultipleRequest extends jspb.Message { 
    getSearchByName(): string;
    setSearchByName(value: string): TagGetMultipleRequest;
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): TagGetMultipleRequest;
    addIds(value: number, index?: number): number;
    getSortBy(): TagGetMultipleRequest.SortDirection;
    setSortBy(value: TagGetMultipleRequest.SortDirection): TagGetMultipleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagGetMultipleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TagGetMultipleRequest): TagGetMultipleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagGetMultipleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagGetMultipleRequest;
    static deserializeBinaryFromReader(message: TagGetMultipleRequest, reader: jspb.BinaryReader): TagGetMultipleRequest;
}

export namespace TagGetMultipleRequest {
    export type AsObject = {
        searchByName: string,
        idsList: Array<number>,
        sortBy: TagGetMultipleRequest.SortDirection,
    }

    export enum SortDirection {
    A_TO_Z_UNSPECIFIED = 0,
    Z_TO_A = 1,
    }

}

export class TagGetMultipleResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Tag>;
    setDataList(value: Array<Tag>): TagGetMultipleResponse;
    addData(value?: Tag, index?: number): Tag;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagGetMultipleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TagGetMultipleResponse): TagGetMultipleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagGetMultipleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagGetMultipleResponse;
    static deserializeBinaryFromReader(message: TagGetMultipleResponse, reader: jspb.BinaryReader): TagGetMultipleResponse;
}

export namespace TagGetMultipleResponse {
    export type AsObject = {
        dataList: Array<Tag.AsObject>,
    }
}

export class TagCreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): TagCreateUpdate | undefined;
    setData(value?: TagCreateUpdate): TagCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TagCreateRequest): TagCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagCreateRequest;
    static deserializeBinaryFromReader(message: TagCreateRequest, reader: jspb.BinaryReader): TagCreateRequest;
}

export namespace TagCreateRequest {
    export type AsObject = {
        data?: TagCreateUpdate.AsObject,
    }
}

export class TagCreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Tag | undefined;
    setData(value?: Tag): TagCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TagCreateResponse): TagCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagCreateResponse;
    static deserializeBinaryFromReader(message: TagCreateResponse, reader: jspb.BinaryReader): TagCreateResponse;
}

export namespace TagCreateResponse {
    export type AsObject = {
        data?: Tag.AsObject,
    }
}

export class TagUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): TagUpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): TagCreateUpdate | undefined;
    setData(value?: TagCreateUpdate): TagUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TagUpdateRequest): TagUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagUpdateRequest;
    static deserializeBinaryFromReader(message: TagUpdateRequest, reader: jspb.BinaryReader): TagUpdateRequest;
}

export namespace TagUpdateRequest {
    export type AsObject = {
        id: number,
        data?: TagCreateUpdate.AsObject,
    }
}

export class TagUpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Tag | undefined;
    setData(value?: Tag): TagUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TagUpdateResponse): TagUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagUpdateResponse;
    static deserializeBinaryFromReader(message: TagUpdateResponse, reader: jspb.BinaryReader): TagUpdateResponse;
}

export namespace TagUpdateResponse {
    export type AsObject = {
        data?: Tag.AsObject,
    }
}

export class TagDeleteRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): TagDeleteRequest;
    addIds(value: number, index?: number): number;
    getName(): string;
    setName(value: string): TagDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TagDeleteRequest): TagDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagDeleteRequest;
    static deserializeBinaryFromReader(message: TagDeleteRequest, reader: jspb.BinaryReader): TagDeleteRequest;
}

export namespace TagDeleteRequest {
    export type AsObject = {
        idsList: Array<number>,
        name: string,
    }
}

export class TagDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TagDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TagDeleteResponse): TagDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TagDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TagDeleteResponse;
    static deserializeBinaryFromReader(message: TagDeleteResponse, reader: jspb.BinaryReader): TagDeleteResponse;
}

export namespace TagDeleteResponse {
    export type AsObject = {
    }
}
