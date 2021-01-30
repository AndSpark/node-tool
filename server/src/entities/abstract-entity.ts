import { ObjectId } from 'mongoose';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

export abstract class AbstractEntity extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
