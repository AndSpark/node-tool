import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'mongodb',
      port: 27017,
      host: '192.168.3.16',
      synchronize: true,
      entities: ['dist/**/*.entity.js'],
    }
  }
}