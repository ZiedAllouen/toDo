import { Controller, Post, Get ,Put, Delete, Query } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { TasksService } from './tasks.service';

@Controller('Tasks')
export class TasksController {
    constructor(private readonly seeTasks:TasksService){}

    //add new task
    @Post()
    AddTask(){
        return "Add new task";
    }
    
    //get all tasks
    @Get()
    ShowTasks(){
        return "Tasks";
    }

    //get one task
    @Get('/:id')
    showOneTask(@Param() {id}){
        return `Task of today ${id}`
    }

    //update a task 
    @Put('/:id')
    UpdateTask(@Param() {id}){
        return `the task with the id: ${id} is updated`
    }

    //delete a task
    @Delete('/:id')
    DeleteTask(@Param(){id}){
        return `the task with the id ${id} is now deleted`
    }

    //search a task
    @Post('/search')
    Search(@Query() {key}){
        return key ;
    }

}
