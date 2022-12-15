// package: customers
// file: services/customer/messages_customer.proto

import * as jspb from "google-protobuf";

export class AddCustomerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCpf(): string;
  setCpf(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCustomerRequest): AddCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCustomerRequest;
  static deserializeBinaryFromReader(message: AddCustomerRequest, reader: jspb.BinaryReader): AddCustomerRequest;
}

export namespace AddCustomerRequest {
  export type AsObject = {
    name: string,
    cpf: string,
    email: string,
  }
}

export class AddCustomerResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCustomerResponse): AddCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCustomerResponse;
  static deserializeBinaryFromReader(message: AddCustomerResponse, reader: jspb.BinaryReader): AddCustomerResponse;
}

export namespace AddCustomerResponse {
  export type AsObject = {
    id: string,
  }
}

