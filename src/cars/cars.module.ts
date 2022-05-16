import { Module } from '@nestjs/common';
import { CarsController } from './controllers/cars.controller';
import { CarsService } from './services/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entity/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
