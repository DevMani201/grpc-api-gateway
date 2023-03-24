import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getHello(): string {
        return 'hello products';
    }
}
