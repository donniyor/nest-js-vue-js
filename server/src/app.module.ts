import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { Task } from './models/tasks.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [Task],
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Task]),
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
