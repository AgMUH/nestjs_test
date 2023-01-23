import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todos } from './todos.schema';
import { CreateTodosDTO } from './dto/create-todos.dto';
import { UpdateTodosDTO } from './dto/update-todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() createTodosDTO: CreateTodosDTO) {
    return this.todosService.create(createTodosDTO);
  }

  @Put(':id')
  update(@Param() { id }, @Body() updateTodosDTO: UpdateTodosDTO) {
    return this.todosService.update(id, updateTodosDTO);
  }

  @Delete(':id')
  async deletePost(@Param() { id }) {
    return this.todosService.delete(id);
  }
}
