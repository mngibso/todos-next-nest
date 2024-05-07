import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { CONNECTION_NAME } from './constants';

@Module({
  // MongooseModule and ToDosModule are used in this app
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME || 'local',
      connectionName: CONNECTION_NAME,
      maxPoolSize: 100,
    }),
    TodosModule,
  ],
})
export class AppModule {}
