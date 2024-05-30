import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '../models/tasks.model';
import { CreateTaskDto } from './dto/CreateTaskDto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.getAllTask();
  }

  @Post()
  createTask(@Body() dto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(dto);
  }

  @Get(':id')
  getOneTask(@Param('id') id: number): Promise<Task> {
    return this.taskService.getOneTask(id);
  }

  @Put('end/:id')
  endTask(@Param('id') id: number): Promise<object> {
    return this.taskService.endTask(id);
  }

  @Put('update/:id')
  updateTask(
    @Body() dto: CreateTaskDto,
    @Param('id') id: number,
  ): Promise<object> {
    return this.taskService.updateTask(dto, id);
  }
}
