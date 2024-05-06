import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { TodosController } from './todos/todos.controller';
import { TodoDao } from './todos/todo.dao';
import { TodoConnection } from './todos/todo.db';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME || 'local',
      connectionName: 'local',
      maxPoolSize: 100,
    }),
    TodosModule,
    TodoConnection,
  ],
  controllers: [TodosController],
  providers: [TodoDao],
})
export class AppModule {}
