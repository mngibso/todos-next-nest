import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataConnection } from './data.db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataDao } from './data.dao';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME || 'local',
      connectionName: 'local',
      maxPoolSize: 100,
    }),
    DataConnection,
    TodosModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DataDao
  ],
})
export class AppModule {}
