import { CreateTodosDTO } from './dto/create-todos.dto';
import { TodosDocument } from './todos.schema';
import { Injectable } from '@nestjs/common';
import { Todos } from './todos.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateTodosDTO } from './dto/update-todos.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todos.name) private readonly todosModel: Model<TodosDocument>,
  ) {}

  async create(createTodosDto: CreateTodosDTO): Promise<Todos> {
    const createdTodos = new this.todosModel(createTodosDto);
    return createdTodos.save();
  }

  async findAll(): Promise<Todos[]> {
    return this.todosModel.find().exec();
  }

  async update(id: string, updateTodosDto: UpdateTodosDTO): Promise<Todos> {
    const todos = await this.todosModel.findByIdAndUpdate(id, updateTodosDto);

    return todos;
  }

  async delete(todosId: string) {
    const result = await this.todosModel.findByIdAndDelete(todosId);
    return result;
  }
}
