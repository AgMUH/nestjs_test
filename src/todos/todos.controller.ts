import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todos } from './todos.schema';
import { CreateTodosDTO } from './dto/create-todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() createPostDTO: CreateTodosDTO) {
    return this.todosService.create(createPostDTO);
  }
}
