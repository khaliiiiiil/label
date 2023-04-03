import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LabelController } from './app.controller';
import { LabelService } from './app.service';
import { Label, LabelSchema } from './database/schemas/Label.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://k14512415:khalil1451@cluster0.qej0gup.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Label.name, schema: LabelSchema }]),
  ],
  controllers: [LabelController],
  providers: [LabelService],
})
export class LabelModule {}