import { CartController } from "./controller/cart.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [CartController],
    providers: [],
})
export class CartModule { }
