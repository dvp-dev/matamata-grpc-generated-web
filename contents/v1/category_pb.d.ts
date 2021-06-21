// package: contents.v1
// file: contents/v1/category.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Category1 extends jspb.Message { 
    getId(): number;
    setId(value: number): Category1;
    getName(): string;
    setName(value: string): Category1;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1.AsObject;
    static toObject(includeInstance: boolean, msg: Category1): Category1.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1;
    static deserializeBinaryFromReader(message: Category1, reader: jspb.BinaryReader): Category1;
}

export namespace Category1 {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class Category1CreateUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): Category1CreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1CreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: Category1CreateUpdate): Category1CreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1CreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1CreateUpdate;
    static deserializeBinaryFromReader(message: Category1CreateUpdate, reader: jspb.BinaryReader): Category1CreateUpdate;
}

export namespace Category1CreateUpdate {
    export type AsObject = {
        name: string,
    }
}

export class Category2 extends jspb.Message { 
    getId(): number;
    setId(value: number): Category2;
    getCategory1Id(): number;
    setCategory1Id(value: number): Category2;
    getName(): string;
    setName(value: string): Category2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2.AsObject;
    static toObject(includeInstance: boolean, msg: Category2): Category2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2;
    static deserializeBinaryFromReader(message: Category2, reader: jspb.BinaryReader): Category2;
}

export namespace Category2 {
    export type AsObject = {
        id: number,
        category1Id: number,
        name: string,
    }
}

export class Category2CreateUpdate extends jspb.Message { 
    getCategory1Id(): number;
    setCategory1Id(value: number): Category2CreateUpdate;
    getName(): string;
    setName(value: string): Category2CreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2CreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: Category2CreateUpdate): Category2CreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2CreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2CreateUpdate;
    static deserializeBinaryFromReader(message: Category2CreateUpdate, reader: jspb.BinaryReader): Category2CreateUpdate;
}

export namespace Category2CreateUpdate {
    export type AsObject = {
        category1Id: number,
        name: string,
    }
}

export class Category3 extends jspb.Message { 
    getId(): number;
    setId(value: number): Category3;
    getCategory2Id(): number;
    setCategory2Id(value: number): Category3;
    getName(): string;
    setName(value: string): Category3;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3.AsObject;
    static toObject(includeInstance: boolean, msg: Category3): Category3.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3;
    static deserializeBinaryFromReader(message: Category3, reader: jspb.BinaryReader): Category3;
}

export namespace Category3 {
    export type AsObject = {
        id: number,
        category2Id: number,
        name: string,
    }
}

export class Category3CreateUpdate extends jspb.Message { 
    getCategory2Id(): number;
    setCategory2Id(value: number): Category3CreateUpdate;
    getName(): string;
    setName(value: string): Category3CreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3CreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: Category3CreateUpdate): Category3CreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3CreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3CreateUpdate;
    static deserializeBinaryFromReader(message: Category3CreateUpdate, reader: jspb.BinaryReader): Category3CreateUpdate;
}

export namespace Category3CreateUpdate {
    export type AsObject = {
        category2Id: number,
        name: string,
    }
}

export class Category1GetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category1GetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1GetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category1GetOneRequest): Category1GetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1GetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1GetOneRequest;
    static deserializeBinaryFromReader(message: Category1GetOneRequest, reader: jspb.BinaryReader): Category1GetOneRequest;
}

export namespace Category1GetOneRequest {
    export type AsObject = {
        id: number,
    }
}

export class Category1GetOneResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category1 | undefined;
    setData(value?: Category1): Category1GetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1GetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category1GetOneResponse): Category1GetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1GetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1GetOneResponse;
    static deserializeBinaryFromReader(message: Category1GetOneResponse, reader: jspb.BinaryReader): Category1GetOneResponse;
}

export namespace Category1GetOneResponse {
    export type AsObject = {
        data?: Category1.AsObject,
    }
}

export class Category2GetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category2GetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2GetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category2GetOneRequest): Category2GetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2GetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2GetOneRequest;
    static deserializeBinaryFromReader(message: Category2GetOneRequest, reader: jspb.BinaryReader): Category2GetOneRequest;
}

export namespace Category2GetOneRequest {
    export type AsObject = {
        id: number,
    }
}

export class Category2GetOneResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category2 | undefined;
    setData(value?: Category2): Category2GetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2GetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category2GetOneResponse): Category2GetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2GetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2GetOneResponse;
    static deserializeBinaryFromReader(message: Category2GetOneResponse, reader: jspb.BinaryReader): Category2GetOneResponse;
}

export namespace Category2GetOneResponse {
    export type AsObject = {
        data?: Category2.AsObject,
    }
}

export class Category3GetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category3GetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3GetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category3GetOneRequest): Category3GetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3GetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3GetOneRequest;
    static deserializeBinaryFromReader(message: Category3GetOneRequest, reader: jspb.BinaryReader): Category3GetOneRequest;
}

export namespace Category3GetOneRequest {
    export type AsObject = {
        id: number,
    }
}

export class Category3GetOneResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category3 | undefined;
    setData(value?: Category3): Category3GetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3GetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category3GetOneResponse): Category3GetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3GetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3GetOneResponse;
    static deserializeBinaryFromReader(message: Category3GetOneResponse, reader: jspb.BinaryReader): Category3GetOneResponse;
}

export namespace Category3GetOneResponse {
    export type AsObject = {
        data?: Category3.AsObject,
    }
}

export class Category1GetMultipleRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1GetMultipleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category1GetMultipleRequest): Category1GetMultipleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1GetMultipleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1GetMultipleRequest;
    static deserializeBinaryFromReader(message: Category1GetMultipleRequest, reader: jspb.BinaryReader): Category1GetMultipleRequest;
}

export namespace Category1GetMultipleRequest {
    export type AsObject = {
    }
}

export class Category1GetMultipleResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Category1>;
    setDataList(value: Array<Category1>): Category1GetMultipleResponse;
    addData(value?: Category1, index?: number): Category1;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1GetMultipleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category1GetMultipleResponse): Category1GetMultipleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1GetMultipleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1GetMultipleResponse;
    static deserializeBinaryFromReader(message: Category1GetMultipleResponse, reader: jspb.BinaryReader): Category1GetMultipleResponse;
}

export namespace Category1GetMultipleResponse {
    export type AsObject = {
        dataList: Array<Category1.AsObject>,
    }
}

export class Category2GetMultipleRequest extends jspb.Message { 
    getCategory1Id(): number;
    setCategory1Id(value: number): Category2GetMultipleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2GetMultipleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category2GetMultipleRequest): Category2GetMultipleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2GetMultipleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2GetMultipleRequest;
    static deserializeBinaryFromReader(message: Category2GetMultipleRequest, reader: jspb.BinaryReader): Category2GetMultipleRequest;
}

export namespace Category2GetMultipleRequest {
    export type AsObject = {
        category1Id: number,
    }
}

export class Category2GetMultipleResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Category2>;
    setDataList(value: Array<Category2>): Category2GetMultipleResponse;
    addData(value?: Category2, index?: number): Category2;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2GetMultipleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category2GetMultipleResponse): Category2GetMultipleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2GetMultipleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2GetMultipleResponse;
    static deserializeBinaryFromReader(message: Category2GetMultipleResponse, reader: jspb.BinaryReader): Category2GetMultipleResponse;
}

export namespace Category2GetMultipleResponse {
    export type AsObject = {
        dataList: Array<Category2.AsObject>,
    }
}

export class Category3GetMultipleRequest extends jspb.Message { 
    getCategory2Id(): number;
    setCategory2Id(value: number): Category3GetMultipleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3GetMultipleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category3GetMultipleRequest): Category3GetMultipleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3GetMultipleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3GetMultipleRequest;
    static deserializeBinaryFromReader(message: Category3GetMultipleRequest, reader: jspb.BinaryReader): Category3GetMultipleRequest;
}

export namespace Category3GetMultipleRequest {
    export type AsObject = {
        category2Id: number,
    }
}

export class Category3GetMultipleResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Category3>;
    setDataList(value: Array<Category3>): Category3GetMultipleResponse;
    addData(value?: Category3, index?: number): Category3;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3GetMultipleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category3GetMultipleResponse): Category3GetMultipleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3GetMultipleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3GetMultipleResponse;
    static deserializeBinaryFromReader(message: Category3GetMultipleResponse, reader: jspb.BinaryReader): Category3GetMultipleResponse;
}

export namespace Category3GetMultipleResponse {
    export type AsObject = {
        dataList: Array<Category3.AsObject>,
    }
}

export class Category1CreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category1CreateUpdate | undefined;
    setData(value?: Category1CreateUpdate): Category1CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category1CreateRequest): Category1CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1CreateRequest;
    static deserializeBinaryFromReader(message: Category1CreateRequest, reader: jspb.BinaryReader): Category1CreateRequest;
}

export namespace Category1CreateRequest {
    export type AsObject = {
        data?: Category1CreateUpdate.AsObject,
    }
}

export class Category1CreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category1 | undefined;
    setData(value?: Category1): Category1CreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category1CreateResponse): Category1CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1CreateResponse;
    static deserializeBinaryFromReader(message: Category1CreateResponse, reader: jspb.BinaryReader): Category1CreateResponse;
}

export namespace Category1CreateResponse {
    export type AsObject = {
        data?: Category1.AsObject,
    }
}

export class Category2CreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category2CreateUpdate | undefined;
    setData(value?: Category2CreateUpdate): Category2CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category2CreateRequest): Category2CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2CreateRequest;
    static deserializeBinaryFromReader(message: Category2CreateRequest, reader: jspb.BinaryReader): Category2CreateRequest;
}

export namespace Category2CreateRequest {
    export type AsObject = {
        data?: Category2CreateUpdate.AsObject,
    }
}

export class Category2CreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category2 | undefined;
    setData(value?: Category2): Category2CreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category2CreateResponse): Category2CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2CreateResponse;
    static deserializeBinaryFromReader(message: Category2CreateResponse, reader: jspb.BinaryReader): Category2CreateResponse;
}

export namespace Category2CreateResponse {
    export type AsObject = {
        data?: Category2.AsObject,
    }
}

export class Category3CreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category3CreateUpdate | undefined;
    setData(value?: Category3CreateUpdate): Category3CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category3CreateRequest): Category3CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3CreateRequest;
    static deserializeBinaryFromReader(message: Category3CreateRequest, reader: jspb.BinaryReader): Category3CreateRequest;
}

export namespace Category3CreateRequest {
    export type AsObject = {
        data?: Category3CreateUpdate.AsObject,
    }
}

export class Category3CreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category3 | undefined;
    setData(value?: Category3): Category3CreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category3CreateResponse): Category3CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3CreateResponse;
    static deserializeBinaryFromReader(message: Category3CreateResponse, reader: jspb.BinaryReader): Category3CreateResponse;
}

export namespace Category3CreateResponse {
    export type AsObject = {
        data?: Category3.AsObject,
    }
}

export class Category1UpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category1UpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): Category1CreateUpdate | undefined;
    setData(value?: Category1CreateUpdate): Category1UpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category1UpdateRequest): Category1UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1UpdateRequest;
    static deserializeBinaryFromReader(message: Category1UpdateRequest, reader: jspb.BinaryReader): Category1UpdateRequest;
}

export namespace Category1UpdateRequest {
    export type AsObject = {
        id: number,
        data?: Category1CreateUpdate.AsObject,
    }
}

export class Category1UpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category1 | undefined;
    setData(value?: Category1): Category1UpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category1UpdateResponse): Category1UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1UpdateResponse;
    static deserializeBinaryFromReader(message: Category1UpdateResponse, reader: jspb.BinaryReader): Category1UpdateResponse;
}

export namespace Category1UpdateResponse {
    export type AsObject = {
        data?: Category1.AsObject,
    }
}

export class Category2UpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category2UpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): Category2CreateUpdate | undefined;
    setData(value?: Category2CreateUpdate): Category2UpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category2UpdateRequest): Category2UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2UpdateRequest;
    static deserializeBinaryFromReader(message: Category2UpdateRequest, reader: jspb.BinaryReader): Category2UpdateRequest;
}

export namespace Category2UpdateRequest {
    export type AsObject = {
        id: number,
        data?: Category2CreateUpdate.AsObject,
    }
}

export class Category2UpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category2 | undefined;
    setData(value?: Category2): Category2UpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category2UpdateResponse): Category2UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2UpdateResponse;
    static deserializeBinaryFromReader(message: Category2UpdateResponse, reader: jspb.BinaryReader): Category2UpdateResponse;
}

export namespace Category2UpdateResponse {
    export type AsObject = {
        data?: Category2.AsObject,
    }
}

export class Category3UpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category3UpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): Category3CreateUpdate | undefined;
    setData(value?: Category3CreateUpdate): Category3UpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category3UpdateRequest): Category3UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3UpdateRequest;
    static deserializeBinaryFromReader(message: Category3UpdateRequest, reader: jspb.BinaryReader): Category3UpdateRequest;
}

export namespace Category3UpdateRequest {
    export type AsObject = {
        id: number,
        data?: Category3CreateUpdate.AsObject,
    }
}

export class Category3UpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Category3 | undefined;
    setData(value?: Category3): Category3UpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category3UpdateResponse): Category3UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3UpdateResponse;
    static deserializeBinaryFromReader(message: Category3UpdateResponse, reader: jspb.BinaryReader): Category3UpdateResponse;
}

export namespace Category3UpdateResponse {
    export type AsObject = {
        data?: Category3.AsObject,
    }
}

export class Category1DeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category1DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category1DeleteRequest): Category1DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1DeleteRequest;
    static deserializeBinaryFromReader(message: Category1DeleteRequest, reader: jspb.BinaryReader): Category1DeleteRequest;
}

export namespace Category1DeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class Category1DeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category1DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category1DeleteResponse): Category1DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category1DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category1DeleteResponse;
    static deserializeBinaryFromReader(message: Category1DeleteResponse, reader: jspb.BinaryReader): Category1DeleteResponse;
}

export namespace Category1DeleteResponse {
    export type AsObject = {
    }
}

export class Category2DeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category2DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category2DeleteRequest): Category2DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2DeleteRequest;
    static deserializeBinaryFromReader(message: Category2DeleteRequest, reader: jspb.BinaryReader): Category2DeleteRequest;
}

export namespace Category2DeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class Category2DeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category2DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category2DeleteResponse): Category2DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category2DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category2DeleteResponse;
    static deserializeBinaryFromReader(message: Category2DeleteResponse, reader: jspb.BinaryReader): Category2DeleteResponse;
}

export namespace Category2DeleteResponse {
    export type AsObject = {
    }
}

export class Category3DeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): Category3DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Category3DeleteRequest): Category3DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3DeleteRequest;
    static deserializeBinaryFromReader(message: Category3DeleteRequest, reader: jspb.BinaryReader): Category3DeleteRequest;
}

export namespace Category3DeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class Category3DeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category3DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Category3DeleteResponse): Category3DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category3DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category3DeleteResponse;
    static deserializeBinaryFromReader(message: Category3DeleteResponse, reader: jspb.BinaryReader): Category3DeleteResponse;
}

export namespace Category3DeleteResponse {
    export type AsObject = {
    }
}
