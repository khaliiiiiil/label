import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {  FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { CreateLabelDto } from "./database/dtos/create-Label.dto";
import { Label, LabelDocument } from "./database/schemas/Label.schema";

@Injectable()
 export class LabelService {
    constructor(@InjectModel(Label.name) protected readonly LabelModel : Model<LabelDocument>) {}

    async create (createLabelDto : CreateLabelDto) : Promise<Label>{
        const createdLabel = new this.LabelModel({
            _id: new Types.ObjectId(),
            ...createLabelDto
        });
        return createdLabel.save();
    }

    async find() : Promise<Label[]> {
        const query = this.LabelModel.find().select('-location -dashboardPriotiy -placement -equipNumber -device');
        return query.exec();
    }

    async findOne(entityFilterQuery : FilterQuery<LabelDocument>) : Promise<Label>{
        return this.LabelModel.findById(entityFilterQuery).exec();
    }

    async findOneAndUpdate (entityFilterQuery : FilterQuery<LabelDocument>, updatedLabel : UpdateQuery<LabelDocument>) : Promise<Label>{
        return this.LabelModel.findOneAndUpdate(
            entityFilterQuery, 
            updatedLabel, {new : true}
        ).exec();
    }

    async delete(entityFilterQuery : FilterQuery<LabelDocument>) : Promise<Label>{
        return this.LabelModel.findByIdAndRemove(entityFilterQuery)
    }
}
