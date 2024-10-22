import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Book } from '../books/book.entity';
import { User } from '../users/user.entity';

@Entity()
export class Borrow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book)
  book: Book;

  @ManyToOne(() => User)
  user: User;

  @Column()
  borrowDate: Date;

  @Column({ nullable: true })
  returnDate: Date;
}
