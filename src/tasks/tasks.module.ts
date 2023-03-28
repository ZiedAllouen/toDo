import { AuthModule } from './../auth/auth.module';
import { Task, TaskSchema } from './../models/tasks.models';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports:[
    AuthModule
    ,MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
