// package: contents.v1
// file: contents/v1/article.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";
import * as contents_v1_tag_pb from "../../contents/v1/tag_pb";
import * as contents_v1_category_pb from "../../contents/v1/category_pb";

export class ArticleCredit extends jspb.Message { 
    getRole(): ArticleCreditRole;
    setRole(value: ArticleCreditRole): ArticleCredit;

    hasAdmin(): boolean;
    clearAdmin(): void;
    getAdmin(): admin_v1_admin_pb.Admin | undefined;
    setAdmin(value?: admin_v1_admin_pb.Admin): ArticleCredit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleCredit.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleCredit): ArticleCredit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleCredit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleCredit;
    static deserializeBinaryFromReader(message: ArticleCredit, reader: jspb.BinaryReader): ArticleCredit;
}

export namespace ArticleCredit {
    export type AsObject = {
        role: ArticleCreditRole,
        admin?: admin_v1_admin_pb.Admin.AsObject,
    }
}

export class ArticleCreditCreateUpdate extends jspb.Message { 
    getRole(): ArticleCreditRole;
    setRole(value: ArticleCreditRole): ArticleCreditCreateUpdate;
    getAdminId(): number;
    setAdminId(value: number): ArticleCreditCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleCreditCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleCreditCreateUpdate): ArticleCreditCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleCreditCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleCreditCreateUpdate;
    static deserializeBinaryFromReader(message: ArticleCreditCreateUpdate, reader: jspb.BinaryReader): ArticleCreditCreateUpdate;
}

export namespace ArticleCreditCreateUpdate {
    export type AsObject = {
        role: ArticleCreditRole,
        adminId: number,
    }
}

export class ArticleSEO extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): ArticleSEO;
    getSlug(): string;
    setSlug(value: string): ArticleSEO;
    getMetaDescription(): string;
    setMetaDescription(value: string): ArticleSEO;
    getSearchEngineShowThisPost(): boolean;
    setSearchEngineShowThisPost(value: boolean): ArticleSEO;
    getSearchEngineFollowLinksOnThisPost(): boolean;
    setSearchEngineFollowLinksOnThisPost(value: boolean): ArticleSEO;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleSEO.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleSEO): ArticleSEO.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleSEO, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleSEO;
    static deserializeBinaryFromReader(message: ArticleSEO, reader: jspb.BinaryReader): ArticleSEO;
}

export namespace ArticleSEO {
    export type AsObject = {
        title: string,
        slug: string,
        metaDescription: string,
        searchEngineShowThisPost: boolean,
        searchEngineFollowLinksOnThisPost: boolean,
    }
}

export class Article extends jspb.Message { 
    getId(): number;
    setId(value: number): Article;
    getCategoryId1(): number;
    setCategoryId1(value: number): Article;
    getCategoryId2(): number;
    setCategoryId2(value: number): Article;
    getCategoryId3(): number;
    setCategoryId3(value: number): Article;
    getTitle(): string;
    setTitle(value: string): Article;
    getLead(): string;
    setLead(value: string): Article;
    getContent(): string;
    setContent(value: string): Article;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): Article;
    getImageCoverUrlOriginal(): string;
    setImageCoverUrlOriginal(value: string): Article;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): Article;
    getImageCoverAlt(): string;
    setImageCoverAlt(value: string): Article;
    getSlug(): string;
    setSlug(value: string): Article;
    getEnergy(): number;
    setEnergy(value: number): Article;
    getType(): ArticleType;
    setType(value: ArticleType): Article;
    getStatus(): ArticleStatus;
    setStatus(value: ArticleStatus): Article;
    getSectionHomepage(): ArticleSectionHomepage;
    setSectionHomepage(value: ArticleSectionHomepage): Article;
    getSpecial(): number;
    setSpecial(value: number): Article;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;
    clearTagsList(): void;
    getTagsList(): Array<contents_v1_tag_pb.Tag>;
    setTagsList(value: Array<contents_v1_tag_pb.Tag>): Article;
    addTags(value?: contents_v1_tag_pb.Tag, index?: number): contents_v1_tag_pb.Tag;

    hasCategory1(): boolean;
    clearCategory1(): void;
    getCategory1(): contents_v1_category_pb.Category1 | undefined;
    setCategory1(value?: contents_v1_category_pb.Category1): Article;

    hasCategory2(): boolean;
    clearCategory2(): void;
    getCategory2(): contents_v1_category_pb.Category2 | undefined;
    setCategory2(value?: contents_v1_category_pb.Category2): Article;

    hasCategory3(): boolean;
    clearCategory3(): void;
    getCategory3(): contents_v1_category_pb.Category3 | undefined;
    setCategory3(value?: contents_v1_category_pb.Category3): Article;

    hasSeo(): boolean;
    clearSeo(): void;
    getSeo(): ArticleSEO | undefined;
    setSeo(value?: ArticleSEO): Article;

    hasAdminCreated(): boolean;
    clearAdminCreated(): void;
    getAdminCreated(): admin_v1_admin_pb.Admin | undefined;
    setAdminCreated(value?: admin_v1_admin_pb.Admin): Article;
    clearCreditsList(): void;
    getCreditsList(): Array<ArticleCredit>;
    setCreditsList(value: Array<ArticleCredit>): Article;
    addCredits(value?: ArticleCredit, index?: number): ArticleCredit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Article.AsObject;
    static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Article;
    static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
    export type AsObject = {
        id: number,
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        title: string,
        lead: string,
        content: string,
        imageCoverUrl: string,
        imageCoverUrlOriginal: string,
        imageCoverCaption: string,
        imageCoverAlt: string,
        slug: string,
        energy: number,
        type: ArticleType,
        status: ArticleStatus,
        sectionHomepage: ArticleSectionHomepage,
        special: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        tagsList: Array<contents_v1_tag_pb.Tag.AsObject>,
        category1?: contents_v1_category_pb.Category1.AsObject,
        category2?: contents_v1_category_pb.Category2.AsObject,
        category3?: contents_v1_category_pb.Category3.AsObject,
        seo?: ArticleSEO.AsObject,
        adminCreated?: admin_v1_admin_pb.Admin.AsObject,
        creditsList: Array<ArticleCredit.AsObject>,
    }
}

export class ArticleCreateUpdate extends jspb.Message { 
    getCategoryId1(): number;
    setCategoryId1(value: number): ArticleCreateUpdate;
    getCategoryId2(): number;
    setCategoryId2(value: number): ArticleCreateUpdate;
    getCategoryId3(): number;
    setCategoryId3(value: number): ArticleCreateUpdate;
    getTitle(): string;
    setTitle(value: string): ArticleCreateUpdate;
    getLead(): string;
    setLead(value: string): ArticleCreateUpdate;
    getContent(): string;
    setContent(value: string): ArticleCreateUpdate;
    getImageCoverUrl(): string;
    setImageCoverUrl(value: string): ArticleCreateUpdate;
    getImageCoverUrlOriginal(): string;
    setImageCoverUrlOriginal(value: string): ArticleCreateUpdate;
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): ArticleCreateUpdate;
    getImageCoverAlt(): string;
    setImageCoverAlt(value: string): ArticleCreateUpdate;
    getEnergy(): number;
    setEnergy(value: number): ArticleCreateUpdate;
    getType(): ArticleType;
    setType(value: ArticleType): ArticleCreateUpdate;
    getStatus(): ArticleStatus;
    setStatus(value: ArticleStatus): ArticleCreateUpdate;
    getSectionHomepage(): ArticleSectionHomepage;
    setSectionHomepage(value: ArticleSectionHomepage): ArticleCreateUpdate;
    getSpecial(): number;
    setSpecial(value: number): ArticleCreateUpdate;
    getIsCustomPublishedAt(): boolean;
    setIsCustomPublishedAt(value: boolean): ArticleCreateUpdate;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ArticleCreateUpdate;

    hasSeo(): boolean;
    clearSeo(): void;
    getSeo(): ArticleSEO | undefined;
    setSeo(value?: ArticleSEO): ArticleCreateUpdate;
    clearTagIdsList(): void;
    getTagIdsList(): Array<number>;
    setTagIdsList(value: Array<number>): ArticleCreateUpdate;
    addTagIds(value: number, index?: number): number;
    clearCreditsList(): void;
    getCreditsList(): Array<ArticleCreditCreateUpdate>;
    setCreditsList(value: Array<ArticleCreditCreateUpdate>): ArticleCreateUpdate;
    addCredits(value?: ArticleCreditCreateUpdate, index?: number): ArticleCreditCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleCreateUpdate): ArticleCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleCreateUpdate;
    static deserializeBinaryFromReader(message: ArticleCreateUpdate, reader: jspb.BinaryReader): ArticleCreateUpdate;
}

export namespace ArticleCreateUpdate {
    export type AsObject = {
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        title: string,
        lead: string,
        content: string,
        imageCoverUrl: string,
        imageCoverUrlOriginal: string,
        imageCoverCaption: string,
        imageCoverAlt: string,
        energy: number,
        type: ArticleType,
        status: ArticleStatus,
        sectionHomepage: ArticleSectionHomepage,
        special: number,
        isCustomPublishedAt: boolean,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        seo?: ArticleSEO.AsObject,
        tagIdsList: Array<number>,
        creditsList: Array<ArticleCreditCreateUpdate.AsObject>,
    }
}

export class ArticleGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): ArticleGetOneRequest;
    getSearchBySlug(): string;
    setSearchBySlug(value: string): ArticleGetOneRequest;
    getWithAdminCreated(): boolean;
    setWithAdminCreated(value: boolean): ArticleGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleGetOneRequest): ArticleGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleGetOneRequest;
    static deserializeBinaryFromReader(message: ArticleGetOneRequest, reader: jspb.BinaryReader): ArticleGetOneRequest;
}

export namespace ArticleGetOneRequest {
    export type AsObject = {
        id: number,
        searchBySlug: string,
        withAdminCreated: boolean,
    }
}

export class ArticleGetOneResponse extends jspb.Message { 

    hasArticle(): boolean;
    clearArticle(): void;
    getArticle(): Article | undefined;
    setArticle(value?: Article): ArticleGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleGetOneResponse): ArticleGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleGetOneResponse;
    static deserializeBinaryFromReader(message: ArticleGetOneResponse, reader: jspb.BinaryReader): ArticleGetOneResponse;
}

export namespace ArticleGetOneResponse {
    export type AsObject = {
        article?: Article.AsObject,
    }
}

export class ArticleGetListRequest extends jspb.Message { 
    getStatus(): ArticleStatus;
    setStatus(value: ArticleStatus): ArticleGetListRequest;
    clearStatusMultipleList(): void;
    getStatusMultipleList(): Array<ArticleStatus>;
    setStatusMultipleList(value: Array<ArticleStatus>): ArticleGetListRequest;
    addStatusMultiple(value: ArticleStatus, index?: number): ArticleStatus;
    getType(): ArticleType;
    setType(value: ArticleType): ArticleGetListRequest;
    clearTypesList(): void;
    getTypesList(): Array<ArticleType>;
    setTypesList(value: Array<ArticleType>): ArticleGetListRequest;
    addTypes(value: ArticleType, index?: number): ArticleType;
    getSectionHomepage(): ArticleSectionHomepage;
    setSectionHomepage(value: ArticleSectionHomepage): ArticleGetListRequest;
    getCategoryId1(): number;
    setCategoryId1(value: number): ArticleGetListRequest;
    getCategoryId2(): number;
    setCategoryId2(value: number): ArticleGetListRequest;
    getCategoryId3(): number;
    setCategoryId3(value: number): ArticleGetListRequest;
    getSearch(): string;
    setSearch(value: string): ArticleGetListRequest;
    getAdminId(): number;
    setAdminId(value: number): ArticleGetListRequest;
    getAdminCreatedId(): number;
    setAdminCreatedId(value: number): ArticleGetListRequest;
    getSpecial(): number;
    setSpecial(value: number): ArticleGetListRequest;
    getPage(): number;
    setPage(value: number): ArticleGetListRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): ArticleGetListRequest;
    getWithAdminCreated(): boolean;
    setWithAdminCreated(value: boolean): ArticleGetListRequest;
    getSortBy(): ArticleGetListRequest.Sort;
    setSortBy(value: ArticleGetListRequest.Sort): ArticleGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleGetListRequest): ArticleGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleGetListRequest;
    static deserializeBinaryFromReader(message: ArticleGetListRequest, reader: jspb.BinaryReader): ArticleGetListRequest;
}

export namespace ArticleGetListRequest {
    export type AsObject = {
        status: ArticleStatus,
        statusMultipleList: Array<ArticleStatus>,
        type: ArticleType,
        typesList: Array<ArticleType>,
        sectionHomepage: ArticleSectionHomepage,
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        search: string,
        adminId: number,
        adminCreatedId: number,
        special: number,
        page: number,
        contentPerPage: number,
        withAdminCreated: boolean,
        sortBy: ArticleGetListRequest.Sort,
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

export class ArticleGetListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Article>;
    setDataList(value: Array<Article>): ArticleGetListResponse;
    addData(value?: Article, index?: number): Article;
    getMaxPage(): number;
    setMaxPage(value: number): ArticleGetListResponse;
    getCount(): number;
    setCount(value: number): ArticleGetListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleGetListResponse): ArticleGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleGetListResponse;
    static deserializeBinaryFromReader(message: ArticleGetListResponse, reader: jspb.BinaryReader): ArticleGetListResponse;
}

export namespace ArticleGetListResponse {
    export type AsObject = {
        dataList: Array<Article.AsObject>,
        maxPage: number,
        count: number,
    }
}

export class ArticleGetListStreamResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Article | undefined;
    setData(value?: Article): ArticleGetListStreamResponse;
    getMaxPage(): number;
    setMaxPage(value: number): ArticleGetListStreamResponse;
    getCount(): number;
    setCount(value: number): ArticleGetListStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleGetListStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleGetListStreamResponse): ArticleGetListStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleGetListStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleGetListStreamResponse;
    static deserializeBinaryFromReader(message: ArticleGetListStreamResponse, reader: jspb.BinaryReader): ArticleGetListStreamResponse;
}

export namespace ArticleGetListStreamResponse {
    export type AsObject = {
        data?: Article.AsObject,
        maxPage: number,
        count: number,
    }
}

export class ArticleCreateRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): ArticleCreateUpdate | undefined;
    setData(value?: ArticleCreateUpdate): ArticleCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleCreateRequest): ArticleCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleCreateRequest;
    static deserializeBinaryFromReader(message: ArticleCreateRequest, reader: jspb.BinaryReader): ArticleCreateRequest;
}

export namespace ArticleCreateRequest {
    export type AsObject = {
        data?: ArticleCreateUpdate.AsObject,
    }
}

export class ArticleCreateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Article | undefined;
    setData(value?: Article): ArticleCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleCreateResponse): ArticleCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleCreateResponse;
    static deserializeBinaryFromReader(message: ArticleCreateResponse, reader: jspb.BinaryReader): ArticleCreateResponse;
}

export namespace ArticleCreateResponse {
    export type AsObject = {
        data?: Article.AsObject,
    }
}

export class ArticleUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): ArticleUpdateRequest;

    hasData(): boolean;
    clearData(): void;
    getData(): ArticleCreateUpdate | undefined;
    setData(value?: ArticleCreateUpdate): ArticleUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleUpdateRequest): ArticleUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleUpdateRequest;
    static deserializeBinaryFromReader(message: ArticleUpdateRequest, reader: jspb.BinaryReader): ArticleUpdateRequest;
}

export namespace ArticleUpdateRequest {
    export type AsObject = {
        id: number,
        data?: ArticleCreateUpdate.AsObject,
    }
}

export class ArticleUpdateResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Article | undefined;
    setData(value?: Article): ArticleUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleUpdateResponse): ArticleUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleUpdateResponse;
    static deserializeBinaryFromReader(message: ArticleUpdateResponse, reader: jspb.BinaryReader): ArticleUpdateResponse;
}

export namespace ArticleUpdateResponse {
    export type AsObject = {
        data?: Article.AsObject,
    }
}

export class ArticleDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): ArticleDeleteRequest;
    getSoftDelete(): boolean;
    setSoftDelete(value: boolean): ArticleDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleDeleteRequest): ArticleDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleDeleteRequest;
    static deserializeBinaryFromReader(message: ArticleDeleteRequest, reader: jspb.BinaryReader): ArticleDeleteRequest;
}

export namespace ArticleDeleteRequest {
    export type AsObject = {
        id: number,
        softDelete: boolean,
    }
}

export class ArticleDeleteResponse extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): Article | undefined;
    setData(value?: Article): ArticleDeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArticleDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ArticleDeleteResponse): ArticleDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArticleDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArticleDeleteResponse;
    static deserializeBinaryFromReader(message: ArticleDeleteResponse, reader: jspb.BinaryReader): ArticleDeleteResponse;
}

export namespace ArticleDeleteResponse {
    export type AsObject = {
        data?: Article.AsObject,
    }
}

export enum ArticleStatus {
    ALL_UNSPECIFIED = 0,
    DRAFT = 1,
    TRASH = 2,
    PUBLISH = 3,
    COMING_SOON = 4,
}

export enum ArticleType {
    ARTICLE_TYPE_ARTICLE_UNSPECIFIED = 0,
    ARTICLE_TYPE_POLITIK_INDONESIA = 6,
    ARTICLE_TYPE_ANALISIS = 7,
    ARTICLE_TYPE_OPINI = 8,
    ARTICLE_TYPE_SEJARAH = 9,
    ARTICLE_TYPE_BELAJAR_POLITIK = 10,
    ARTICLE_TYPE_MILITER = 11,
    ARTICLE_TYPE_LISTICLE = 13,
    ARTICLE_TYPE_NEWS = 14,
    ARTICLE_TYPE_IN_DEPTH = 15,
    ARTICLE_TYPE_EDITORIAL = 16,
    ARTICLE_TYPE_INFOGRAFIK = 3,
    ARTICLE_TYPE_BERITA_VIDEO = 2,
    ARTICLE_TYPE_INTERUPSI = 5,
    ARTICLE_TYPE_BERITA_FOTO = 1,
    ARTICLE_TYPE_CEK_FAKTA = 4,
    ARTICLE_TYPE_ALL = 12,
}

export enum ArticleSectionHomepage {
    ARTICLE_SECTION_HOMEPAGE_ALL_UNSPECIFIED = 0,
    ARTICLE_SECTION_HOMEPAGE_NONE = 1,
    ARTICLE_SECTION_HOMEPAGE_SPECIAL_ISSUE = 2,
    ARTICLE_SECTION_HOMEPAGE_BERITA_INTERNASIONAL = 3,
    ARTICLE_SECTION_HOMEPAGE_INDONESIA_DIMATA_DUNIA = 4,
    ARTICLE_SECTION_HOMEPAGE_HEADLINE = 5,
    ARTICLE_SECTION_HOMEPAGE_BERITA_PILIHAN = 6,
}

export enum ArticleCreditRole {
    ARTICLE_CREDIT_ROLE_PENULIS_UNSPECIFIED = 0,
    ARTICLE_CREDIT_ROLE_PENERJEMAH = 1,
    ARTICLE_CREDIT_ROLE_PHOTOGRAFER = 2,
    ARTICLE_CREDIT_ROLE_DESAINER_GRAFIS = 3,
    ARTICLE_CREDIT_ROLE_EDITOR = 4,
    ARTICLE_CREDIT_ROLE_SUARA = 5,
    ARTICLE_CREDIT_ROLE_VIDEOGRAFER = 6,
}
