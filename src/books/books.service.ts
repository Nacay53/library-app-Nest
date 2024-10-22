import { Injectable } from '@nestjs/common';
import { Book } from './book.entity'

@Injectable()
export class BooksService {
    private books: Book[] = [];

    findAll(): Book[] {
        return this.books;
    }

    findOne(id: number): Book{
        return this.books(book => book.id == id)
    }

}
