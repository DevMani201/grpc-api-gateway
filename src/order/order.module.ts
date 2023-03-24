import { OrderController } from './controller/order.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [],
})
export class OrderModule { }
