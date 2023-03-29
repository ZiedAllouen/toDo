import { IsNotEmpty } from "class-validator";

export class TaskDto{

@IsNotEmpty( { message:` Please provide a value for the Title field !   ` })
title:string;

@IsNotEmpty({ message: "Please provide a value for the Description field !" })
description:string;
}
