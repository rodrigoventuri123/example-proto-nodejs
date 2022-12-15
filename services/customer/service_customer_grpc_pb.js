// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_customer_messages_customer_pb = require('../../services/customer/messages_customer_pb.js');

function serialize_customers_AddCustomerRequest(arg) {
  if (!(arg instanceof services_customer_messages_customer_pb.AddCustomerRequest)) {
    throw new Error('Expected argument of type customers.AddCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_AddCustomerRequest(buffer_arg) {
  return services_customer_messages_customer_pb.AddCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_customers_AddCustomerResponse(arg) {
  if (!(arg instanceof services_customer_messages_customer_pb.AddCustomerResponse)) {
    throw new Error('Expected argument of type customers.AddCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_customers_AddCustomerResponse(buffer_arg) {
  return services_customer_messages_customer_pb.AddCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustomerAPIService = exports.CustomerAPIService = {
  addCustomer: {
    path: '/customers.CustomerAPI/AddCustomer',
    requestStream: false,
    responseStream: false,
    requestType: services_customer_messages_customer_pb.AddCustomerRequest,
    responseType: services_customer_messages_customer_pb.AddCustomerResponse,
    requestSerialize: serialize_customers_AddCustomerRequest,
    requestDeserialize: deserialize_customers_AddCustomerRequest,
    responseSerialize: serialize_customers_AddCustomerResponse,
    responseDeserialize: deserialize_customers_AddCustomerResponse,
  },
};

exports.CustomerAPIClient = grpc.makeGenericClientConstructor(CustomerAPIService);
