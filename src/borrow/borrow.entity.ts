import { Book } from 'src/books/book.entity';
import { User } from 'src/users/user.entity';

export class Borrow {
  id: number;
  book: Book;
  user: User;
  borrowDate: Date;
  returnDate: Date;
}
