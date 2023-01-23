import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodosDocument = HydratedDocument<Todos>;

@Schema()
export class Todos {
  @Prop()
  name: string;

  @Prop()
  priority: string;

  @Prop()
  status: string;
}

export const TodosSchema = SchemaFactory.createForClass(Todos);
