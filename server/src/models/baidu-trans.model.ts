import { IsString } from 'class-validator'

export class CreateBaiduTransDTO {
  @IsString()
  BDUSS: string

  @IsString()
  appid: string

  @IsString()
  secret: string
}