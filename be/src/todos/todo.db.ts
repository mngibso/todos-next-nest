import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuid_v4 } from 'uuid';

@Schema({
  collection: 'ToDo',
  autoCreate: true,
  timestamps: {
    createdAt: 'created',
  },
})
export class ToDo {
  @Prop({ type: String, default: uuid_v4 })
  _id?: string;

  @Prop({ type: String, required: true })
  task: string;

  @Prop({ type: Boolean, required: true, default: false })
  done: boolean;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);

export const ToDoCollection = {
  name: ToDo.name,
  schema: ToDoSchema,
};

export const TodoConnection = MongooseModule.forFeature(
  [ToDoCollection],
  'local',
);
