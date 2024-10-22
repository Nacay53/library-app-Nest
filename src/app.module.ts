import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { BorrowModule } from './borrow/borrow.module';

@Module({
  imports: [BooksModule, UsersModule, BorrowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
