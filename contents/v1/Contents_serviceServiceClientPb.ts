/**
 * @fileoverview gRPC-Web generated client stub for contents.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as contents_v1_tag_pb from '../../contents/v1/tag_pb';
import * as contents_v1_category_pb from '../../contents/v1/category_pb';
import * as contents_v1_article_pb from '../../contents/v1/article_pb';


export class ContentServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoTagGetOne = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_tag_pb.TagGetOneResponse,
    (request: contents_v1_tag_pb.TagGetOneRequest) => {
      return request.serializeBinary();
    },
    contents_v1_tag_pb.TagGetOneResponse.deserializeBinary
  );

  tagGetOne(
    request: contents_v1_tag_pb.TagGetOneRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_tag_pb.TagGetOneResponse>;

  tagGetOne(
    request: contents_v1_tag_pb.TagGetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagGetOneResponse) => void): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagGetOneResponse>;

  tagGetOne(
    request: contents_v1_tag_pb.TagGetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagGetOneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/TagGetOne',
        request,
        metadata || {},
        this.methodInfoTagGetOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/TagGetOne',
    request,
    metadata || {},
    this.methodInfoTagGetOne);
  }

  methodInfoTagGetMultiple = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_tag_pb.TagGetMultipleResponse,
    (request: contents_v1_tag_pb.TagGetMultipleRequest) => {
      return request.serializeBinary();
    },
    contents_v1_tag_pb.TagGetMultipleResponse.deserializeBinary
  );

  tagGetMultiple(
    request: contents_v1_tag_pb.TagGetMultipleRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_tag_pb.TagGetMultipleResponse>;

  tagGetMultiple(
    request: contents_v1_tag_pb.TagGetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagGetMultipleResponse) => void): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagGetMultipleResponse>;

  tagGetMultiple(
    request: contents_v1_tag_pb.TagGetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagGetMultipleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/TagGetMultiple',
        request,
        metadata || {},
        this.methodInfoTagGetMultiple,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/TagGetMultiple',
    request,
    metadata || {},
    this.methodInfoTagGetMultiple);
  }

  methodInfoTagCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_tag_pb.TagCreateResponse,
    (request: contents_v1_tag_pb.TagCreateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_tag_pb.TagCreateResponse.deserializeBinary
  );

  tagCreate(
    request: contents_v1_tag_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_tag_pb.TagCreateResponse>;

  tagCreate(
    request: contents_v1_tag_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagCreateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagCreateResponse>;

  tagCreate(
    request: contents_v1_tag_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/TagCreate',
        request,
        metadata || {},
        this.methodInfoTagCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/TagCreate',
    request,
    metadata || {},
    this.methodInfoTagCreate);
  }

  methodInfoTagUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_tag_pb.TagUpdateResponse,
    (request: contents_v1_tag_pb.TagUpdateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_tag_pb.TagUpdateResponse.deserializeBinary
  );

  tagUpdate(
    request: contents_v1_tag_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_tag_pb.TagUpdateResponse>;

  tagUpdate(
    request: contents_v1_tag_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagUpdateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagUpdateResponse>;

  tagUpdate(
    request: contents_v1_tag_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagUpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/TagUpdate',
        request,
        metadata || {},
        this.methodInfoTagUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/TagUpdate',
    request,
    metadata || {},
    this.methodInfoTagUpdate);
  }

  methodInfoTagDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_tag_pb.TagDeleteResponse,
    (request: contents_v1_tag_pb.TagDeleteRequest) => {
      return request.serializeBinary();
    },
    contents_v1_tag_pb.TagDeleteResponse.deserializeBinary
  );

  tagDelete(
    request: contents_v1_tag_pb.TagDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_tag_pb.TagDeleteResponse>;

  tagDelete(
    request: contents_v1_tag_pb.TagDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagDeleteResponse) => void): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagDeleteResponse>;

  tagDelete(
    request: contents_v1_tag_pb.TagDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/TagDelete',
        request,
        metadata || {},
        this.methodInfoTagDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/TagDelete',
    request,
    metadata || {},
    this.methodInfoTagDelete);
  }

  methodInfoCategory1GetOne = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category1GetOneResponse,
    (request: contents_v1_category_pb.Category1GetOneRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category1GetOneResponse.deserializeBinary
  );

  category1GetOne(
    request: contents_v1_category_pb.Category1GetOneRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category1GetOneResponse>;

  category1GetOne(
    request: contents_v1_category_pb.Category1GetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1GetOneResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1GetOneResponse>;

  category1GetOne(
    request: contents_v1_category_pb.Category1GetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1GetOneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category1GetOne',
        request,
        metadata || {},
        this.methodInfoCategory1GetOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category1GetOne',
    request,
    metadata || {},
    this.methodInfoCategory1GetOne);
  }

  methodInfoCategory2GetOne = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category2GetOneResponse,
    (request: contents_v1_category_pb.Category2GetOneRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category2GetOneResponse.deserializeBinary
  );

  category2GetOne(
    request: contents_v1_category_pb.Category2GetOneRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category2GetOneResponse>;

  category2GetOne(
    request: contents_v1_category_pb.Category2GetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2GetOneResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2GetOneResponse>;

  category2GetOne(
    request: contents_v1_category_pb.Category2GetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2GetOneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category2GetOne',
        request,
        metadata || {},
        this.methodInfoCategory2GetOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category2GetOne',
    request,
    metadata || {},
    this.methodInfoCategory2GetOne);
  }

  methodInfoCategory3GetOne = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category3GetOneResponse,
    (request: contents_v1_category_pb.Category3GetOneRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category3GetOneResponse.deserializeBinary
  );

  category3GetOne(
    request: contents_v1_category_pb.Category3GetOneRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category3GetOneResponse>;

  category3GetOne(
    request: contents_v1_category_pb.Category3GetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3GetOneResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3GetOneResponse>;

  category3GetOne(
    request: contents_v1_category_pb.Category3GetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3GetOneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category3GetOne',
        request,
        metadata || {},
        this.methodInfoCategory3GetOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category3GetOne',
    request,
    metadata || {},
    this.methodInfoCategory3GetOne);
  }

  methodInfoCategory1GetMultiple = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category1GetMultipleResponse,
    (request: contents_v1_category_pb.Category1GetMultipleRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category1GetMultipleResponse.deserializeBinary
  );

  category1GetMultiple(
    request: contents_v1_category_pb.Category1GetMultipleRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category1GetMultipleResponse>;

  category1GetMultiple(
    request: contents_v1_category_pb.Category1GetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1GetMultipleResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1GetMultipleResponse>;

  category1GetMultiple(
    request: contents_v1_category_pb.Category1GetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1GetMultipleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category1GetMultiple',
        request,
        metadata || {},
        this.methodInfoCategory1GetMultiple,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category1GetMultiple',
    request,
    metadata || {},
    this.methodInfoCategory1GetMultiple);
  }

  methodInfoCategory2GetMultiple = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category2GetMultipleResponse,
    (request: contents_v1_category_pb.Category2GetMultipleRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category2GetMultipleResponse.deserializeBinary
  );

  category2GetMultiple(
    request: contents_v1_category_pb.Category2GetMultipleRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category2GetMultipleResponse>;

  category2GetMultiple(
    request: contents_v1_category_pb.Category2GetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2GetMultipleResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2GetMultipleResponse>;

  category2GetMultiple(
    request: contents_v1_category_pb.Category2GetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2GetMultipleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category2GetMultiple',
        request,
        metadata || {},
        this.methodInfoCategory2GetMultiple,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category2GetMultiple',
    request,
    metadata || {},
    this.methodInfoCategory2GetMultiple);
  }

  methodInfoCategory3GetMultiple = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category3GetMultipleResponse,
    (request: contents_v1_category_pb.Category3GetMultipleRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category3GetMultipleResponse.deserializeBinary
  );

  category3GetMultiple(
    request: contents_v1_category_pb.Category3GetMultipleRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category3GetMultipleResponse>;

  category3GetMultiple(
    request: contents_v1_category_pb.Category3GetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3GetMultipleResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3GetMultipleResponse>;

  category3GetMultiple(
    request: contents_v1_category_pb.Category3GetMultipleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3GetMultipleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category3GetMultiple',
        request,
        metadata || {},
        this.methodInfoCategory3GetMultiple,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category3GetMultiple',
    request,
    metadata || {},
    this.methodInfoCategory3GetMultiple);
  }

  methodInfoCategory1Create = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category1CreateResponse,
    (request: contents_v1_category_pb.Category1CreateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category1CreateResponse.deserializeBinary
  );

  category1Create(
    request: contents_v1_category_pb.Category1CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category1CreateResponse>;

  category1Create(
    request: contents_v1_category_pb.Category1CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1CreateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1CreateResponse>;

  category1Create(
    request: contents_v1_category_pb.Category1CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category1Create',
        request,
        metadata || {},
        this.methodInfoCategory1Create,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category1Create',
    request,
    metadata || {},
    this.methodInfoCategory1Create);
  }

  methodInfoCategory2Create = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category2CreateResponse,
    (request: contents_v1_category_pb.Category2CreateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category2CreateResponse.deserializeBinary
  );

  category2Create(
    request: contents_v1_category_pb.Category2CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category2CreateResponse>;

  category2Create(
    request: contents_v1_category_pb.Category2CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2CreateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2CreateResponse>;

  category2Create(
    request: contents_v1_category_pb.Category2CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category2Create',
        request,
        metadata || {},
        this.methodInfoCategory2Create,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category2Create',
    request,
    metadata || {},
    this.methodInfoCategory2Create);
  }

  methodInfoCategory3Create = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category3CreateResponse,
    (request: contents_v1_category_pb.Category3CreateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category3CreateResponse.deserializeBinary
  );

  category3Create(
    request: contents_v1_category_pb.Category3CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category3CreateResponse>;

  category3Create(
    request: contents_v1_category_pb.Category3CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3CreateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3CreateResponse>;

  category3Create(
    request: contents_v1_category_pb.Category3CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category3Create',
        request,
        metadata || {},
        this.methodInfoCategory3Create,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category3Create',
    request,
    metadata || {},
    this.methodInfoCategory3Create);
  }

  methodInfoCategory1Update = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category1UpdateResponse,
    (request: contents_v1_category_pb.Category1UpdateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category1UpdateResponse.deserializeBinary
  );

  category1Update(
    request: contents_v1_category_pb.Category1UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category1UpdateResponse>;

  category1Update(
    request: contents_v1_category_pb.Category1UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1UpdateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1UpdateResponse>;

  category1Update(
    request: contents_v1_category_pb.Category1UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category1Update',
        request,
        metadata || {},
        this.methodInfoCategory1Update,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category1Update',
    request,
    metadata || {},
    this.methodInfoCategory1Update);
  }

  methodInfoCategory2Update = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category2UpdateResponse,
    (request: contents_v1_category_pb.Category2UpdateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category2UpdateResponse.deserializeBinary
  );

  category2Update(
    request: contents_v1_category_pb.Category2UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category2UpdateResponse>;

  category2Update(
    request: contents_v1_category_pb.Category2UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2UpdateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2UpdateResponse>;

  category2Update(
    request: contents_v1_category_pb.Category2UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category2Update',
        request,
        metadata || {},
        this.methodInfoCategory2Update,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category2Update',
    request,
    metadata || {},
    this.methodInfoCategory2Update);
  }

  methodInfoCategory3Update = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category3UpdateResponse,
    (request: contents_v1_category_pb.Category3UpdateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category3UpdateResponse.deserializeBinary
  );

  category3Update(
    request: contents_v1_category_pb.Category3UpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category3UpdateResponse>;

  category3Update(
    request: contents_v1_category_pb.Category3UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3UpdateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3UpdateResponse>;

  category3Update(
    request: contents_v1_category_pb.Category3UpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category3Update',
        request,
        metadata || {},
        this.methodInfoCategory3Update,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category3Update',
    request,
    metadata || {},
    this.methodInfoCategory3Update);
  }

  methodInfoCategory1Delete = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category1DeleteResponse,
    (request: contents_v1_category_pb.Category1DeleteRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category1DeleteResponse.deserializeBinary
  );

  category1Delete(
    request: contents_v1_category_pb.Category1DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category1DeleteResponse>;

  category1Delete(
    request: contents_v1_category_pb.Category1DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1DeleteResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1DeleteResponse>;

  category1Delete(
    request: contents_v1_category_pb.Category1DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category1Delete',
        request,
        metadata || {},
        this.methodInfoCategory1Delete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category1Delete',
    request,
    metadata || {},
    this.methodInfoCategory1Delete);
  }

  methodInfoCategory2Delete = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category2DeleteResponse,
    (request: contents_v1_category_pb.Category2DeleteRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category2DeleteResponse.deserializeBinary
  );

  category2Delete(
    request: contents_v1_category_pb.Category2DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category2DeleteResponse>;

  category2Delete(
    request: contents_v1_category_pb.Category2DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2DeleteResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2DeleteResponse>;

  category2Delete(
    request: contents_v1_category_pb.Category2DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category2Delete',
        request,
        metadata || {},
        this.methodInfoCategory2Delete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category2Delete',
    request,
    metadata || {},
    this.methodInfoCategory2Delete);
  }

  methodInfoCategory3Delete = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_category_pb.Category3DeleteResponse,
    (request: contents_v1_category_pb.Category3DeleteRequest) => {
      return request.serializeBinary();
    },
    contents_v1_category_pb.Category3DeleteResponse.deserializeBinary
  );

  category3Delete(
    request: contents_v1_category_pb.Category3DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_category_pb.Category3DeleteResponse>;

  category3Delete(
    request: contents_v1_category_pb.Category3DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3DeleteResponse) => void): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3DeleteResponse>;

  category3Delete(
    request: contents_v1_category_pb.Category3DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3DeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/Category3Delete',
        request,
        metadata || {},
        this.methodInfoCategory3Delete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/Category3Delete',
    request,
    metadata || {},
    this.methodInfoCategory3Delete);
  }

  methodInfoArticleGetOne = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_article_pb.ArticleGetOneResponse,
    (request: contents_v1_article_pb.ArticleGetOneRequest) => {
      return request.serializeBinary();
    },
    contents_v1_article_pb.ArticleGetOneResponse.deserializeBinary
  );

  articleGetOne(
    request: contents_v1_article_pb.ArticleGetOneRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_article_pb.ArticleGetOneResponse>;

  articleGetOne(
    request: contents_v1_article_pb.ArticleGetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleGetOneResponse) => void): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleGetOneResponse>;

  articleGetOne(
    request: contents_v1_article_pb.ArticleGetOneRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleGetOneResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/ArticleGetOne',
        request,
        metadata || {},
        this.methodInfoArticleGetOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/ArticleGetOne',
    request,
    metadata || {},
    this.methodInfoArticleGetOne);
  }

  methodInfoArticleGetList = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_article_pb.ArticleGetListResponse,
    (request: contents_v1_article_pb.ArticleGetListRequest) => {
      return request.serializeBinary();
    },
    contents_v1_article_pb.ArticleGetListResponse.deserializeBinary
  );

  articleGetList(
    request: contents_v1_article_pb.ArticleGetListRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_article_pb.ArticleGetListResponse>;

  articleGetList(
    request: contents_v1_article_pb.ArticleGetListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleGetListResponse) => void): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleGetListResponse>;

  articleGetList(
    request: contents_v1_article_pb.ArticleGetListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleGetListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/ArticleGetList',
        request,
        metadata || {},
        this.methodInfoArticleGetList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/ArticleGetList',
    request,
    metadata || {},
    this.methodInfoArticleGetList);
  }

  methodInfoArticleCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_article_pb.ArticleCreateResponse,
    (request: contents_v1_article_pb.ArticleCreateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_article_pb.ArticleCreateResponse.deserializeBinary
  );

  articleCreate(
    request: contents_v1_article_pb.ArticleCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_article_pb.ArticleCreateResponse>;

  articleCreate(
    request: contents_v1_article_pb.ArticleCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleCreateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleCreateResponse>;

  articleCreate(
    request: contents_v1_article_pb.ArticleCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/ArticleCreate',
        request,
        metadata || {},
        this.methodInfoArticleCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/ArticleCreate',
    request,
    metadata || {},
    this.methodInfoArticleCreate);
  }

  methodInfoArticleUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_article_pb.ArticleUpdateResponse,
    (request: contents_v1_article_pb.ArticleUpdateRequest) => {
      return request.serializeBinary();
    },
    contents_v1_article_pb.ArticleUpdateResponse.deserializeBinary
  );

  articleUpdate(
    request: contents_v1_article_pb.ArticleUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_article_pb.ArticleUpdateResponse>;

  articleUpdate(
    request: contents_v1_article_pb.ArticleUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleUpdateResponse) => void): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleUpdateResponse>;

  articleUpdate(
    request: contents_v1_article_pb.ArticleUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleUpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/ArticleUpdate',
        request,
        metadata || {},
        this.methodInfoArticleUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/ArticleUpdate',
    request,
    metadata || {},
    this.methodInfoArticleUpdate);
  }

  methodInfoArticleDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    contents_v1_article_pb.ArticleDeleteResponse,
    (request: contents_v1_article_pb.ArticleDeleteRequest) => {
      return request.serializeBinary();
    },
    contents_v1_article_pb.ArticleDeleteResponse.deserializeBinary
  );

  articleDelete(
    request: contents_v1_article_pb.ArticleDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<contents_v1_article_pb.ArticleDeleteResponse>;

  articleDelete(
    request: contents_v1_article_pb.ArticleDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleDeleteResponse) => void): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleDeleteResponse>;

  articleDelete(
    request: contents_v1_article_pb.ArticleDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/contents.v1.ContentService/ArticleDelete',
        request,
        metadata || {},
        this.methodInfoArticleDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/contents.v1.ContentService/ArticleDelete',
    request,
    metadata || {},
    this.methodInfoArticleDelete);
  }

}

