import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuid_v4 } from 'uuid';
import { CONNECTION_NAME } from '../constants';

// Maps ToDo class to MongoDB 'ToDos' collection
@Schema({
  collection: 'ToDos',
  autoCreate: true,
})
// Our ToDo objects class
export class ToDo {
  @Prop({ type: String, default: uuid_v4 })
  _id?: string;

  @Prop({ type: String, required: true })
  task: string;

  @Prop({ type: Boolean, required: true, default: false })
  done: boolean;
}

// Create a mongoose schema
const ToDoSchema = SchemaFactory.createForClass(ToDo);

// This MongooseModule is used as a DB connection for accessing ToDos
export const TodoConnection = MongooseModule.forFeature(
  [
    {
      name: ToDo.name,
      schema: ToDoSchema,
    },
  ],
  CONNECTION_NAME,
);
