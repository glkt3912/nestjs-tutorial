import { Controller, Get, HttpCode, Post, Req, Header, Redirect, Param, HttpRedirectResponse, Body } from '@nestjs/common';
import { CreateCatDto } from './dtc/create-cat.dto';

@Controller('cats')
export class CatsController {
	// @Post()
	// @HttpCode(204)
	// create(): string {
	// 	return 'This action adds a new cat'
	// }

	// @Get()
	// findAll(@Req() request: Request): string {
	// 	return 'This action returns all cats';
	// }

	@Get('ab*cd')
	@Redirect('https://nestjs.com', 301)
	findWildcard() {
		return 'This route uses a wildcard';
	}

	@Post()
	@Header('Cache-Control', 'none')
	createCustomHeader() {
		return 'This action adds a new cat';
	}

	@Get(':id')
	findOne(@Param() params: any): string {
		return `This action returns a #${params.id} cat`;
	}

	// Data extraction
	@Get()
	async findAll(): Promise<any[]> {
		return [];
	}

	@Post()
	async create(@Body() cretateCat)
}


