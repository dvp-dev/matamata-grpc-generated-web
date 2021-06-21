// package: contents.v1
// file: contents/v1/contents_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as contents_v1_contents_service_pb from "../../contents/v1/contents_service_pb";
import * as contents_v1_tag_pb from "../../contents/v1/tag_pb";
import * as contents_v1_category_pb from "../../contents/v1/category_pb";
import * as contents_v1_article_pb from "../../contents/v1/article_pb";

interface IContentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    tagGetOne: IContentServiceService_ITagGetOne;
    tagGetMultiple: IContentServiceService_ITagGetMultiple;
    tagCreate: IContentServiceService_ITagCreate;
    tagUpdate: IContentServiceService_ITagUpdate;
    tagDelete: IContentServiceService_ITagDelete;
    category1GetOne: IContentServiceService_ICategory1GetOne;
    category2GetOne: IContentServiceService_ICategory2GetOne;
    category3GetOne: IContentServiceService_ICategory3GetOne;
    category1GetMultiple: IContentServiceService_ICategory1GetMultiple;
    category2GetMultiple: IContentServiceService_ICategory2GetMultiple;
    category3GetMultiple: IContentServiceService_ICategory3GetMultiple;
    category1Create: IContentServiceService_ICategory1Create;
    category2Create: IContentServiceService_ICategory2Create;
    category3Create: IContentServiceService_ICategory3Create;
    category1Update: IContentServiceService_ICategory1Update;
    category2Update: IContentServiceService_ICategory2Update;
    category3Update: IContentServiceService_ICategory3Update;
    category1Delete: IContentServiceService_ICategory1Delete;
    category2Delete: IContentServiceService_ICategory2Delete;
    category3Delete: IContentServiceService_ICategory3Delete;
    articleGetOne: IContentServiceService_IArticleGetOne;
    articleGetList: IContentServiceService_IArticleGetList;
    articleCreate: IContentServiceService_IArticleCreate;
    articleUpdate: IContentServiceService_IArticleUpdate;
    articleDelete: IContentServiceService_IArticleDelete;
}

interface IContentServiceService_ITagGetOne extends grpc.MethodDefinition<contents_v1_tag_pb.TagGetOneRequest, contents_v1_tag_pb.TagGetOneResponse> {
    path: "/contents.v1.ContentService/TagGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_tag_pb.TagGetOneRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_tag_pb.TagGetOneRequest>;
    responseSerialize: grpc.serialize<contents_v1_tag_pb.TagGetOneResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_tag_pb.TagGetOneResponse>;
}
interface IContentServiceService_ITagGetMultiple extends grpc.MethodDefinition<contents_v1_tag_pb.TagGetMultipleRequest, contents_v1_tag_pb.TagGetMultipleResponse> {
    path: "/contents.v1.ContentService/TagGetMultiple";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_tag_pb.TagGetMultipleRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_tag_pb.TagGetMultipleRequest>;
    responseSerialize: grpc.serialize<contents_v1_tag_pb.TagGetMultipleResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_tag_pb.TagGetMultipleResponse>;
}
interface IContentServiceService_ITagCreate extends grpc.MethodDefinition<contents_v1_tag_pb.TagCreateRequest, contents_v1_tag_pb.TagCreateResponse> {
    path: "/contents.v1.ContentService/TagCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_tag_pb.TagCreateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_tag_pb.TagCreateRequest>;
    responseSerialize: grpc.serialize<contents_v1_tag_pb.TagCreateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_tag_pb.TagCreateResponse>;
}
interface IContentServiceService_ITagUpdate extends grpc.MethodDefinition<contents_v1_tag_pb.TagUpdateRequest, contents_v1_tag_pb.TagUpdateResponse> {
    path: "/contents.v1.ContentService/TagUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_tag_pb.TagUpdateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_tag_pb.TagUpdateRequest>;
    responseSerialize: grpc.serialize<contents_v1_tag_pb.TagUpdateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_tag_pb.TagUpdateResponse>;
}
interface IContentServiceService_ITagDelete extends grpc.MethodDefinition<contents_v1_tag_pb.TagDeleteRequest, contents_v1_tag_pb.TagDeleteResponse> {
    path: "/contents.v1.ContentService/TagDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_tag_pb.TagDeleteRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_tag_pb.TagDeleteRequest>;
    responseSerialize: grpc.serialize<contents_v1_tag_pb.TagDeleteResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_tag_pb.TagDeleteResponse>;
}
interface IContentServiceService_ICategory1GetOne extends grpc.MethodDefinition<contents_v1_category_pb.Category1GetOneRequest, contents_v1_category_pb.Category1GetOneResponse> {
    path: "/contents.v1.ContentService/Category1GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category1GetOneRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category1GetOneRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category1GetOneResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category1GetOneResponse>;
}
interface IContentServiceService_ICategory2GetOne extends grpc.MethodDefinition<contents_v1_category_pb.Category2GetOneRequest, contents_v1_category_pb.Category2GetOneResponse> {
    path: "/contents.v1.ContentService/Category2GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category2GetOneRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category2GetOneRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category2GetOneResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category2GetOneResponse>;
}
interface IContentServiceService_ICategory3GetOne extends grpc.MethodDefinition<contents_v1_category_pb.Category3GetOneRequest, contents_v1_category_pb.Category3GetOneResponse> {
    path: "/contents.v1.ContentService/Category3GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category3GetOneRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category3GetOneRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category3GetOneResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category3GetOneResponse>;
}
interface IContentServiceService_ICategory1GetMultiple extends grpc.MethodDefinition<contents_v1_category_pb.Category1GetMultipleRequest, contents_v1_category_pb.Category1GetMultipleResponse> {
    path: "/contents.v1.ContentService/Category1GetMultiple";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category1GetMultipleRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category1GetMultipleRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category1GetMultipleResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category1GetMultipleResponse>;
}
interface IContentServiceService_ICategory2GetMultiple extends grpc.MethodDefinition<contents_v1_category_pb.Category2GetMultipleRequest, contents_v1_category_pb.Category2GetMultipleResponse> {
    path: "/contents.v1.ContentService/Category2GetMultiple";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category2GetMultipleRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category2GetMultipleRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category2GetMultipleResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category2GetMultipleResponse>;
}
interface IContentServiceService_ICategory3GetMultiple extends grpc.MethodDefinition<contents_v1_category_pb.Category3GetMultipleRequest, contents_v1_category_pb.Category3GetMultipleResponse> {
    path: "/contents.v1.ContentService/Category3GetMultiple";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category3GetMultipleRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category3GetMultipleRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category3GetMultipleResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category3GetMultipleResponse>;
}
interface IContentServiceService_ICategory1Create extends grpc.MethodDefinition<contents_v1_category_pb.Category1CreateRequest, contents_v1_category_pb.Category1CreateResponse> {
    path: "/contents.v1.ContentService/Category1Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category1CreateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category1CreateRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category1CreateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category1CreateResponse>;
}
interface IContentServiceService_ICategory2Create extends grpc.MethodDefinition<contents_v1_category_pb.Category2CreateRequest, contents_v1_category_pb.Category2CreateResponse> {
    path: "/contents.v1.ContentService/Category2Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category2CreateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category2CreateRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category2CreateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category2CreateResponse>;
}
interface IContentServiceService_ICategory3Create extends grpc.MethodDefinition<contents_v1_category_pb.Category3CreateRequest, contents_v1_category_pb.Category3CreateResponse> {
    path: "/contents.v1.ContentService/Category3Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category3CreateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category3CreateRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category3CreateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category3CreateResponse>;
}
interface IContentServiceService_ICategory1Update extends grpc.MethodDefinition<contents_v1_category_pb.Category1UpdateRequest, contents_v1_category_pb.Category1UpdateResponse> {
    path: "/contents.v1.ContentService/Category1Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category1UpdateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category1UpdateRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category1UpdateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category1UpdateResponse>;
}
interface IContentServiceService_ICategory2Update extends grpc.MethodDefinition<contents_v1_category_pb.Category2UpdateRequest, contents_v1_category_pb.Category2UpdateResponse> {
    path: "/contents.v1.ContentService/Category2Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category2UpdateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category2UpdateRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category2UpdateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category2UpdateResponse>;
}
interface IContentServiceService_ICategory3Update extends grpc.MethodDefinition<contents_v1_category_pb.Category3UpdateRequest, contents_v1_category_pb.Category3UpdateResponse> {
    path: "/contents.v1.ContentService/Category3Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category3UpdateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category3UpdateRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category3UpdateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category3UpdateResponse>;
}
interface IContentServiceService_ICategory1Delete extends grpc.MethodDefinition<contents_v1_category_pb.Category1DeleteRequest, contents_v1_category_pb.Category1DeleteResponse> {
    path: "/contents.v1.ContentService/Category1Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category1DeleteRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category1DeleteRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category1DeleteResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category1DeleteResponse>;
}
interface IContentServiceService_ICategory2Delete extends grpc.MethodDefinition<contents_v1_category_pb.Category2DeleteRequest, contents_v1_category_pb.Category2DeleteResponse> {
    path: "/contents.v1.ContentService/Category2Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category2DeleteRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category2DeleteRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category2DeleteResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category2DeleteResponse>;
}
interface IContentServiceService_ICategory3Delete extends grpc.MethodDefinition<contents_v1_category_pb.Category3DeleteRequest, contents_v1_category_pb.Category3DeleteResponse> {
    path: "/contents.v1.ContentService/Category3Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_category_pb.Category3DeleteRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_category_pb.Category3DeleteRequest>;
    responseSerialize: grpc.serialize<contents_v1_category_pb.Category3DeleteResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_category_pb.Category3DeleteResponse>;
}
interface IContentServiceService_IArticleGetOne extends grpc.MethodDefinition<contents_v1_article_pb.ArticleGetOneRequest, contents_v1_article_pb.ArticleGetOneResponse> {
    path: "/contents.v1.ContentService/ArticleGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_article_pb.ArticleGetOneRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleGetOneRequest>;
    responseSerialize: grpc.serialize<contents_v1_article_pb.ArticleGetOneResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleGetOneResponse>;
}
interface IContentServiceService_IArticleGetList extends grpc.MethodDefinition<contents_v1_article_pb.ArticleGetListRequest, contents_v1_article_pb.ArticleGetListResponse> {
    path: "/contents.v1.ContentService/ArticleGetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_article_pb.ArticleGetListRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleGetListRequest>;
    responseSerialize: grpc.serialize<contents_v1_article_pb.ArticleGetListResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleGetListResponse>;
}
interface IContentServiceService_IArticleCreate extends grpc.MethodDefinition<contents_v1_article_pb.ArticleCreateRequest, contents_v1_article_pb.ArticleCreateResponse> {
    path: "/contents.v1.ContentService/ArticleCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_article_pb.ArticleCreateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleCreateRequest>;
    responseSerialize: grpc.serialize<contents_v1_article_pb.ArticleCreateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleCreateResponse>;
}
interface IContentServiceService_IArticleUpdate extends grpc.MethodDefinition<contents_v1_article_pb.ArticleUpdateRequest, contents_v1_article_pb.ArticleUpdateResponse> {
    path: "/contents.v1.ContentService/ArticleUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_article_pb.ArticleUpdateRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleUpdateRequest>;
    responseSerialize: grpc.serialize<contents_v1_article_pb.ArticleUpdateResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleUpdateResponse>;
}
interface IContentServiceService_IArticleDelete extends grpc.MethodDefinition<contents_v1_article_pb.ArticleDeleteRequest, contents_v1_article_pb.ArticleDeleteResponse> {
    path: "/contents.v1.ContentService/ArticleDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contents_v1_article_pb.ArticleDeleteRequest>;
    requestDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleDeleteRequest>;
    responseSerialize: grpc.serialize<contents_v1_article_pb.ArticleDeleteResponse>;
    responseDeserialize: grpc.deserialize<contents_v1_article_pb.ArticleDeleteResponse>;
}

export const ContentServiceService: IContentServiceService;

export interface IContentServiceServer extends grpc.UntypedServiceImplementation {
    tagGetOne: grpc.handleUnaryCall<contents_v1_tag_pb.TagGetOneRequest, contents_v1_tag_pb.TagGetOneResponse>;
    tagGetMultiple: grpc.handleUnaryCall<contents_v1_tag_pb.TagGetMultipleRequest, contents_v1_tag_pb.TagGetMultipleResponse>;
    tagCreate: grpc.handleUnaryCall<contents_v1_tag_pb.TagCreateRequest, contents_v1_tag_pb.TagCreateResponse>;
    tagUpdate: grpc.handleUnaryCall<contents_v1_tag_pb.TagUpdateRequest, contents_v1_tag_pb.TagUpdateResponse>;
    tagDelete: grpc.handleUnaryCall<contents_v1_tag_pb.TagDeleteRequest, contents_v1_tag_pb.TagDeleteResponse>;
    category1GetOne: grpc.handleUnaryCall<contents_v1_category_pb.Category1GetOneRequest, contents_v1_category_pb.Category1GetOneResponse>;
    category2GetOne: grpc.handleUnaryCall<contents_v1_category_pb.Category2GetOneRequest, contents_v1_category_pb.Category2GetOneResponse>;
    category3GetOne: grpc.handleUnaryCall<contents_v1_category_pb.Category3GetOneRequest, contents_v1_category_pb.Category3GetOneResponse>;
    category1GetMultiple: grpc.handleUnaryCall<contents_v1_category_pb.Category1GetMultipleRequest, contents_v1_category_pb.Category1GetMultipleResponse>;
    category2GetMultiple: grpc.handleUnaryCall<contents_v1_category_pb.Category2GetMultipleRequest, contents_v1_category_pb.Category2GetMultipleResponse>;
    category3GetMultiple: grpc.handleUnaryCall<contents_v1_category_pb.Category3GetMultipleRequest, contents_v1_category_pb.Category3GetMultipleResponse>;
    category1Create: grpc.handleUnaryCall<contents_v1_category_pb.Category1CreateRequest, contents_v1_category_pb.Category1CreateResponse>;
    category2Create: grpc.handleUnaryCall<contents_v1_category_pb.Category2CreateRequest, contents_v1_category_pb.Category2CreateResponse>;
    category3Create: grpc.handleUnaryCall<contents_v1_category_pb.Category3CreateRequest, contents_v1_category_pb.Category3CreateResponse>;
    category1Update: grpc.handleUnaryCall<contents_v1_category_pb.Category1UpdateRequest, contents_v1_category_pb.Category1UpdateResponse>;
    category2Update: grpc.handleUnaryCall<contents_v1_category_pb.Category2UpdateRequest, contents_v1_category_pb.Category2UpdateResponse>;
    category3Update: grpc.handleUnaryCall<contents_v1_category_pb.Category3UpdateRequest, contents_v1_category_pb.Category3UpdateResponse>;
    category1Delete: grpc.handleUnaryCall<contents_v1_category_pb.Category1DeleteRequest, contents_v1_category_pb.Category1DeleteResponse>;
    category2Delete: grpc.handleUnaryCall<contents_v1_category_pb.Category2DeleteRequest, contents_v1_category_pb.Category2DeleteResponse>;
    category3Delete: grpc.handleUnaryCall<contents_v1_category_pb.Category3DeleteRequest, contents_v1_category_pb.Category3DeleteResponse>;
    articleGetOne: grpc.handleUnaryCall<contents_v1_article_pb.ArticleGetOneRequest, contents_v1_article_pb.ArticleGetOneResponse>;
    articleGetList: grpc.handleUnaryCall<contents_v1_article_pb.ArticleGetListRequest, contents_v1_article_pb.ArticleGetListResponse>;
    articleCreate: grpc.handleUnaryCall<contents_v1_article_pb.ArticleCreateRequest, contents_v1_article_pb.ArticleCreateResponse>;
    articleUpdate: grpc.handleUnaryCall<contents_v1_article_pb.ArticleUpdateRequest, contents_v1_article_pb.ArticleUpdateResponse>;
    articleDelete: grpc.handleUnaryCall<contents_v1_article_pb.ArticleDeleteRequest, contents_v1_article_pb.ArticleDeleteResponse>;
}

export interface IContentServiceClient {
    tagGetOne(request: contents_v1_tag_pb.TagGetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetOneResponse) => void): grpc.ClientUnaryCall;
    tagGetOne(request: contents_v1_tag_pb.TagGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetOneResponse) => void): grpc.ClientUnaryCall;
    tagGetOne(request: contents_v1_tag_pb.TagGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetOneResponse) => void): grpc.ClientUnaryCall;
    tagGetMultiple(request: contents_v1_tag_pb.TagGetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetMultipleResponse) => void): grpc.ClientUnaryCall;
    tagGetMultiple(request: contents_v1_tag_pb.TagGetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetMultipleResponse) => void): grpc.ClientUnaryCall;
    tagGetMultiple(request: contents_v1_tag_pb.TagGetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetMultipleResponse) => void): grpc.ClientUnaryCall;
    tagCreate(request: contents_v1_tag_pb.TagCreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagCreateResponse) => void): grpc.ClientUnaryCall;
    tagCreate(request: contents_v1_tag_pb.TagCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagCreateResponse) => void): grpc.ClientUnaryCall;
    tagCreate(request: contents_v1_tag_pb.TagCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagCreateResponse) => void): grpc.ClientUnaryCall;
    tagUpdate(request: contents_v1_tag_pb.TagUpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagUpdateResponse) => void): grpc.ClientUnaryCall;
    tagUpdate(request: contents_v1_tag_pb.TagUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagUpdateResponse) => void): grpc.ClientUnaryCall;
    tagUpdate(request: contents_v1_tag_pb.TagUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagUpdateResponse) => void): grpc.ClientUnaryCall;
    tagDelete(request: contents_v1_tag_pb.TagDeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagDeleteResponse) => void): grpc.ClientUnaryCall;
    tagDelete(request: contents_v1_tag_pb.TagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagDeleteResponse) => void): grpc.ClientUnaryCall;
    tagDelete(request: contents_v1_tag_pb.TagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagDeleteResponse) => void): grpc.ClientUnaryCall;
    category1GetOne(request: contents_v1_category_pb.Category1GetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetOneResponse) => void): grpc.ClientUnaryCall;
    category1GetOne(request: contents_v1_category_pb.Category1GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetOneResponse) => void): grpc.ClientUnaryCall;
    category1GetOne(request: contents_v1_category_pb.Category1GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetOneResponse) => void): grpc.ClientUnaryCall;
    category2GetOne(request: contents_v1_category_pb.Category2GetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetOneResponse) => void): grpc.ClientUnaryCall;
    category2GetOne(request: contents_v1_category_pb.Category2GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetOneResponse) => void): grpc.ClientUnaryCall;
    category2GetOne(request: contents_v1_category_pb.Category2GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetOneResponse) => void): grpc.ClientUnaryCall;
    category3GetOne(request: contents_v1_category_pb.Category3GetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetOneResponse) => void): grpc.ClientUnaryCall;
    category3GetOne(request: contents_v1_category_pb.Category3GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetOneResponse) => void): grpc.ClientUnaryCall;
    category3GetOne(request: contents_v1_category_pb.Category3GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetOneResponse) => void): grpc.ClientUnaryCall;
    category1GetMultiple(request: contents_v1_category_pb.Category1GetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category1GetMultiple(request: contents_v1_category_pb.Category1GetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category1GetMultiple(request: contents_v1_category_pb.Category1GetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category2GetMultiple(request: contents_v1_category_pb.Category2GetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category2GetMultiple(request: contents_v1_category_pb.Category2GetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category2GetMultiple(request: contents_v1_category_pb.Category2GetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category3GetMultiple(request: contents_v1_category_pb.Category3GetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category3GetMultiple(request: contents_v1_category_pb.Category3GetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category3GetMultiple(request: contents_v1_category_pb.Category3GetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetMultipleResponse) => void): grpc.ClientUnaryCall;
    category1Create(request: contents_v1_category_pb.Category1CreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1CreateResponse) => void): grpc.ClientUnaryCall;
    category1Create(request: contents_v1_category_pb.Category1CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1CreateResponse) => void): grpc.ClientUnaryCall;
    category1Create(request: contents_v1_category_pb.Category1CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1CreateResponse) => void): grpc.ClientUnaryCall;
    category2Create(request: contents_v1_category_pb.Category2CreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2CreateResponse) => void): grpc.ClientUnaryCall;
    category2Create(request: contents_v1_category_pb.Category2CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2CreateResponse) => void): grpc.ClientUnaryCall;
    category2Create(request: contents_v1_category_pb.Category2CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2CreateResponse) => void): grpc.ClientUnaryCall;
    category3Create(request: contents_v1_category_pb.Category3CreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3CreateResponse) => void): grpc.ClientUnaryCall;
    category3Create(request: contents_v1_category_pb.Category3CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3CreateResponse) => void): grpc.ClientUnaryCall;
    category3Create(request: contents_v1_category_pb.Category3CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3CreateResponse) => void): grpc.ClientUnaryCall;
    category1Update(request: contents_v1_category_pb.Category1UpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1UpdateResponse) => void): grpc.ClientUnaryCall;
    category1Update(request: contents_v1_category_pb.Category1UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1UpdateResponse) => void): grpc.ClientUnaryCall;
    category1Update(request: contents_v1_category_pb.Category1UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1UpdateResponse) => void): grpc.ClientUnaryCall;
    category2Update(request: contents_v1_category_pb.Category2UpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2UpdateResponse) => void): grpc.ClientUnaryCall;
    category2Update(request: contents_v1_category_pb.Category2UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2UpdateResponse) => void): grpc.ClientUnaryCall;
    category2Update(request: contents_v1_category_pb.Category2UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2UpdateResponse) => void): grpc.ClientUnaryCall;
    category3Update(request: contents_v1_category_pb.Category3UpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3UpdateResponse) => void): grpc.ClientUnaryCall;
    category3Update(request: contents_v1_category_pb.Category3UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3UpdateResponse) => void): grpc.ClientUnaryCall;
    category3Update(request: contents_v1_category_pb.Category3UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3UpdateResponse) => void): grpc.ClientUnaryCall;
    category1Delete(request: contents_v1_category_pb.Category1DeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1DeleteResponse) => void): grpc.ClientUnaryCall;
    category1Delete(request: contents_v1_category_pb.Category1DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1DeleteResponse) => void): grpc.ClientUnaryCall;
    category1Delete(request: contents_v1_category_pb.Category1DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1DeleteResponse) => void): grpc.ClientUnaryCall;
    category2Delete(request: contents_v1_category_pb.Category2DeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2DeleteResponse) => void): grpc.ClientUnaryCall;
    category2Delete(request: contents_v1_category_pb.Category2DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2DeleteResponse) => void): grpc.ClientUnaryCall;
    category2Delete(request: contents_v1_category_pb.Category2DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2DeleteResponse) => void): grpc.ClientUnaryCall;
    category3Delete(request: contents_v1_category_pb.Category3DeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3DeleteResponse) => void): grpc.ClientUnaryCall;
    category3Delete(request: contents_v1_category_pb.Category3DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3DeleteResponse) => void): grpc.ClientUnaryCall;
    category3Delete(request: contents_v1_category_pb.Category3DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3DeleteResponse) => void): grpc.ClientUnaryCall;
    articleGetOne(request: contents_v1_article_pb.ArticleGetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetOneResponse) => void): grpc.ClientUnaryCall;
    articleGetOne(request: contents_v1_article_pb.ArticleGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetOneResponse) => void): grpc.ClientUnaryCall;
    articleGetOne(request: contents_v1_article_pb.ArticleGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetOneResponse) => void): grpc.ClientUnaryCall;
    articleGetList(request: contents_v1_article_pb.ArticleGetListRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetListResponse) => void): grpc.ClientUnaryCall;
    articleGetList(request: contents_v1_article_pb.ArticleGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetListResponse) => void): grpc.ClientUnaryCall;
    articleGetList(request: contents_v1_article_pb.ArticleGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetListResponse) => void): grpc.ClientUnaryCall;
    articleCreate(request: contents_v1_article_pb.ArticleCreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleCreateResponse) => void): grpc.ClientUnaryCall;
    articleCreate(request: contents_v1_article_pb.ArticleCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleCreateResponse) => void): grpc.ClientUnaryCall;
    articleCreate(request: contents_v1_article_pb.ArticleCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleCreateResponse) => void): grpc.ClientUnaryCall;
    articleUpdate(request: contents_v1_article_pb.ArticleUpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleUpdateResponse) => void): grpc.ClientUnaryCall;
    articleUpdate(request: contents_v1_article_pb.ArticleUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleUpdateResponse) => void): grpc.ClientUnaryCall;
    articleUpdate(request: contents_v1_article_pb.ArticleUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleUpdateResponse) => void): grpc.ClientUnaryCall;
    articleDelete(request: contents_v1_article_pb.ArticleDeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleDeleteResponse) => void): grpc.ClientUnaryCall;
    articleDelete(request: contents_v1_article_pb.ArticleDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleDeleteResponse) => void): grpc.ClientUnaryCall;
    articleDelete(request: contents_v1_article_pb.ArticleDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class ContentServiceClient extends grpc.Client implements IContentServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public tagGetOne(request: contents_v1_tag_pb.TagGetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetOneResponse) => void): grpc.ClientUnaryCall;
    public tagGetOne(request: contents_v1_tag_pb.TagGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetOneResponse) => void): grpc.ClientUnaryCall;
    public tagGetOne(request: contents_v1_tag_pb.TagGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetOneResponse) => void): grpc.ClientUnaryCall;
    public tagGetMultiple(request: contents_v1_tag_pb.TagGetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetMultipleResponse) => void): grpc.ClientUnaryCall;
    public tagGetMultiple(request: contents_v1_tag_pb.TagGetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetMultipleResponse) => void): grpc.ClientUnaryCall;
    public tagGetMultiple(request: contents_v1_tag_pb.TagGetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagGetMultipleResponse) => void): grpc.ClientUnaryCall;
    public tagCreate(request: contents_v1_tag_pb.TagCreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagCreateResponse) => void): grpc.ClientUnaryCall;
    public tagCreate(request: contents_v1_tag_pb.TagCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagCreateResponse) => void): grpc.ClientUnaryCall;
    public tagCreate(request: contents_v1_tag_pb.TagCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagCreateResponse) => void): grpc.ClientUnaryCall;
    public tagUpdate(request: contents_v1_tag_pb.TagUpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagUpdateResponse) => void): grpc.ClientUnaryCall;
    public tagUpdate(request: contents_v1_tag_pb.TagUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagUpdateResponse) => void): grpc.ClientUnaryCall;
    public tagUpdate(request: contents_v1_tag_pb.TagUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagUpdateResponse) => void): grpc.ClientUnaryCall;
    public tagDelete(request: contents_v1_tag_pb.TagDeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagDeleteResponse) => void): grpc.ClientUnaryCall;
    public tagDelete(request: contents_v1_tag_pb.TagDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagDeleteResponse) => void): grpc.ClientUnaryCall;
    public tagDelete(request: contents_v1_tag_pb.TagDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_tag_pb.TagDeleteResponse) => void): grpc.ClientUnaryCall;
    public category1GetOne(request: contents_v1_category_pb.Category1GetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetOneResponse) => void): grpc.ClientUnaryCall;
    public category1GetOne(request: contents_v1_category_pb.Category1GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetOneResponse) => void): grpc.ClientUnaryCall;
    public category1GetOne(request: contents_v1_category_pb.Category1GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetOneResponse) => void): grpc.ClientUnaryCall;
    public category2GetOne(request: contents_v1_category_pb.Category2GetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetOneResponse) => void): grpc.ClientUnaryCall;
    public category2GetOne(request: contents_v1_category_pb.Category2GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetOneResponse) => void): grpc.ClientUnaryCall;
    public category2GetOne(request: contents_v1_category_pb.Category2GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetOneResponse) => void): grpc.ClientUnaryCall;
    public category3GetOne(request: contents_v1_category_pb.Category3GetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetOneResponse) => void): grpc.ClientUnaryCall;
    public category3GetOne(request: contents_v1_category_pb.Category3GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetOneResponse) => void): grpc.ClientUnaryCall;
    public category3GetOne(request: contents_v1_category_pb.Category3GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetOneResponse) => void): grpc.ClientUnaryCall;
    public category1GetMultiple(request: contents_v1_category_pb.Category1GetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category1GetMultiple(request: contents_v1_category_pb.Category1GetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category1GetMultiple(request: contents_v1_category_pb.Category1GetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category2GetMultiple(request: contents_v1_category_pb.Category2GetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category2GetMultiple(request: contents_v1_category_pb.Category2GetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category2GetMultiple(request: contents_v1_category_pb.Category2GetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category3GetMultiple(request: contents_v1_category_pb.Category3GetMultipleRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category3GetMultiple(request: contents_v1_category_pb.Category3GetMultipleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category3GetMultiple(request: contents_v1_category_pb.Category3GetMultipleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3GetMultipleResponse) => void): grpc.ClientUnaryCall;
    public category1Create(request: contents_v1_category_pb.Category1CreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1CreateResponse) => void): grpc.ClientUnaryCall;
    public category1Create(request: contents_v1_category_pb.Category1CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1CreateResponse) => void): grpc.ClientUnaryCall;
    public category1Create(request: contents_v1_category_pb.Category1CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1CreateResponse) => void): grpc.ClientUnaryCall;
    public category2Create(request: contents_v1_category_pb.Category2CreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2CreateResponse) => void): grpc.ClientUnaryCall;
    public category2Create(request: contents_v1_category_pb.Category2CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2CreateResponse) => void): grpc.ClientUnaryCall;
    public category2Create(request: contents_v1_category_pb.Category2CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2CreateResponse) => void): grpc.ClientUnaryCall;
    public category3Create(request: contents_v1_category_pb.Category3CreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3CreateResponse) => void): grpc.ClientUnaryCall;
    public category3Create(request: contents_v1_category_pb.Category3CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3CreateResponse) => void): grpc.ClientUnaryCall;
    public category3Create(request: contents_v1_category_pb.Category3CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3CreateResponse) => void): grpc.ClientUnaryCall;
    public category1Update(request: contents_v1_category_pb.Category1UpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1UpdateResponse) => void): grpc.ClientUnaryCall;
    public category1Update(request: contents_v1_category_pb.Category1UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1UpdateResponse) => void): grpc.ClientUnaryCall;
    public category1Update(request: contents_v1_category_pb.Category1UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1UpdateResponse) => void): grpc.ClientUnaryCall;
    public category2Update(request: contents_v1_category_pb.Category2UpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2UpdateResponse) => void): grpc.ClientUnaryCall;
    public category2Update(request: contents_v1_category_pb.Category2UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2UpdateResponse) => void): grpc.ClientUnaryCall;
    public category2Update(request: contents_v1_category_pb.Category2UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2UpdateResponse) => void): grpc.ClientUnaryCall;
    public category3Update(request: contents_v1_category_pb.Category3UpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3UpdateResponse) => void): grpc.ClientUnaryCall;
    public category3Update(request: contents_v1_category_pb.Category3UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3UpdateResponse) => void): grpc.ClientUnaryCall;
    public category3Update(request: contents_v1_category_pb.Category3UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3UpdateResponse) => void): grpc.ClientUnaryCall;
    public category1Delete(request: contents_v1_category_pb.Category1DeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1DeleteResponse) => void): grpc.ClientUnaryCall;
    public category1Delete(request: contents_v1_category_pb.Category1DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1DeleteResponse) => void): grpc.ClientUnaryCall;
    public category1Delete(request: contents_v1_category_pb.Category1DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category1DeleteResponse) => void): grpc.ClientUnaryCall;
    public category2Delete(request: contents_v1_category_pb.Category2DeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2DeleteResponse) => void): grpc.ClientUnaryCall;
    public category2Delete(request: contents_v1_category_pb.Category2DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2DeleteResponse) => void): grpc.ClientUnaryCall;
    public category2Delete(request: contents_v1_category_pb.Category2DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category2DeleteResponse) => void): grpc.ClientUnaryCall;
    public category3Delete(request: contents_v1_category_pb.Category3DeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3DeleteResponse) => void): grpc.ClientUnaryCall;
    public category3Delete(request: contents_v1_category_pb.Category3DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3DeleteResponse) => void): grpc.ClientUnaryCall;
    public category3Delete(request: contents_v1_category_pb.Category3DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_category_pb.Category3DeleteResponse) => void): grpc.ClientUnaryCall;
    public articleGetOne(request: contents_v1_article_pb.ArticleGetOneRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetOneResponse) => void): grpc.ClientUnaryCall;
    public articleGetOne(request: contents_v1_article_pb.ArticleGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetOneResponse) => void): grpc.ClientUnaryCall;
    public articleGetOne(request: contents_v1_article_pb.ArticleGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetOneResponse) => void): grpc.ClientUnaryCall;
    public articleGetList(request: contents_v1_article_pb.ArticleGetListRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetListResponse) => void): grpc.ClientUnaryCall;
    public articleGetList(request: contents_v1_article_pb.ArticleGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetListResponse) => void): grpc.ClientUnaryCall;
    public articleGetList(request: contents_v1_article_pb.ArticleGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleGetListResponse) => void): grpc.ClientUnaryCall;
    public articleCreate(request: contents_v1_article_pb.ArticleCreateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleCreateResponse) => void): grpc.ClientUnaryCall;
    public articleCreate(request: contents_v1_article_pb.ArticleCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleCreateResponse) => void): grpc.ClientUnaryCall;
    public articleCreate(request: contents_v1_article_pb.ArticleCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleCreateResponse) => void): grpc.ClientUnaryCall;
    public articleUpdate(request: contents_v1_article_pb.ArticleUpdateRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleUpdateResponse) => void): grpc.ClientUnaryCall;
    public articleUpdate(request: contents_v1_article_pb.ArticleUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleUpdateResponse) => void): grpc.ClientUnaryCall;
    public articleUpdate(request: contents_v1_article_pb.ArticleUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleUpdateResponse) => void): grpc.ClientUnaryCall;
    public articleDelete(request: contents_v1_article_pb.ArticleDeleteRequest, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleDeleteResponse) => void): grpc.ClientUnaryCall;
    public articleDelete(request: contents_v1_article_pb.ArticleDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleDeleteResponse) => void): grpc.ClientUnaryCall;
    public articleDelete(request: contents_v1_article_pb.ArticleDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contents_v1_article_pb.ArticleDeleteResponse) => void): grpc.ClientUnaryCall;
}
