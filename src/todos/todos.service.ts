import { CreateTodosDTO } from './dto/create-todos.dto';
import { TodosDocument } from './todos.schema';
import { Injectable } from '@nestjs/common';
import { Todos } from './todos.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todos.name) private readonly todosModel: Model<TodosDocument>,
  ) {}

  async create(createTodosDto: CreateTodosDTO): Promise<Todos> {
    console.log(createTodosDto);

    const createdTodos = new this.todosModel(createTodosDto);
    return createdTodos.save();
  }

  async findAll(): Promise<Todos[]> {
    return this.todosModel.find().exec();
  }
}
