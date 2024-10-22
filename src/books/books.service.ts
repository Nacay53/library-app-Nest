import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne({ where: { id } });
  }

  create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async update(id: number, updatedBook: Partial<Book>): Promise<Book> {
    await this.booksRepository.update(id, updatedBook);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.booksRepository.delete(id).then(() => undefined);
  }
}
