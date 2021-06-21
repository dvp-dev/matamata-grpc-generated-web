// package: contents.v1
// file: contents/v1/comment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Comment extends jspb.Message { 
    getId(): number;
    setId(value: number): Comment;
    getParentId(): number;
    setParentId(value: number): Comment;
    getField(): string;
    setField(value: string): Comment;
    getUserId(): number;
    setUserId(value: number): Comment;
    getName(): string;
    setName(value: string): Comment;
    getContentId(): number;
    setContentId(value: number): Comment;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Comment;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Comment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comment.AsObject;
    static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comment;
    static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
    export type AsObject = {
        id: number,
        parentId: number,
        field: string,
        userId: number,
        name: string,
        contentId: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CommentCreateUpdate extends jspb.Message { 
    getParentId(): number;
    setParentId(value: number): CommentCreateUpdate;
    getField(): string;
    setField(value: string): CommentCreateUpdate;
    getUserId(): number;
    setUserId(value: number): CommentCreateUpdate;
    getName(): string;
    setName(value: string): CommentCreateUpdate;
    getContentId(): number;
    setContentId(value: number): CommentCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommentCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: CommentCreateUpdate): CommentCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommentCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommentCreateUpdate;
    static deserializeBinaryFromReader(message: CommentCreateUpdate, reader: jspb.BinaryReader): CommentCreateUpdate;
}

export namespace CommentCreateUpdate {
    export type AsObject = {
        parentId: number,
        field: string,
        userId: number,
        name: string,
        contentId: number,
    }
}
