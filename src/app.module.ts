import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MDB), 
    TasksModule], 
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
