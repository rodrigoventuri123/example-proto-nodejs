// GENERATED CODE -- DO NOT EDIT!

// package: customers
// file: services/customer/service_customer.proto

import * as services_customer_service_customer_pb from "../../services/customer/service_customer_pb";
import * as services_customer_messages_customer_pb from "../../services/customer/messages_customer_pb";
import * as grpc from "grpc";

interface ICustomerAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addCustomer: grpc.MethodDefinition<services_customer_messages_customer_pb.AddCustomerRequest, services_customer_messages_customer_pb.AddCustomerResponse>;
}

export const CustomerAPIService: ICustomerAPIService;

export class CustomerAPIClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  addCustomer(argument: services_customer_messages_customer_pb.AddCustomerRequest, callback: grpc.requestCallback<services_customer_messages_customer_pb.AddCustomerResponse>): grpc.ClientUnaryCall;
  addCustomer(argument: services_customer_messages_customer_pb.AddCustomerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_customer_messages_customer_pb.AddCustomerResponse>): grpc.ClientUnaryCall;
  addCustomer(argument: services_customer_messages_customer_pb.AddCustomerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_customer_messages_customer_pb.AddCustomerResponse>): grpc.ClientUnaryCall;
}
