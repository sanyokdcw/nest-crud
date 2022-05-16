import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from '../services/cars.service';
import { Car } from '../entity/car.entity';
import { StoreCarDto } from '../dto/storeCarDto';
import { UpdateCarDto } from '../dto/updateCarDto';
import { UpdateResult } from 'typeorm';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll(): Promise<Car[]> {
    return this.carsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Car> {
    return this.carsService.getOne(id);
  }

  @Post()
  store(@Body() payload: StoreCarDto): Promise<Car> {
    return this.carsService.store(payload);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCarDto,
  ): Promise<UpdateResult> {
    return this.carsService.update(id, payload);
  }

  @Delete(':id')
  destroy(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.destroy(id);
  }
}
