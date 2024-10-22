import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { BorrowModule } from './borrow/borrow.module';
import { Book } from './books/book.entity';
import { User } from './users/user.entity';
import { Borrow } from './borrow/borrow.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'library',
      entities: [Book, User, Borrow],
      synchronize: true,
    }),
    BooksModule,
    UsersModule,
    BorrowModule,
  ],
})
export class AppModule {}
