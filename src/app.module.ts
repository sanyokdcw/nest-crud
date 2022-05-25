import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/cars.module';
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

@Module({
  imports: [
    // ConfigModule для работы с енв
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      entities: ['dist/**/**/*.entity{.js,.ts}'],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy()
    }),
    CarsModule,
  ],
})
export class AppModule {}
