import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { CategoryService } from './category.service';

import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

import { CreateCategoryDto } from './dtos/create-category.dto';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto.title);
  }
}
