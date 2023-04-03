import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Types, UpdateQuery } from 'mongoose';
import { LabelService } from './app.service';
import { Label, LabelDocument } from './database/schemas/label.schema';
import {CreateLabelDto} from './database/dtos/create-label.dto'
import { Delete } from '@nestjs/common/decorators';


@Controller('Labels')
export class LabelController {
  constructor(private readonly LabelService: LabelService) {}

  @Post()
  async creatLabel(@Body() createLabelDto : CreateLabelDto) : Promise<Label>{
      return this.LabelService.create(createLabelDto)
  }

  @Get()
  async getLabels() : Promise<Label[]>{
      return this.LabelService.find();
  }

  @Get(':id')
  async getLabel(@Param('id') id : Types.ObjectId) : Promise<Label>{
      return this.LabelService.findOne(id);
  }

  @Patch(':id')
  async updateLabel(@Param('id') id : Types.ObjectId, @Body() update : UpdateQuery<LabelDocument>) : Promise<Label>{
      return this.LabelService.findOneAndUpdate(id , update);
  }

  @Delete(':id')
  async deleteLabel(@Param('id') id : Types.ObjectId) : Promise<Label>{
    return this.LabelService.delete(id);
  }
}


