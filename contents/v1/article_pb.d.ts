// package: contents.v1
// file: contents/v1/article.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as admin_v1_admin_pb from "../../admin/v1/admin_pb";
import * as contents_v1_tag_pb from "../../contents/v1/tag_pb";
import * as contents_v1_category_pb from "../../contents/v1/category_pb";

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
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): Article;
    getSlug(): string;
    setSlug(value: string): Article;
    getStatus(): ArticleStatus;
    setStatus(value: ArticleStatus): Article;
    getSectionHomepage(): ArticleSectionHomepage;
    setSectionHomepage(value: ArticleSectionHomepage): Article;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Article;
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
    clearCreditsList(): void;
    getCreditsList(): Array<Article.ArticleCredit>;
    setCreditsList(value: Array<Article.ArticleCredit>): Article;
    addCredits(value?: Article.ArticleCredit, index?: number): Article.ArticleCredit;

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
        imageCoverCaption: string,
        slug: string,
        status: ArticleStatus,
        sectionHomepage: ArticleSectionHomepage,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        tagsList: Array<contents_v1_tag_pb.Tag.AsObject>,
        category1?: contents_v1_category_pb.Category1.AsObject,
        category2?: contents_v1_category_pb.Category2.AsObject,
        category3?: contents_v1_category_pb.Category3.AsObject,
        creditsList: Array<Article.ArticleCredit.AsObject>,
    }


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
    getImageCoverCaption(): string;
    setImageCoverCaption(value: string): ArticleCreateUpdate;
    getStatus(): ArticleStatus;
    setStatus(value: ArticleStatus): ArticleCreateUpdate;
    getSectionHomepage(): ArticleSectionHomepage;
    setSectionHomepage(value: ArticleSectionHomepage): ArticleCreateUpdate;
    clearTagIdsList(): void;
    getTagIdsList(): Array<number>;
    setTagIdsList(value: Array<number>): ArticleCreateUpdate;
    addTagIds(value: number, index?: number): number;

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
        imageCoverCaption: string,
        status: ArticleStatus,
        sectionHomepage: ArticleSectionHomepage,
        tagIdsList: Array<number>,
    }
}

export class ArticleGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): ArticleGetOneRequest;
    getSearchBySlug(): string;
    setSearchBySlug(value: string): ArticleGetOneRequest;

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
    getPage(): number;
    setPage(value: number): ArticleGetListRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): ArticleGetListRequest;
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
        sectionHomepage: ArticleSectionHomepage,
        categoryId1: number,
        categoryId2: number,
        categoryId3: number,
        search: string,
        page: number,
        contentPerPage: number,
        sortBy: ArticleGetListRequest.Sort,
    }

    export enum Sort {
    TITLE_ASCENDING_UNSPECIFIED = 0,
    TITLE_DESCENDING = 1,
    LATEST = 2,
    NEWEST = 3,
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
}
