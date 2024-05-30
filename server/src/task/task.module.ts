import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from '../models/tasks.model';

@Module({
  providers: [TaskService],
  controllers: [TaskController],
  imports: [SequelizeModule.forFeature([Task])],
  exports: [TaskService],
})
export class TaskModule {}
