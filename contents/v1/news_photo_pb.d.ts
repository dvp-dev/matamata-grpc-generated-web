// package: contents.v1
// file: contents/v1/news_photo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";
import * as contents_v1_tag_pb from "../../contents/v1/tag_pb";
import * as contents_v1_category_pb from "../../contents/v1/category_pb";
import * as contents_v1_article_pb from "../../contents/v1/article_pb";

export class ArticlePhoto extends jspb.Message { 
    getId(): number;
    setId(value: number): ArticlePhoto;
    getImageLink(): string;
    setImageLink(value: string): ArticlePhoto;
    getImageCaption(): string;
    setImageCaption(value: string): ArticlePhoto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticlePhoto.AsObject;
    static toObject(includeInstance: boolean, msg: ArticlePhoto): ArticlePhoto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticlePhoto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticlePhoto;
    static deserializeBinaryFromReader(message: ArticlePhoto, reader: jspb.BinaryReader): ArticlePhoto;
}

export namespace ArticlePhoto {
    export type AsObject = {
        id: number,
        imageLink: string,
        imageCaption: string,
    }
}

export class NewsPhoto extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsPhoto;
    getCategoryId1(): number;
    setCategoryId1(value: number): NewsPhoto;
    getCategoryId2(): number;
    setCategoryId2(value: number): NewsPhoto;
    getCategoryId3(): number;
    setCategoryId3(value: number): NewsPhoto;
    getTitle(): string;
    setTitle(value: string): NewsPhoto;
    getLead(): string;
    setLead(value: string): NewsPhoto;
    getContent(): string;
    setContent(value: string): NewsPhoto;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): NewsPhoto;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): NewsPhoto;
    getSlug(): string;
    setSlug(value: string): NewsPhoto;
    getEnergy(): number;
    setEnergy(value: number): NewsPhoto;
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): NewsPhoto;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): NewsPhoto;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): NewsPhoto;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): NewsPhoto;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): NewsPhoto;
    clearPhotosList(): void;
    getPhotosList(): Array<ArticlePhoto>;
    setPhotosList(value: Array<ArticlePhoto>): NewsPhoto;
    addPhotos(value?: ArticlePhoto, index?: number): ArticlePhoto;
    clearTagsList(): void;
    getTagsList(): Array<contents_v1_tag_pb.Tag>;
    setTagsList(value: Array<contents_v1_tag_pb.Tag>): NewsPhoto;
    addTags(value?: contents_v1_tag_pb.Tag, index?: number): contents_v1_tag_pb.Tag;

    hasCategory1(): boolean;
    clearCategory1(): void;
    getCategory1(): contents_v1_category_pb.Category1 | undefined;
    setCategory1(value?: contents_v1_category_pb.Category1): NewsPhoto;

    hasCategory2(): boolean;
    clearCategory2(): void;
    getCategory2(): contents_v1_category_pb.Category2 | undefined;
    setCategory2(value?: contents_v1_category_pb.Category2): NewsPhoto;

    hasCategory3(): boolean;
    clearCategory3(): void;
    getCategory3(): contents_v1_category_pb.Category3 | undefined;
    setCategory3(value?: contents_v1_category_pb.Category3): NewsPhoto;
    clearCreditsList(): void;
    getCreditsList(): Array<contents_v1_article_pb.ArticleCredit>;
    setCreditsList(value: Array<contents_v1_article_pb.ArticleCredit>): NewsPhoto;
    addCredits(value?: contents_v1_article_pb.ArticleCredit, index?: number): contents_v1_article_pb.ArticleCredit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhoto.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhoto): NewsPhoto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhoto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhoto;
    static deserializeBinaryFromReader(message: NewsPhoto, reader: jspb.BinaryReader): NewsPhoto;
}

export namespace NewsPhoto {
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
        status: contents_v1_article_pb.ArticleStatus,
        sectionHomepage: contents_v1_article_pb.ArticleSectionHomepage,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        photosList: Array<ArticlePhoto.AsObject>,
        tagsList: Array<contents_v1_tag_pb.Tag.AsObject>,
        category1?: contents_v1_category_pb.Category1.AsObject,
        category2?: contents_v1_category_pb.Category2.AsObject,
        category3?: contents_v1_category_pb.Category3.AsObject,
        creditsList: Array<contents_v1_article_pb.ArticleCredit.AsObject>,
    }
}

export class NewsPhotoCreateUpdate extends jspb.Message { 
    getCategoryId1(): number;
    setCategoryId1(value: number): NewsPhotoCreateUpdate;
    getCategoryId2(): number;
    setCategoryId2(value: number): NewsPhotoCreateUpdate;
    getCategoryId3(): number;
    setCategoryId3(value: number): NewsPhotoCreateUpdate;
    getTitle(): string;
    setTitle(value: string): NewsPhotoCreateUpdate;
    getLead(): string;
    setLead(value: string): NewsPhotoCreateUpdate;
    getContent(): string;
    setContent(value: string): NewsPhotoCreateUpdate;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): NewsPhotoCreateUpdate;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): NewsPhotoCreateUpdate;
    getEnergy(): number;
    setEnergy(value: number): NewsPhotoCreateUpdate;
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): NewsPhotoCreateUpdate;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): NewsPhotoCreateUpdate;
    clearPhotosList(): void;
    getPhotosList(): Array<ArticlePhoto>;
    setPhotosList(value: Array<ArticlePhoto>): NewsPhotoCreateUpdate;
    addPhotos(value?: ArticlePhoto, index?: number): ArticlePhoto;
    clearTagIdsList(): void;
    getTagIdsList(): Array<number>;
    setTagIdsList(value: Array<number>): NewsPhotoCreateUpdate;
    addTagIds(value: number, index?: number): number;
    clearCreditsList(): void;
    getCreditsList(): Array<contents_v1_article_pb.ArticleCreditCreateUpdate>;
    setCreditsList(value: Array<contents_v1_article_pb.ArticleCreditCreateUpdate>): NewsPhotoCreateUpdate;
    addCredits(value?: contents_v1_article_pb.ArticleCreditCreateUpdate, index?: number): contents_v1_article_pb.ArticleCreditCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoCreateUpdate): NewsPhotoCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoCreateUpdate;
    static deserializeBinaryFromReader(message: NewsPhotoCreateUpdate, reader: jspb.BinaryReader): NewsPhotoCreateUpdate;
}

export namespace NewsPhotoCreateUpdate {
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
        status: contents_v1_article_pb.ArticleStatus,
        sectionHomepage: contents_v1_article_pb.ArticleSectionHomepage,
        photosList: Array<ArticlePhoto.AsObject>,
        tagIdsList: Array<number>,
        creditsList: Array<contents_v1_article_pb.ArticleCreditCreateUpdate.AsObject>,
    }
}

export class NewsPhotoGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsPhotoGetOneRequest;
    getSearchBySlug(): string;
    setSearchBySlug(value: string): NewsPhotoGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoGetOneRequest): NewsPhotoGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoGetOneRequest;
    static deserializeBinaryFromReader(message: NewsPhotoGetOneRequest, reader: jspb.BinaryReader): NewsPhotoGetOneRequest;
}

export namespace NewsPhotoGetOneRequest {
    export type AsObject = {
        id: number,
        searchBySlug: string,
    }
}

export class NewsPhotoGetOneResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsPhoto | undefined;
    setData(value?: NewsPhoto): NewsPhotoGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoGetOneResponse): NewsPhotoGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoGetOneResponse;
    static deserializeBinaryFromReader(message: NewsPhotoGetOneResponse, reader: jspb.BinaryReader): NewsPhotoGetOneResponse;
}

export namespace NewsPhotoGetOneResponse {
    export type AsObject = {
        data?: NewsPhoto.AsObject,
    }
}

export class NewsPhotoGetListRequest extends jspb.Message { 
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): NewsPhotoGetListRequest;
    clearStatusMultipleList(): void;
    getStatusMultipleList(): Array<contents_v1_article_pb.ArticleStatus>;
    setStatusMultipleList(value: Array<contents_v1_article_pb.ArticleStatus>): NewsPhotoGetListRequest;
    addStatusMultiple(value: contents_v1_article_pb.ArticleStatus, index?: number): contents_v1_article_pb.ArticleStatus;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): NewsPhotoGetListRequest;
    getCategoryId1(): number;
    setCategoryId1(value: number): NewsPhotoGetListRequest;
    getCategoryId2(): number;
    setCategoryId2(value: number): NewsPhotoGetListRequest;
    getCategoryId3(): number;
    setCategoryId3(value: number): NewsPhotoGetListRequest;
    getSearch(): string;
    setSearch(value: string): NewsPhotoGetListRequest;
    getPage(): number;
    setPage(value: number): NewsPhotoGetListRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): NewsPhotoGetListRequest;
    getSortBy(): NewsPhotoGetListRequest.Sort;
    setSortBy(value: NewsPhotoGetListRequest.Sort): NewsPhotoGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoGetListRequest): NewsPhotoGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoGetListRequest;
    static deserializeBinaryFromReader(message: NewsPhotoGetListRequest, reader: jspb.BinaryReader): NewsPhotoGetListRequest;
}

export namespace NewsPhotoGetListRequest {
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
        sortBy: NewsPhotoGetListRequest.Sort,
    }

    export enum Sort {
    TITLE_ASCENDING_UNSPECIFIED = 0,
    TITLE_DESCENDING = 1,
    OLDEST = 2,
    NEWEST = 3,
    }

}

export class NewsPhotoGetListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<NewsPhoto>;
    setDataList(value: Array<NewsPhoto>): NewsPhotoGetListResponse;
    addData(value?: NewsPhoto, index?: number): NewsPhoto;
    getMaxPage(): number;
    setMaxPage(value: number): NewsPhotoGetListResponse;
    getCount(): number;
    setCount(value: number): NewsPhotoGetListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoGetListResponse): NewsPhotoGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoGetListResponse;
    static deserializeBinaryFromReader(message: NewsPhotoGetListResponse, reader: jspb.BinaryReader): NewsPhotoGetListResponse;
}

export namespace NewsPhotoGetListResponse {
    export type AsObject = {
        dataList: Array<NewsPhoto.AsObject>,
        maxPage: number,
        count: number,
    }
}

export class NewsPhotoGetListStreamResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsPhoto | undefined;
    setData(value?: NewsPhoto): NewsPhotoGetListStreamResponse;
    getMaxPage(): number;
    setMaxPage(value: number): NewsPhotoGetListStreamResponse;
    getCount(): number;
    setCount(value: number): NewsPhotoGetListStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoGetListStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoGetListStreamResponse): NewsPhotoGetListStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoGetListStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoGetListStreamResponse;
    static deserializeBinaryFromReader(message: NewsPhotoGetListStreamResponse, reader: jspb.BinaryReader): NewsPhotoGetListStreamResponse;
}

export namespace NewsPhotoGetListStreamResponse {
    export type AsObject = {
        data?: NewsPhoto.AsObject,
        maxPage: number,
        count: number,
    }
}

export class NewsPhotoCreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsPhotoCreateUpdate | undefined;
    setData(value?: NewsPhotoCreateUpdate): NewsPhotoCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoCreateRequest): NewsPhotoCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoCreateRequest;
    static deserializeBinaryFromReader(message: NewsPhotoCreateRequest, reader: jspb.BinaryReader): NewsPhotoCreateRequest;
}

export namespace NewsPhotoCreateRequest {
    export type AsObject = {
        data?: NewsPhotoCreateUpdate.AsObject,
    }
}

export class NewsPhotoCreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsPhoto | undefined;
    setData(value?: NewsPhoto): NewsPhotoCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoCreateResponse): NewsPhotoCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoCreateResponse;
    static deserializeBinaryFromReader(message: NewsPhotoCreateResponse, reader: jspb.BinaryReader): NewsPhotoCreateResponse;
}

export namespace NewsPhotoCreateResponse {
    export type AsObject = {
        data?: NewsPhoto.AsObject,
    }
}

export class NewsPhotoUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsPhotoUpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): NewsPhotoCreateUpdate | undefined;
    setData(value?: NewsPhotoCreateUpdate): NewsPhotoUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoUpdateRequest): NewsPhotoUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoUpdateRequest;
    static deserializeBinaryFromReader(message: NewsPhotoUpdateRequest, reader: jspb.BinaryReader): NewsPhotoUpdateRequest;
}

export namespace NewsPhotoUpdateRequest {
    export type AsObject = {
        id: number,
        data?: NewsPhotoCreateUpdate.AsObject,
    }
}

export class NewsPhotoUpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsPhoto | undefined;
    setData(value?: NewsPhoto): NewsPhotoUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoUpdateResponse): NewsPhotoUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoUpdateResponse;
    static deserializeBinaryFromReader(message: NewsPhotoUpdateResponse, reader: jspb.BinaryReader): NewsPhotoUpdateResponse;
}

export namespace NewsPhotoUpdateResponse {
    export type AsObject = {
        data?: NewsPhoto.AsObject,
    }
}

export class NewsPhotoDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): NewsPhotoDeleteRequest;
    getSoftDelete(): boolean;
    setSoftDelete(value: boolean): NewsPhotoDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoDeleteRequest): NewsPhotoDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoDeleteRequest;
    static deserializeBinaryFromReader(message: NewsPhotoDeleteRequest, reader: jspb.BinaryReader): NewsPhotoDeleteRequest;
}

export namespace NewsPhotoDeleteRequest {
    export type AsObject = {
        id: number,
        softDelete: boolean,
    }
}

export class NewsPhotoDeleteResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): NewsPhoto | undefined;
    setData(value?: NewsPhoto): NewsPhotoDeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsPhotoDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NewsPhotoDeleteResponse): NewsPhotoDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsPhotoDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsPhotoDeleteResponse;
    static deserializeBinaryFromReader(message: NewsPhotoDeleteResponse, reader: jspb.BinaryReader): NewsPhotoDeleteResponse;
}

export namespace NewsPhotoDeleteResponse {
    export type AsObject = {
        data?: NewsPhoto.AsObject,
    }
}
