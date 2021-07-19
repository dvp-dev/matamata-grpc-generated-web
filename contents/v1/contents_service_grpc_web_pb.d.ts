import * as grpcWeb from 'grpc-web';

import * as contents_v1_tag_pb from '../../contents/v1/tag_pb';
import * as contents_v1_category_pb from '../../contents/v1/category_pb';
import * as contents_v1_article_pb from '../../contents/v1/article_pb';
import * as contents_v1_infografik_pb from '../../contents/v1/infografik_pb';
import * as contents_v1_news_photo_pb from '../../contents/v1/news_photo_pb';
import * as contents_v1_news_video_pb from '../../contents/v1/news_video_pb';
import * as contents_v1_polling_pb from '../../contents/v1/polling_pb';


export class ContentServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  tagGetOne(
    request: contents_v1_tag_pb.TagGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagGetOneResponse>;

  tagGetMultiple(
    request: contents_v1_tag_pb.TagGetMultipleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagGetMultipleResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagGetMultipleResponse>;

  tagCreate(
    request: contents_v1_tag_pb.TagCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagCreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagCreateResponse>;

  tagUpdate(
    request: contents_v1_tag_pb.TagUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagUpdateResponse>;

  tagDelete(
    request: contents_v1_tag_pb.TagDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_tag_pb.TagDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_tag_pb.TagDeleteResponse>;

  category1GetOne(
    request: contents_v1_category_pb.Category1GetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1GetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1GetOneResponse>;

  category2GetOne(
    request: contents_v1_category_pb.Category2GetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2GetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2GetOneResponse>;

  category3GetOne(
    request: contents_v1_category_pb.Category3GetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3GetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3GetOneResponse>;

  category1GetMultiple(
    request: contents_v1_category_pb.Category1GetMultipleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1GetMultipleResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1GetMultipleResponse>;

  category2GetMultiple(
    request: contents_v1_category_pb.Category2GetMultipleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2GetMultipleResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2GetMultipleResponse>;

  category3GetMultiple(
    request: contents_v1_category_pb.Category3GetMultipleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3GetMultipleResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3GetMultipleResponse>;

  category1Create(
    request: contents_v1_category_pb.Category1CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1CreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1CreateResponse>;

  category2Create(
    request: contents_v1_category_pb.Category2CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2CreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2CreateResponse>;

  category3Create(
    request: contents_v1_category_pb.Category3CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3CreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3CreateResponse>;

  category1Update(
    request: contents_v1_category_pb.Category1UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1UpdateResponse>;

  category2Update(
    request: contents_v1_category_pb.Category2UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2UpdateResponse>;

  category3Update(
    request: contents_v1_category_pb.Category3UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3UpdateResponse>;

  category1Delete(
    request: contents_v1_category_pb.Category1DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category1DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category1DeleteResponse>;

  category2Delete(
    request: contents_v1_category_pb.Category2DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category2DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category2DeleteResponse>;

  category3Delete(
    request: contents_v1_category_pb.Category3DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_category_pb.Category3DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_category_pb.Category3DeleteResponse>;

  articleGetOne(
    request: contents_v1_article_pb.ArticleGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleGetOneResponse>;

  articleGetList(
    request: contents_v1_article_pb.ArticleGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleGetListResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleGetListResponse>;

  articleCreate(
    request: contents_v1_article_pb.ArticleCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleCreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleCreateResponse>;

  articleUpdate(
    request: contents_v1_article_pb.ArticleUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleUpdateResponse>;

  articleDelete(
    request: contents_v1_article_pb.ArticleDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_article_pb.ArticleDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_article_pb.ArticleDeleteResponse>;

  infografikGetOne(
    request: contents_v1_infografik_pb.InfografikGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_infografik_pb.InfografikGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_infografik_pb.InfografikGetOneResponse>;

  infografikGetList(
    request: contents_v1_infografik_pb.InfografikGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_infografik_pb.InfografikGetListResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_infografik_pb.InfografikGetListResponse>;

  infografikGetListStream(
    request: contents_v1_infografik_pb.InfografikGetListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contents_v1_infografik_pb.InfografikGetListStreamResponse>;

  infografikCreate(
    request: contents_v1_infografik_pb.InfografikCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_infografik_pb.InfografikCreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_infografik_pb.InfografikCreateResponse>;

  infografikUpdate(
    request: contents_v1_infografik_pb.InfografikUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_infografik_pb.InfografikUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_infografik_pb.InfografikUpdateResponse>;

  infografikDelete(
    request: contents_v1_infografik_pb.InfografikDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_infografik_pb.InfografikDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_infografik_pb.InfografikDeleteResponse>;

  newsPhotoGetOne(
    request: contents_v1_news_photo_pb.NewsPhotoGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_photo_pb.NewsPhotoGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_photo_pb.NewsPhotoGetOneResponse>;

  newsPhotoGetList(
    request: contents_v1_news_photo_pb.NewsPhotoGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_photo_pb.NewsPhotoGetListResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_photo_pb.NewsPhotoGetListResponse>;

  newsPhotoGetListStream(
    request: contents_v1_news_photo_pb.NewsPhotoGetListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contents_v1_news_photo_pb.NewsPhotoGetListStreamResponse>;

  newsPhotoCreate(
    request: contents_v1_news_photo_pb.NewsPhotoCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_photo_pb.NewsPhotoCreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_photo_pb.NewsPhotoCreateResponse>;

  newsPhotoUpdate(
    request: contents_v1_news_photo_pb.NewsPhotoUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_photo_pb.NewsPhotoUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_photo_pb.NewsPhotoUpdateResponse>;

  newsPhotoDelete(
    request: contents_v1_news_photo_pb.NewsPhotoDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_photo_pb.NewsPhotoDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_photo_pb.NewsPhotoDeleteResponse>;

  newsVideoGetOne(
    request: contents_v1_news_video_pb.NewsVideoGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_video_pb.NewsVideoGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_video_pb.NewsVideoGetOneResponse>;

  newsVideoGetList(
    request: contents_v1_news_video_pb.NewsVideoGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_video_pb.NewsVideoGetListResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_video_pb.NewsVideoGetListResponse>;

  newsVideoGetListStream(
    request: contents_v1_news_video_pb.NewsVideoGetListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contents_v1_news_video_pb.NewsVideoGetListStreamResponse>;

  newsVideoCreate(
    request: contents_v1_news_video_pb.NewsVideoCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_video_pb.NewsVideoCreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_video_pb.NewsVideoCreateResponse>;

  newsVideoUpdate(
    request: contents_v1_news_video_pb.NewsVideoUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_video_pb.NewsVideoUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_video_pb.NewsVideoUpdateResponse>;

  newsVideoDelete(
    request: contents_v1_news_video_pb.NewsVideoDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_news_video_pb.NewsVideoDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_news_video_pb.NewsVideoDeleteResponse>;

  pollingGetOne(
    request: contents_v1_polling_pb.PollingGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_polling_pb.PollingGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_polling_pb.PollingGetOneResponse>;

  pollingGetList(
    request: contents_v1_polling_pb.PollingGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_polling_pb.PollingGetListResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_polling_pb.PollingGetListResponse>;

  pollingCreate(
    request: contents_v1_polling_pb.PollingCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_polling_pb.PollingCreateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_polling_pb.PollingCreateResponse>;

  pollingUpdate(
    request: contents_v1_polling_pb.PollingUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_polling_pb.PollingUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_polling_pb.PollingUpdateResponse>;

  pollingDelete(
    request: contents_v1_polling_pb.PollingDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: contents_v1_polling_pb.PollingDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<contents_v1_polling_pb.PollingDeleteResponse>;

}

export class ContentServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  tagGetOne(
    request: contents_v1_tag_pb.TagGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_tag_pb.TagGetOneResponse>;

  tagGetMultiple(
    request: contents_v1_tag_pb.TagGetMultipleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_tag_pb.TagGetMultipleResponse>;

  tagCreate(
    request: contents_v1_tag_pb.TagCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_tag_pb.TagCreateResponse>;

  tagUpdate(
    request: contents_v1_tag_pb.TagUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_tag_pb.TagUpdateResponse>;

  tagDelete(
    request: contents_v1_tag_pb.TagDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_tag_pb.TagDeleteResponse>;

  category1GetOne(
    request: contents_v1_category_pb.Category1GetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category1GetOneResponse>;

  category2GetOne(
    request: contents_v1_category_pb.Category2GetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category2GetOneResponse>;

  category3GetOne(
    request: contents_v1_category_pb.Category3GetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category3GetOneResponse>;

  category1GetMultiple(
    request: contents_v1_category_pb.Category1GetMultipleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category1GetMultipleResponse>;

  category2GetMultiple(
    request: contents_v1_category_pb.Category2GetMultipleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category2GetMultipleResponse>;

  category3GetMultiple(
    request: contents_v1_category_pb.Category3GetMultipleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category3GetMultipleResponse>;

  category1Create(
    request: contents_v1_category_pb.Category1CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category1CreateResponse>;

  category2Create(
    request: contents_v1_category_pb.Category2CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category2CreateResponse>;

  category3Create(
    request: contents_v1_category_pb.Category3CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category3CreateResponse>;

  category1Update(
    request: contents_v1_category_pb.Category1UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category1UpdateResponse>;

  category2Update(
    request: contents_v1_category_pb.Category2UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category2UpdateResponse>;

  category3Update(
    request: contents_v1_category_pb.Category3UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category3UpdateResponse>;

  category1Delete(
    request: contents_v1_category_pb.Category1DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category1DeleteResponse>;

  category2Delete(
    request: contents_v1_category_pb.Category2DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category2DeleteResponse>;

  category3Delete(
    request: contents_v1_category_pb.Category3DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_category_pb.Category3DeleteResponse>;

  articleGetOne(
    request: contents_v1_article_pb.ArticleGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_article_pb.ArticleGetOneResponse>;

  articleGetList(
    request: contents_v1_article_pb.ArticleGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_article_pb.ArticleGetListResponse>;

  articleCreate(
    request: contents_v1_article_pb.ArticleCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_article_pb.ArticleCreateResponse>;

  articleUpdate(
    request: contents_v1_article_pb.ArticleUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_article_pb.ArticleUpdateResponse>;

  articleDelete(
    request: contents_v1_article_pb.ArticleDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_article_pb.ArticleDeleteResponse>;

  infografikGetOne(
    request: contents_v1_infografik_pb.InfografikGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_infografik_pb.InfografikGetOneResponse>;

  infografikGetList(
    request: contents_v1_infografik_pb.InfografikGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_infografik_pb.InfografikGetListResponse>;

  infografikGetListStream(
    request: contents_v1_infografik_pb.InfografikGetListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contents_v1_infografik_pb.InfografikGetListStreamResponse>;

  infografikCreate(
    request: contents_v1_infografik_pb.InfografikCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_infografik_pb.InfografikCreateResponse>;

  infografikUpdate(
    request: contents_v1_infografik_pb.InfografikUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_infografik_pb.InfografikUpdateResponse>;

  infografikDelete(
    request: contents_v1_infografik_pb.InfografikDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_infografik_pb.InfografikDeleteResponse>;

  newsPhotoGetOne(
    request: contents_v1_news_photo_pb.NewsPhotoGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_photo_pb.NewsPhotoGetOneResponse>;

  newsPhotoGetList(
    request: contents_v1_news_photo_pb.NewsPhotoGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_photo_pb.NewsPhotoGetListResponse>;

  newsPhotoGetListStream(
    request: contents_v1_news_photo_pb.NewsPhotoGetListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contents_v1_news_photo_pb.NewsPhotoGetListStreamResponse>;

  newsPhotoCreate(
    request: contents_v1_news_photo_pb.NewsPhotoCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_photo_pb.NewsPhotoCreateResponse>;

  newsPhotoUpdate(
    request: contents_v1_news_photo_pb.NewsPhotoUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_photo_pb.NewsPhotoUpdateResponse>;

  newsPhotoDelete(
    request: contents_v1_news_photo_pb.NewsPhotoDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_photo_pb.NewsPhotoDeleteResponse>;

  newsVideoGetOne(
    request: contents_v1_news_video_pb.NewsVideoGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_video_pb.NewsVideoGetOneResponse>;

  newsVideoGetList(
    request: contents_v1_news_video_pb.NewsVideoGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_video_pb.NewsVideoGetListResponse>;

  newsVideoGetListStream(
    request: contents_v1_news_video_pb.NewsVideoGetListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<contents_v1_news_video_pb.NewsVideoGetListStreamResponse>;

  newsVideoCreate(
    request: contents_v1_news_video_pb.NewsVideoCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_video_pb.NewsVideoCreateResponse>;

  newsVideoUpdate(
    request: contents_v1_news_video_pb.NewsVideoUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_video_pb.NewsVideoUpdateResponse>;

  newsVideoDelete(
    request: contents_v1_news_video_pb.NewsVideoDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_news_video_pb.NewsVideoDeleteResponse>;

  pollingGetOne(
    request: contents_v1_polling_pb.PollingGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_polling_pb.PollingGetOneResponse>;

  pollingGetList(
    request: contents_v1_polling_pb.PollingGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_polling_pb.PollingGetListResponse>;

  pollingCreate(
    request: contents_v1_polling_pb.PollingCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_polling_pb.PollingCreateResponse>;

  pollingUpdate(
    request: contents_v1_polling_pb.PollingUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_polling_pb.PollingUpdateResponse>;

  pollingDelete(
    request: contents_v1_polling_pb.PollingDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<contents_v1_polling_pb.PollingDeleteResponse>;

}

