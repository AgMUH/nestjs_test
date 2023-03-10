import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosController } from './todos/todos.controller';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_LINK), TodosModule],
  controllers: [AppController, TodosController],
  providers: [AppService],
})
export class AppModule {}
