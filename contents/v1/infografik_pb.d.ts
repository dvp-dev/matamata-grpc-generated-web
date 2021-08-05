// package: contents.v1
// file: contents/v1/infografik.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";
import * as contents_v1_tag_pb from "../../contents/v1/tag_pb";
import * as contents_v1_category_pb from "../../contents/v1/category_pb";
import * as contents_v1_article_pb from "../../contents/v1/article_pb";

export class Infografik extends jspb.Message { 
    getId(): number;
    setId(value: number): Infografik;
    getCategoryId1(): number;
    setCategoryId1(value: number): Infografik;
    getCategoryId2(): number;
    setCategoryId2(value: number): Infografik;
    getCategoryId3(): number;
    setCategoryId3(value: number): Infografik;
    getTitle(): string;
    setTitle(value: string): Infografik;
    getLead(): string;
    setLead(value: string): Infografik;
    getContent(): string;
    setContent(value: string): Infografik;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): Infografik;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): Infografik;
    getImageCoverAlt(): string;
    setImageCoverAlt(value: string): Infografik;
    getSlug(): string;
    setSlug(value: string): Infografik;
    getEnergy(): number;
    setEnergy(value: number): Infografik;
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): Infografik;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): Infografik;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Infografik;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Infografik;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Infografik;

    hasSeo(): boolean;
    clearSeo(): void;
    getSeo(): contents_v1_article_pb.ArticleSEO | undefined;
    setSeo(value?: contents_v1_article_pb.ArticleSEO): Infografik;
    clearTagsList(): void;
    getTagsList(): Array<contents_v1_tag_pb.Tag>;
    setTagsList(value: Array<contents_v1_tag_pb.Tag>): Infografik;
    addTags(value?: contents_v1_tag_pb.Tag, index?: number): contents_v1_tag_pb.Tag;

    hasCategory1(): boolean;
    clearCategory1(): void;
    getCategory1(): contents_v1_category_pb.Category1 | undefined;
    setCategory1(value?: contents_v1_category_pb.Category1): Infografik;

    hasCategory2(): boolean;
    clearCategory2(): void;
    getCategory2(): contents_v1_category_pb.Category2 | undefined;
    setCategory2(value?: contents_v1_category_pb.Category2): Infografik;

    hasCategory3(): boolean;
    clearCategory3(): void;
    getCategory3(): contents_v1_category_pb.Category3 | undefined;
    setCategory3(value?: contents_v1_category_pb.Category3): Infografik;

    hasAdminCreated(): boolean;
    clearAdminCreated(): void;
    getAdminCreated(): admin_v1_admin_pb.Admin | undefined;
    setAdminCreated(value?: admin_v1_admin_pb.Admin): Infografik;
    clearCreditsList(): void;
    getCreditsList(): Array<contents_v1_article_pb.ArticleCredit>;
    setCreditsList(value: Array<contents_v1_article_pb.ArticleCredit>): Infografik;
    addCredits(value?: contents_v1_article_pb.ArticleCredit, index?: number): contents_v1_article_pb.ArticleCredit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Infografik.AsObject;
    static toObject(includeInstance: boolean, msg: Infografik): Infografik.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Infografik, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Infografik;
    static deserializeBinaryFromReader(message: Infografik, reader: jspb.BinaryReader): Infografik;
}

export namespace Infografik {
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
        imageCoverAlt: string,
        slug: string,
        energy: number,
        status: contents_v1_article_pb.ArticleStatus,
        sectionHomepage: contents_v1_article_pb.ArticleSectionHomepage,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        seo?: contents_v1_article_pb.ArticleSEO.AsObject,
        tagsList: Array<contents_v1_tag_pb.Tag.AsObject>,
        category1?: contents_v1_category_pb.Category1.AsObject,
        category2?: contents_v1_category_pb.Category2.AsObject,
        category3?: contents_v1_category_pb.Category3.AsObject,
        adminCreated?: admin_v1_admin_pb.Admin.AsObject,
        creditsList: Array<contents_v1_article_pb.ArticleCredit.AsObject>,
    }
}

export class InfografikCreateUpdate extends jspb.Message { 
    getCategoryId1(): number;
    setCategoryId1(value: number): InfografikCreateUpdate;
    getCategoryId2(): number;
    setCategoryId2(value: number): InfografikCreateUpdate;
    getCategoryId3(): number;
    setCategoryId3(value: number): InfografikCreateUpdate;
    getTitle(): string;
    setTitle(value: string): InfografikCreateUpdate;
    getLead(): string;
    setLead(value: string): InfografikCreateUpdate;
    getContent(): string;
    setContent(value: string): InfografikCreateUpdate;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): InfografikCreateUpdate;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): InfografikCreateUpdate;
    getImageCoverAlt(): string;
    setImageCoverAlt(value: string): InfografikCreateUpdate;
    getEnergy(): number;
    setEnergy(value: number): InfografikCreateUpdate;
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): InfografikCreateUpdate;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): InfografikCreateUpdate;
    getIsCustomPublishedAt(): boolean;
    setIsCustomPublishedAt(value: boolean): InfografikCreateUpdate;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): InfografikCreateUpdate;

    hasSeo(): boolean;
    clearSeo(): void;
    getSeo(): contents_v1_article_pb.ArticleSEO | undefined;
    setSeo(value?: contents_v1_article_pb.ArticleSEO): InfografikCreateUpdate;
    clearTagIdsList(): void;
    getTagIdsList(): Array<number>;
    setTagIdsList(value: Array<number>): InfografikCreateUpdate;
    addTagIds(value: number, index?: number): number;
    clearCreditsList(): void;
    getCreditsList(): Array<contents_v1_article_pb.ArticleCreditCreateUpdate>;
    setCreditsList(value: Array<contents_v1_article_pb.ArticleCreditCreateUpdate>): InfografikCreateUpdate;
    addCredits(value?: contents_v1_article_pb.ArticleCreditCreateUpdate, index?: number): contents_v1_article_pb.ArticleCreditCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikCreateUpdate): InfografikCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikCreateUpdate;
    static deserializeBinaryFromReader(message: InfografikCreateUpdate, reader: jspb.BinaryReader): InfografikCreateUpdate;
}

export namespace InfografikCreateUpdate {
    export type AsObject = {
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        title: string,
        lead: string,
        content: string,
        imageCoverUrl: string,
        imageCoverCaption: string,
        imageCoverAlt: string,
        energy: number,
        status: contents_v1_article_pb.ArticleStatus,
        sectionHomepage: contents_v1_article_pb.ArticleSectionHomepage,
        isCustomPublishedAt: boolean,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        seo?: contents_v1_article_pb.ArticleSEO.AsObject,
        tagIdsList: Array<number>,
        creditsList: Array<contents_v1_article_pb.ArticleCreditCreateUpdate.AsObject>,
    }
}

export class InfografikGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): InfografikGetOneRequest;
    getSearchBySlug(): string;
    setSearchBySlug(value: string): InfografikGetOneRequest;
    getWithAdminCreated(): boolean;
    setWithAdminCreated(value: boolean): InfografikGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikGetOneRequest): InfografikGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikGetOneRequest;
    static deserializeBinaryFromReader(message: InfografikGetOneRequest, reader: jspb.BinaryReader): InfografikGetOneRequest;
}

export namespace InfografikGetOneRequest {
    export type AsObject = {
        id: number,
        searchBySlug: string,
        withAdminCreated: boolean,
    }
}

export class InfografikGetOneResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Infografik | undefined;
    setData(value?: Infografik): InfografikGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikGetOneResponse): InfografikGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikGetOneResponse;
    static deserializeBinaryFromReader(message: InfografikGetOneResponse, reader: jspb.BinaryReader): InfografikGetOneResponse;
}

export namespace InfografikGetOneResponse {
    export type AsObject = {
        data?: Infografik.AsObject,
    }
}

export class InfografikGetListRequest extends jspb.Message { 
    getStatus(): contents_v1_article_pb.ArticleStatus;
    setStatus(value: contents_v1_article_pb.ArticleStatus): InfografikGetListRequest;
    clearStatusMultipleList(): void;
    getStatusMultipleList(): Array<contents_v1_article_pb.ArticleStatus>;
    setStatusMultipleList(value: Array<contents_v1_article_pb.ArticleStatus>): InfografikGetListRequest;
    addStatusMultiple(value: contents_v1_article_pb.ArticleStatus, index?: number): contents_v1_article_pb.ArticleStatus;
    getSectionHomepage(): contents_v1_article_pb.ArticleSectionHomepage;
    setSectionHomepage(value: contents_v1_article_pb.ArticleSectionHomepage): InfografikGetListRequest;
    getCategoryId1(): number;
    setCategoryId1(value: number): InfografikGetListRequest;
    getCategoryId2(): number;
    setCategoryId2(value: number): InfografikGetListRequest;
    getCategoryId3(): number;
    setCategoryId3(value: number): InfografikGetListRequest;
    getSearch(): string;
    setSearch(value: string): InfografikGetListRequest;
    getPage(): number;
    setPage(value: number): InfografikGetListRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): InfografikGetListRequest;
    getWithAdminCreated(): boolean;
    setWithAdminCreated(value: boolean): InfografikGetListRequest;
    getSortBy(): InfografikGetListRequest.Sort;
    setSortBy(value: InfografikGetListRequest.Sort): InfografikGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikGetListRequest): InfografikGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikGetListRequest;
    static deserializeBinaryFromReader(message: InfografikGetListRequest, reader: jspb.BinaryReader): InfografikGetListRequest;
}

export namespace InfografikGetListRequest {
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
        withAdminCreated: boolean,
        sortBy: InfografikGetListRequest.Sort,
    }

    export enum Sort {
    TITLE_ASCENDING_UNSPECIFIED = 0,
    TITLE_DESCENDING = 1,
    OLDEST = 2,
    NEWEST = 3,
    ENERGY_HIGHEST = 4,
    ENERGY_LOWEST = 5,
    CREATED_AT_ASCENDING = 6,
    CREATED_AT_DESCENDING = 7,
    PUBLISHED_AT_ASCENDING = 8,
    PUBLISHED_AT_DESCENDING = 9,
    }

}

export class InfografikGetListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Infografik>;
    setDataList(value: Array<Infografik>): InfografikGetListResponse;
    addData(value?: Infografik, index?: number): Infografik;
    getMaxPage(): number;
    setMaxPage(value: number): InfografikGetListResponse;
    getCount(): number;
    setCount(value: number): InfografikGetListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikGetListResponse): InfografikGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikGetListResponse;
    static deserializeBinaryFromReader(message: InfografikGetListResponse, reader: jspb.BinaryReader): InfografikGetListResponse;
}

export namespace InfografikGetListResponse {
    export type AsObject = {
        dataList: Array<Infografik.AsObject>,
        maxPage: number,
        count: number,
    }
}

export class InfografikGetListStreamResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Infografik | undefined;
    setData(value?: Infografik): InfografikGetListStreamResponse;
    getMaxPage(): number;
    setMaxPage(value: number): InfografikGetListStreamResponse;
    getCount(): number;
    setCount(value: number): InfografikGetListStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikGetListStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikGetListStreamResponse): InfografikGetListStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikGetListStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikGetListStreamResponse;
    static deserializeBinaryFromReader(message: InfografikGetListStreamResponse, reader: jspb.BinaryReader): InfografikGetListStreamResponse;
}

export namespace InfografikGetListStreamResponse {
    export type AsObject = {
        data?: Infografik.AsObject,
        maxPage: number,
        count: number,
    }
}

export class InfografikCreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): InfografikCreateUpdate | undefined;
    setData(value?: InfografikCreateUpdate): InfografikCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikCreateRequest): InfografikCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikCreateRequest;
    static deserializeBinaryFromReader(message: InfografikCreateRequest, reader: jspb.BinaryReader): InfografikCreateRequest;
}

export namespace InfografikCreateRequest {
    export type AsObject = {
        data?: InfografikCreateUpdate.AsObject,
    }
}

export class InfografikCreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Infografik | undefined;
    setData(value?: Infografik): InfografikCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikCreateResponse): InfografikCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikCreateResponse;
    static deserializeBinaryFromReader(message: InfografikCreateResponse, reader: jspb.BinaryReader): InfografikCreateResponse;
}

export namespace InfografikCreateResponse {
    export type AsObject = {
        data?: Infografik.AsObject,
    }
}

export class InfografikUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): InfografikUpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): InfografikCreateUpdate | undefined;
    setData(value?: InfografikCreateUpdate): InfografikUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikUpdateRequest): InfografikUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikUpdateRequest;
    static deserializeBinaryFromReader(message: InfografikUpdateRequest, reader: jspb.BinaryReader): InfografikUpdateRequest;
}

export namespace InfografikUpdateRequest {
    export type AsObject = {
        id: number,
        data?: InfografikCreateUpdate.AsObject,
    }
}

export class InfografikUpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Infografik | undefined;
    setData(value?: Infografik): InfografikUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikUpdateResponse): InfografikUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikUpdateResponse;
    static deserializeBinaryFromReader(message: InfografikUpdateResponse, reader: jspb.BinaryReader): InfografikUpdateResponse;
}

export namespace InfografikUpdateResponse {
    export type AsObject = {
        data?: Infografik.AsObject,
    }
}

export class InfografikDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): InfografikDeleteRequest;
    getSoftDelete(): boolean;
    setSoftDelete(value: boolean): InfografikDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikDeleteRequest): InfografikDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikDeleteRequest;
    static deserializeBinaryFromReader(message: InfografikDeleteRequest, reader: jspb.BinaryReader): InfografikDeleteRequest;
}

export namespace InfografikDeleteRequest {
    export type AsObject = {
        id: number,
        softDelete: boolean,
    }
}

export class InfografikDeleteResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Infografik | undefined;
    setData(value?: Infografik): InfografikDeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfografikDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InfografikDeleteResponse): InfografikDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfografikDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfografikDeleteResponse;
    static deserializeBinaryFromReader(message: InfografikDeleteResponse, reader: jspb.BinaryReader): InfografikDeleteResponse;
}

export namespace InfografikDeleteResponse {
    export type AsObject = {
        data?: Infografik.AsObject,
    }
}
