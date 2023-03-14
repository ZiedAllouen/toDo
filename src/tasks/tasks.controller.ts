import { Controller, Post, Get ,Put, Delete, Query } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { TasksService } from './tasks.service';

@Controller('Tasks')
export class TasksController {
    constructor(private readonly seeTasks:TasksService){}

    //add new task
    @Post()
    AddTask(){
        return this.seeTasks.Add()
    }
    
    //get all tasks
    @Get()
    ShowTasks(){
        return this.seeTasks.ShowAll()
    }

    //get one task
    @Get('/:id')
    showOneTask(@Param() {id}){
        return this.seeTasks.ShowOne()
    }

    //update a task 
    @Put('/:id')
    UpdateTask(@Param() {id}){
        return this.seeTasks.Update()
    }

    //delete a task
    @Delete('/:id')
    DeleteTask(@Param(){id}){
        return this.seeTasks.Delete()
    }

    //search a task
    @Post('/search')
    Search(@Query() {key}){
        return this.seeTasks.Search()
    }

}
