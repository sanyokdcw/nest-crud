import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../entity/car.entity';
import { Repository, UpdateResult } from 'typeorm';
import { StoreCarDto } from '../dto/storeCarDto';
import { UpdateCarDto } from '../dto/updateCarDto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  async getAll(): Promise<Car[]> {
    return await this.carsRepository.find();
  }

  async getOne(id: number): Promise<Car> {
    return await this.carsRepository.findOne(id);
  }

  async store(payload: StoreCarDto): Promise<Car> {
    return await this.carsRepository.save(payload);
  }

  async update(id: number, payload: UpdateCarDto): Promise<UpdateResult> {
    return await this.carsRepository.update(id, payload);
  }

  async destroy(id: number) {
    // Вместо обычного удаления используем softDelete
    return await this.carsRepository.softDelete(id);
  }
}
