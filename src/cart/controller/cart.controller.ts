import { Controller, Get } from '@nestjs/common';

@Controller('cart')
export class CartController {
    @Get()
    getHello(): string {
        return 'hello cart';
    }
}
