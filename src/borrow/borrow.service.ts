import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Borrow } from './borrow.entity';

@Injectable()
export class BorrowService {
  constructor(
    @InjectRepository(Borrow)
    private borrowRepository: Repository<Borrow>,
  ) {}

  create(borrow: Borrow): Promise<Borrow> {
    return this.borrowRepository.save(borrow);
  }

  findAll(): Promise<Borrow[]> {
    return this.borrowRepository.find({ relations: ['book', 'user'] });
  }

  findOne(id: number): Promise<Borrow> {
    return this.borrowRepository.findOne({ where: { id }, relations: ['book', 'user'] });
  }

  remove(id: number): Promise<void> {
    return this.borrowRepository.delete(id).then(() => undefined);
  }
}
