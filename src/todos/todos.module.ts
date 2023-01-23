import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todos, TodosSchema } from './todos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todos.name, schema: TodosSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TodosService],
})
export class TodosModule {}
