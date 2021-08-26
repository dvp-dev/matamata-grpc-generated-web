// package: contents.v1
// file: contents/v1/slug.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CheckSlugRequest extends jspb.Message { 
    getSlug(): string;
    setSlug(value: string): CheckSlugRequest;
    getArticleId(): number;
    setArticleId(value: number): CheckSlugRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckSlugRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CheckSlugRequest): CheckSlugRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckSlugRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckSlugRequest;
    static deserializeBinaryFromReader(message: CheckSlugRequest, reader: jspb.BinaryReader): CheckSlugRequest;
}

export namespace CheckSlugRequest {
    export type AsObject = {
        slug: string,
        articleId: number,
    }
}

export class CheckSlugResponse extends jspb.Message { 
    getIsExist(): boolean;
    setIsExist(value: boolean): CheckSlugResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckSlugResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CheckSlugResponse): CheckSlugResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckSlugResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckSlugResponse;
    static deserializeBinaryFromReader(message: CheckSlugResponse, reader: jspb.BinaryReader): CheckSlugResponse;
}

export namespace CheckSlugResponse {
    export type AsObject = {
        isExist: boolean,
    }
}
