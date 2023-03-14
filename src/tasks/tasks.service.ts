import { TaskDto } from './../dto/tasks.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task,TaskDoc } from 'src/models/tasks.models';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDoc>) {}

    Add(body:TaskDto){
        return this.taskModel.create(body);
    }

    ShowAll(){
        return this.taskModel.find();
    }

    ShowOne(id:string){
        return this.taskModel.findById({_id:id})
    }

    Update(id:string,body:TaskDto){
        return this.taskModel.findByIdAndUpdate(
            {_id:id},
            {$set:body},
            {new:true}
            )
    }

    Delete(id:string){
        return this.taskModel.remove({_id:id})
    }
    Search(key:string){
      
        return 'search page'
    }
}
