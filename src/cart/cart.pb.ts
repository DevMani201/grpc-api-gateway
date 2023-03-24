/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "cart";

export interface CartRequest {
  cartId: string;
  userId: string;
}

export interface CartResponse {
  status: number;
  error: string[];
}

export const CART_PACKAGE_NAME = "cart";

export interface CartServiceClient {
  create(request: CartRequest): Observable<CartResponse>;
}

export interface CartServiceController {
  create(request: CartRequest): Promise<CartResponse> | Observable<CartResponse> | CartResponse;
}

export function CartServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["create"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CartService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CartService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CART_SERVICE_NAME = "CartService";
