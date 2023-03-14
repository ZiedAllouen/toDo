import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDoc = Task & Document

@Schema()
export class Task{

@Prop({required:true})
title:string;

@Prop({required:true})
description:string;
}

export const TaskSchema=SchemaFactory.createForClass(Task);