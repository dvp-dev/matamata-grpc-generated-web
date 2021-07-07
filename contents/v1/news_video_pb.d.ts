// package: contents.v1
// file: contents/v1/news_video.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";
import * as contents_v1_tag_pb from "../../contents/v1/tag_pb";
import * as contents_v1_category_pb from "../../contents/v1/category_pb";
import * as contents_v1_article_pb from "../../contents/v1/article_pb";

export class ArticleVideo extends jspb.Message { 
    getId(): number;
    setId(value: number): ArticleVideo;
    getVideoLink(): string;
    setVideoLink(value: string): ArticleVideo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleVideo.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleVideo): ArticleVideo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleVideo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleVideo;
    static deserializeBinaryFromReader(message: ArticleVideo, reader: jspb.BinaryReader): ArticleVideo;
}

export namespace ArticleVideo {
    export type AsObject = {
        id: number,
        videoLink: string,
    }
}

export class NewsVideo extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsVideo;
    getCategoryId1(): number;
    setCategoryId1(value: number): NewsVideo;
    getCategoryId2(): number;
    setCategoryId2(value: number): NewsVideo;
    getCategoryId3(): number;
    setCategoryId3(value: number): NewsVideo;
    getTitle(): string;
    setTitle(value: string): NewsVideo;
    getLead(): string;
    setLead(value: string): NewsVideo;
    getContent(): string;
    setContent(value: string): NewsVideo;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): NewsVideo;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): NewsVideo;
    getSlug(): string;
    setSlug(value: string): NewsVideo;
    getEnergy(): number;
    setEnergy(value: number): NewsVideo;
    getType(): contents_v1_article_pb.ArticleType;
    setType(value: contents_v1_article_pb.ArticleType): NewsVideo;
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): NewsVideo;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): NewsVideo;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): NewsVideo;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): NewsVideo;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): NewsVideo;

    hasVideo(): boolean;
    clearVideo(): void;
    getVideo(): ArticleVideo | undefined;
    setVideo(value?: ArticleVideo): NewsVideo;
    clearTagsList(): void;
    getTagsList(): Array<contents_v1_tag_pb.Tag>;
    setTagsList(value: Array<contents_v1_tag_pb.Tag>): NewsVideo;
    addTags(value?: contents_v1_tag_pb.Tag, index?: number): contents_v1_tag_pb.Tag;

    hasCategory1(): boolean;
    clearCategory1(): void;
    getCategory1(): contents_v1_category_pb.Category1 | undefined;
    setCategory1(value?: contents_v1_category_pb.Category1): NewsVideo;

    hasCategory2(): boolean;
    clearCategory2(): void;
    getCategory2(): contents_v1_category_pb.Category2 | undefined;
    setCategory2(value?: contents_v1_category_pb.Category2): NewsVideo;

    hasCategory3(): boolean;
    clearCategory3(): void;
    getCategory3(): contents_v1_category_pb.Category3 | undefined;
    setCategory3(value?: contents_v1_category_pb.Category3): NewsVideo;
    clearCreditsList(): void;
    getCreditsList(): Array<contents_v1_article_pb.ArticleCredit>;
    setCreditsList(value: Array<contents_v1_article_pb.ArticleCredit>): NewsVideo;
    addCredits(value?: contents_v1_article_pb.ArticleCredit, index?: number): contents_v1_article_pb.ArticleCredit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideo.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideo): NewsVideo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideo;
    static deserializeBinaryFromReader(message: NewsVideo, reader: jspb.BinaryReader): NewsVideo;
}

export namespace NewsVideo {
    export type AsObject = {
        id: number,
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        title: string,
        lead: string,
        content: string,
        imageCoverUrl: string,
        imageCoverCaption: string,
        slug: string,
        energy: number,
        type: contents_v1_article_pb.ArticleType,
        status: contents_v1_article_pb.ArticleStatus,
        sectionHomepage: contents_v1_article_pb.ArticleSectionHomepage,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        video?: ArticleVideo.AsObject,
        tagsList: Array<contents_v1_tag_pb.Tag.AsObject>,
        category1?: contents_v1_category_pb.Category1.AsObject,
        category2?: contents_v1_category_pb.Category2.AsObject,
        category3?: contents_v1_category_pb.Category3.AsObject,
        creditsList: Array<contents_v1_article_pb.ArticleCredit.AsObject>,
    }
}

export class NewsVideoCreateUpdate extends jspb.Message { 
    getCategoryId1(): number;
    setCategoryId1(value: number): NewsVideoCreateUpdate;
    getCategoryId2(): number;
    setCategoryId2(value: number): NewsVideoCreateUpdate;
    getCategoryId3(): number;
    setCategoryId3(value: number): NewsVideoCreateUpdate;
    getTitle(): string;
    setTitle(value: string): NewsVideoCreateUpdate;
    getLead(): string;
    setLead(value: string): NewsVideoCreateUpdate;
    getContent(): string;
    setContent(value: string): NewsVideoCreateUpdate;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): NewsVideoCreateUpdate;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): NewsVideoCreateUpdate;
    getEnergy(): number;
    setEnergy(value: number): NewsVideoCreateUpdate;
    getType(): contents_v1_article_pb.ArticleType;
    setType(value: contents_v1_article_pb.ArticleType): NewsVideoCreateUpdate;
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): NewsVideoCreateUpdate;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): NewsVideoCreateUpdate;

    hasVideo(): boolean;
    clearVideo(): void;
    getVideo(): ArticleVideo | undefined;
    setVideo(value?: ArticleVideo): NewsVideoCreateUpdate;
    clearTagIdsList(): void;
    getTagIdsList(): Array<number>;
    setTagIdsList(value: Array<number>): NewsVideoCreateUpdate;
    addTagIds(value: number, index?: number): number;
    clearCreditsList(): void;
    getCreditsList(): Array<contents_v1_article_pb.ArticleCreditCreateUpdate>;
    setCreditsList(value: Array<contents_v1_article_pb.ArticleCreditCreateUpdate>): NewsVideoCreateUpdate;
    addCredits(value?: contents_v1_article_pb.ArticleCreditCreateUpdate, index?: number): contents_v1_article_pb.ArticleCreditCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoCreateUpdate): NewsVideoCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoCreateUpdate;
    static deserializeBinaryFromReader(message: NewsVideoCreateUpdate, reader: jspb.BinaryReader): NewsVideoCreateUpdate;
}

export namespace NewsVideoCreateUpdate {
    export type AsObject = {
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        title: string,
        lead: string,
        content: string,
        imageCoverUrl: string,
        imageCoverCaption: string,
        energy: number,
        type: contents_v1_article_pb.ArticleType,
        status: contents_v1_article_pb.ArticleStatus,
        sectionHomepage: contents_v1_article_pb.ArticleSectionHomepage,
        video?: ArticleVideo.AsObject,
        tagIdsList: Array<number>,
        creditsList: Array<contents_v1_article_pb.ArticleCreditCreateUpdate.AsObject>,
    }
}

export class NewsVideoGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsVideoGetOneRequest;
    getSearchBySlug(): string;
    setSearchBySlug(value: string): NewsVideoGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoGetOneRequest): NewsVideoGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoGetOneRequest;
    static deserializeBinaryFromReader(message: NewsVideoGetOneRequest, reader: jspb.BinaryReader): NewsVideoGetOneRequest;
}

export namespace NewsVideoGetOneRequest {
    export type AsObject = {
        id: number,
        searchBySlug: string,
    }
}

export class NewsVideoGetOneResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsVideo | undefined;
    setData(value?: NewsVideo): NewsVideoGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoGetOneResponse): NewsVideoGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoGetOneResponse;
    static deserializeBinaryFromReader(message: NewsVideoGetOneResponse, reader: jspb.BinaryReader): NewsVideoGetOneResponse;
}

export namespace NewsVideoGetOneResponse {
    export type AsObject = {
        data?: NewsVideo.AsObject,
    }
}

export class NewsVideoGetListRequest extends jspb.Message { 
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): NewsVideoGetListRequest;
    clearStatusMultipleList(): void;
    getStatusMultipleList(): Array<contents_v1_article_pb.ArticleStatus>;
    setStatusMultipleList(value: Array<contents_v1_article_pb.ArticleStatus>): NewsVideoGetListRequest;
    addStatusMultiple(value: contents_v1_article_pb.ArticleStatus, index?: number): contents_v1_article_pb.ArticleStatus;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): NewsVideoGetListRequest;
    getCategoryId1(): number;
    setCategoryId1(value: number): NewsVideoGetListRequest;
    getCategoryId2(): number;
    setCategoryId2(value: number): NewsVideoGetListRequest;
    getCategoryId3(): number;
    setCategoryId3(value: number): NewsVideoGetListRequest;
    getSearch(): string;
    setSearch(value: string): NewsVideoGetListRequest;
    getPage(): number;
    setPage(value: number): NewsVideoGetListRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): NewsVideoGetListRequest;
    getSortBy(): NewsVideoGetListRequest.Sort;
    setSortBy(value: NewsVideoGetListRequest.Sort): NewsVideoGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoGetListRequest): NewsVideoGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoGetListRequest;
    static deserializeBinaryFromReader(message: NewsVideoGetListRequest, reader: jspb.BinaryReader): NewsVideoGetListRequest;
}

export namespace NewsVideoGetListRequest {
    export type AsObject = {
        status: contents_v1_article_pb.ArticleStatus,
        statusMultipleList: Array<contents_v1_article_pb.ArticleStatus>,
        sectionHomepage: contents_v1_article_pb.ArticleSectionHomepage,
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        search: string,
        page: number,
        contentPerPage: number,
        sortBy: NewsVideoGetListRequest.Sort,
    }

    export enum Sort {
    TITLE_ASCENDING_UNSPECIFIED = 0,
    TITLE_DESCENDING = 1,
    OLDEST = 2,
    NEWEST = 3,
    }

}

export class NewsVideoGetListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<NewsVideo>;
    setDataList(value: Array<NewsVideo>): NewsVideoGetListResponse;
    addData(value?: NewsVideo, index?: number): NewsVideo;
    getMaxPage(): number;
    setMaxPage(value: number): NewsVideoGetListResponse;
    getCount(): number;
    setCount(value: number): NewsVideoGetListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoGetListResponse): NewsVideoGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoGetListResponse;
    static deserializeBinaryFromReader(message: NewsVideoGetListResponse, reader: jspb.BinaryReader): NewsVideoGetListResponse;
}

export namespace NewsVideoGetListResponse {
    export type AsObject = {
        dataList: Array<NewsVideo.AsObject>,
        maxPage: number,
        count: number,
    }
}

export class NewsVideoGetListStreamResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsVideo | undefined;
    setData(value?: NewsVideo): NewsVideoGetListStreamResponse;
    getMaxPage(): number;
    setMaxPage(value: number): NewsVideoGetListStreamResponse;
    getCount(): number;
    setCount(value: number): NewsVideoGetListStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoGetListStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoGetListStreamResponse): NewsVideoGetListStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoGetListStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoGetListStreamResponse;
    static deserializeBinaryFromReader(message: NewsVideoGetListStreamResponse, reader: jspb.BinaryReader): NewsVideoGetListStreamResponse;
}

export namespace NewsVideoGetListStreamResponse {
    export type AsObject = {
        data?: NewsVideo.AsObject,
        maxPage: number,
        count: number,
    }
}

export class NewsVideoCreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsVideoCreateUpdate | undefined;
    setData(value?: NewsVideoCreateUpdate): NewsVideoCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoCreateRequest): NewsVideoCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoCreateRequest;
    static deserializeBinaryFromReader(message: NewsVideoCreateRequest, reader: jspb.BinaryReader): NewsVideoCreateRequest;
}

export namespace NewsVideoCreateRequest {
    export type AsObject = {
        data?: NewsVideoCreateUpdate.AsObject,
    }
}

export class NewsVideoCreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsVideo | undefined;
    setData(value?: NewsVideo): NewsVideoCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoCreateResponse): NewsVideoCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoCreateResponse;
    static deserializeBinaryFromReader(message: NewsVideoCreateResponse, reader: jspb.BinaryReader): NewsVideoCreateResponse;
}

export namespace NewsVideoCreateResponse {
    export type AsObject = {
        data?: NewsVideo.AsObject,
    }
}

export class NewsVideoUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsVideoUpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): NewsVideoCreateUpdate | undefined;
    setData(value?: NewsVideoCreateUpdate): NewsVideoUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoUpdateRequest): NewsVideoUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoUpdateRequest;
    static deserializeBinaryFromReader(message: NewsVideoUpdateRequest, reader: jspb.BinaryReader): NewsVideoUpdateRequest;
}

export namespace NewsVideoUpdateRequest {
    export type AsObject = {
        id: number,
        data?: NewsVideoCreateUpdate.AsObject,
    }
}

export class NewsVideoUpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsVideo | undefined;
    setData(value?: NewsVideo): NewsVideoUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoUpdateResponse): NewsVideoUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoUpdateResponse;
    static deserializeBinaryFromReader(message: NewsVideoUpdateResponse, reader: jspb.BinaryReader): NewsVideoUpdateResponse;
}

export namespace NewsVideoUpdateResponse {
    export type AsObject = {
        data?: NewsVideo.AsObject,
    }
}

export class NewsVideoDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsVideoDeleteRequest;
    getSoftDelete(): boolean;
    setSoftDelete(value: boolean): NewsVideoDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoDeleteRequest): NewsVideoDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoDeleteRequest;
    static deserializeBinaryFromReader(message: NewsVideoDeleteRequest, reader: jspb.BinaryReader): NewsVideoDeleteRequest;
}

export namespace NewsVideoDeleteRequest {
    export type AsObject = {
        id: number,
        softDelete: boolean,
    }
}

export class NewsVideoDeleteResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsVideo | undefined;
    setData(value?: NewsVideo): NewsVideoDeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsVideoDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsVideoDeleteResponse): NewsVideoDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsVideoDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsVideoDeleteResponse;
    static deserializeBinaryFromReader(message: NewsVideoDeleteResponse, reader: jspb.BinaryReader): NewsVideoDeleteResponse;
}

export namespace NewsVideoDeleteResponse {
    export type AsObject = {
        data?: NewsVideo.AsObject,
    }
}
