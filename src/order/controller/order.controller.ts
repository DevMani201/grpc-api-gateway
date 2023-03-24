import { Body, Controller, Get, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { orderClientOptions } from '../order.clientOptions';
import { OrderServiceClient } from '../order.pb';

@Controller('order')
export class OrderController {

    
    @Client(orderClientOptions)
    private readonly client: ClientGrpc;
    private orderService: OrderServiceClient;

    onModuleInit(): void {
        this.orderService = this.client.getService<OrderServiceClient>('OrderService');
    }
    @Get()
    getHello(): string {
        return 'order';
    }
    @Post()
    createOrder(@Body() orderDto: any) {
        console.log(orderDto)
        return {
            status: 200,
            id: 123
        }
    }
}
