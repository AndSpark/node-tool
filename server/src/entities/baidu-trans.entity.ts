
import { Column, Entity } from "typeorm";
import { AbstractEntity } from "./abstract-entity";

@Entity()
export class BaiduTransEntity extends AbstractEntity {

  @Column()
  BDUSS: string

  @Column()
  appid: string

  @Column()
  secret: string
}