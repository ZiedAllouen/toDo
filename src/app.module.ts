import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ConfigModule.forRoot(), TasksModule], //configModule allow us to use environement variables
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
