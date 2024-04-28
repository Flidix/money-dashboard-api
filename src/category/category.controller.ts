import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { CategoryService } from './category.service';

import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

import { CurrentUser } from 'src/auth/decorators/currentUser';

import { CreateCategoryDto } from './dtos/create-category.dto';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto.title);
  }

  @Post('create-user-category')
  createUserCategories(@CurrentUser('userId') userId: number, @Body() dto: CreateCategoryDto) {
    return this.categoryService.createUserCategories(userId, dto.title);
  }

  @Get('user-categories')
  getUserCategories(@CurrentUser('userId') userId: number) {
    return this.categoryService.getUserCategories(userId);
  }
}
