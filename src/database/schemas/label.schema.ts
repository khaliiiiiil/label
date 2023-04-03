import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export type LabelDocument = Label & Document;

@Schema()
export class Label{
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
  
    @Prop()
    name: String;

    @Prop()
    company: String;

    @Prop()
    type: String;


    @Prop()
    status: Boolean;
}


export const LabelSchema = SchemaFactory.createForClass(Label);