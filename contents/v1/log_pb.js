// source: contents/v1/log.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var admin_v1_admin_pb = require('../../admin/v1/admin_pb.js');
goog.object.extend(proto, admin_v1_admin_pb);
goog.exportSymbol('proto.contents.v1.Log', null, global);
goog.exportSymbol('proto.contents.v1.LogContentSource', null, global);
goog.exportSymbol('proto.contents.v1.LogEvent', null, global);
goog.exportSymbol('proto.contents.v1.LogGetListInput', null, global);
goog.exportSymbol('proto.contents.v1.LogGetListOutput', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contents.v1.Log = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contents.v1.Log, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.contents.v1.Log.displayName = 'proto.contents.v1.Log';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contents.v1.LogGetListInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.contents.v1.LogGetListInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.contents.v1.LogGetListInput.displayName = 'proto.contents.v1.LogGetListInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.contents.v1.LogGetListOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.contents.v1.LogGetListOutput.repeatedFields_, null);
};
goog.inherits(proto.contents.v1.LogGetListOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.contents.v1.LogGetListOutput.displayName = 'proto.contents.v1.LogGetListOutput';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.contents.v1.Log.prototype.toObject = function(opt_includeInstance) {
  return proto.contents.v1.Log.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contents.v1.Log} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contents.v1.Log.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    adminId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    contentSource: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    event: jspb.Message.getFieldWithDefault(msg, 5, 0),
    payload: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    admin: (f = msg.getAdmin()) && admin_v1_admin_pb.Admin.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contents.v1.Log}
 */
proto.contents.v1.Log.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contents.v1.Log;
  return proto.contents.v1.Log.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contents.v1.Log} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contents.v1.Log}
 */
proto.contents.v1.Log.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdminId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentSource(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContentId(value);
      break;
    case 5:
      var value = /** @type {!proto.contents.v1.LogEvent} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new admin_v1_admin_pb.Admin;
      reader.readMessage(value,admin_v1_admin_pb.Admin.deserializeBinaryFromReader);
      msg.setAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contents.v1.Log.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contents.v1.Log.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contents.v1.Log} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contents.v1.Log.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAdminId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getContentSource();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContentId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAdmin();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      admin_v1_admin_pb.Admin.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.contents.v1.Log.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 admin_id = 2;
 * @return {number}
 */
proto.contents.v1.Log.prototype.getAdminId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.setAdminId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string content_source = 3;
 * @return {string}
 */
proto.contents.v1.Log.prototype.getContentSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.setContentSource = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 content_id = 4;
 * @return {number}
 */
proto.contents.v1.Log.prototype.getContentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.setContentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional LogEvent event = 5;
 * @return {!proto.contents.v1.LogEvent}
 */
proto.contents.v1.Log.prototype.getEvent = function() {
  return /** @type {!proto.contents.v1.LogEvent} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.contents.v1.LogEvent} value
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.setEvent = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string payload = 6;
 * @return {string}
 */
proto.contents.v1.Log.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.contents.v1.Log.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.contents.v1.Log} returns this
*/
proto.contents.v1.Log.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.contents.v1.Log.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional admin.v1.Admin admin = 8;
 * @return {?proto.admin.v1.Admin}
 */
proto.contents.v1.Log.prototype.getAdmin = function() {
  return /** @type{?proto.admin.v1.Admin} */ (
    jspb.Message.getWrapperField(this, admin_v1_admin_pb.Admin, 8));
};


/**
 * @param {?proto.admin.v1.Admin|undefined} value
 * @return {!proto.contents.v1.Log} returns this
*/
proto.contents.v1.Log.prototype.setAdmin = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.contents.v1.Log} returns this
 */
proto.contents.v1.Log.prototype.clearAdmin = function() {
  return this.setAdmin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.contents.v1.Log.prototype.hasAdmin = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.contents.v1.LogGetListInput.prototype.toObject = function(opt_includeInstance) {
  return proto.contents.v1.LogGetListInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contents.v1.LogGetListInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contents.v1.LogGetListInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentSource: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    adminId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    page: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contentPerPage: jspb.Message.getFieldWithDefault(msg, 5, 0),
    withAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contents.v1.LogGetListInput}
 */
proto.contents.v1.LogGetListInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contents.v1.LogGetListInput;
  return proto.contents.v1.LogGetListInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contents.v1.LogGetListInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contents.v1.LogGetListInput}
 */
proto.contents.v1.LogGetListInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.contents.v1.LogContentSource} */ (reader.readEnum());
      msg.setContentSource(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContentId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdminId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContentPerPage(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithAdmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contents.v1.LogGetListInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contents.v1.LogGetListInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contents.v1.LogGetListInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contents.v1.LogGetListInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentSource();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getContentId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAdminId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getContentPerPage();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getWithAdmin();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional LogContentSource content_source = 1;
 * @return {!proto.contents.v1.LogContentSource}
 */
proto.contents.v1.LogGetListInput.prototype.getContentSource = function() {
  return /** @type {!proto.contents.v1.LogContentSource} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.contents.v1.LogContentSource} value
 * @return {!proto.contents.v1.LogGetListInput} returns this
 */
proto.contents.v1.LogGetListInput.prototype.setContentSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 content_id = 2;
 * @return {number}
 */
proto.contents.v1.LogGetListInput.prototype.getContentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.LogGetListInput} returns this
 */
proto.contents.v1.LogGetListInput.prototype.setContentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 admin_id = 3;
 * @return {number}
 */
proto.contents.v1.LogGetListInput.prototype.getAdminId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.LogGetListInput} returns this
 */
proto.contents.v1.LogGetListInput.prototype.setAdminId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page = 4;
 * @return {number}
 */
proto.contents.v1.LogGetListInput.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.LogGetListInput} returns this
 */
proto.contents.v1.LogGetListInput.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 content_per_page = 5;
 * @return {number}
 */
proto.contents.v1.LogGetListInput.prototype.getContentPerPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.LogGetListInput} returns this
 */
proto.contents.v1.LogGetListInput.prototype.setContentPerPage = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool with_admin = 6;
 * @return {boolean}
 */
proto.contents.v1.LogGetListInput.prototype.getWithAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.contents.v1.LogGetListInput} returns this
 */
proto.contents.v1.LogGetListInput.prototype.setWithAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.contents.v1.LogGetListOutput.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.contents.v1.LogGetListOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.contents.v1.LogGetListOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contents.v1.LogGetListOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contents.v1.LogGetListOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.contents.v1.Log.toObject, includeInstance),
    maxPage: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.contents.v1.LogGetListOutput}
 */
proto.contents.v1.LogGetListOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contents.v1.LogGetListOutput;
  return proto.contents.v1.LogGetListOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contents.v1.LogGetListOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contents.v1.LogGetListOutput}
 */
proto.contents.v1.LogGetListOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.contents.v1.Log;
      reader.readMessage(value,proto.contents.v1.Log.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.contents.v1.LogGetListOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contents.v1.LogGetListOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contents.v1.LogGetListOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contents.v1.LogGetListOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.contents.v1.Log.serializeBinaryToWriter
    );
  }
  f = message.getMaxPage();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated Log data = 1;
 * @return {!Array<!proto.contents.v1.Log>}
 */
proto.contents.v1.LogGetListOutput.prototype.getDataList = function() {
  return /** @type{!Array<!proto.contents.v1.Log>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.contents.v1.Log, 1));
};


/**
 * @param {!Array<!proto.contents.v1.Log>} value
 * @return {!proto.contents.v1.LogGetListOutput} returns this
*/
proto.contents.v1.LogGetListOutput.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.contents.v1.Log=} opt_value
 * @param {number=} opt_index
 * @return {!proto.contents.v1.Log}
 */
proto.contents.v1.LogGetListOutput.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.contents.v1.Log, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.contents.v1.LogGetListOutput} returns this
 */
proto.contents.v1.LogGetListOutput.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional int32 max_page = 2;
 * @return {number}
 */
proto.contents.v1.LogGetListOutput.prototype.getMaxPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.LogGetListOutput} returns this
 */
proto.contents.v1.LogGetListOutput.prototype.setMaxPage = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.contents.v1.LogGetListOutput.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.contents.v1.LogGetListOutput} returns this
 */
proto.contents.v1.LogGetListOutput.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.contents.v1.LogContentSource = {
  LOG_CONTENT_SOURCE_ALL_UNSPECIFIED: 0,
  LOG_CONTENT_SOURCE_TAG: 1,
  LOG_CONTENT_SOURCE_ARTICLE: 2
};

/**
 * @enum {number}
 */
proto.contents.v1.LogEvent = {
  LOG_EVENT_ALL_UNSPECIFIED: 0,
  LOG_EVENT_CREATE: 1,
  LOG_EVENT_UPDATE: 2,
  LOG_EVENT_DELETE: 3
};

goog.object.extend(exports, proto.contents.v1);
