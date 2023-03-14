import { TaskDto } from './../dto/tasks.dto';
import { Controller, Post, Get ,Put, Delete, Query } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { TasksService } from './tasks.service';

@Controller('Tasks')
export class TasksController {
    constructor(private readonly seeTasks:TasksService){}

    //add new task
    @Post()
    AddTask(@Body() body: TaskDto){
        return this.seeTasks.Add(body)
    }
    
    //get all tasks
    @Get()
    ShowTasks(){
        return this.seeTasks.ShowAll()
    }

    //get one task
    @Get('/:id')
    showOneTask(@Param() {id}){
        return this.seeTasks.ShowOne(id)
    }

    //update a task 
    @Put('/:id')
    UpdateTask(@Param() {id},@Body() body:TaskDto){
        return this.seeTasks.Update(id,body)
    }

    //delete a task
    @Delete('/:id')
    DeleteTask(@Param(){id}){
        return this.seeTasks.Delete(id)
    }

    //search a task
    @Post('/search')
    Search(@Query() {key}){
        return this.seeTasks.Search(key)
    }

}
