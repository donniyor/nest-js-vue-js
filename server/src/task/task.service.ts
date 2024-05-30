import { Injectable } from '@nestjs/common';
import { Task } from '../models/tasks.model';
import { CreateTaskDto } from './dto/CreateTaskDto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TaskService {
  private success: object = { status: 'success', save: true };
  private fail: object = { status: 'fail', save: false };
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(dto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.create(dto);
  }

  async getAllTask(): Promise<Task[]> {
    return await this.taskRepository.findAll();
  }

  async getOneTask(id: number): Promise<Task> {
    return await this.taskRepository.findOne({ where: { id: id } });
  }

  async endTask(id: number): Promise<object> {
    const endTask: [affectedCount: number] = await this.taskRepository.update(
      { isActive: true },
      { where: { id: id } },
    );
    return endTask[0] ? this.success : this.fail;
  }

  async updateTask(dto: CreateTaskDto, id: number): Promise<object> {
    const updateTask: [affectedCount: number] =
      await this.taskRepository.update(
        { task: dto.task },
        { where: { id: id } },
      );
    return updateTask[0] ? this.success : this.fail;
  }
}
