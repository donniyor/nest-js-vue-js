import { Column, Table, Model, DataType } from 'sequelize-typescript';

interface TaskCreationAttribute {
  task: string;
}

@Table({ tableName: 'task' })
export class Task extends Model<Task, TaskCreationAttribute> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  task: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isActive: boolean;
}
