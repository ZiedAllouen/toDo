import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDoc = Task & Document

@Schema()
export class Task{

@Prop({required:[true, 'Please provide a value for the Title field !  '] })
title:string;

@Prop({required:[true, 'Please provide a value for the Description field !  '] })
description:string;
}

export const TaskSchema=SchemaFactory.createForClass(Task);