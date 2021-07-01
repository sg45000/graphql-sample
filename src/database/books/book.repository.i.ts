import {BookEntity} from './book.entity';
import {Injectable} from '@nestjs/common';

@Injectable()
export abstract class BookRepositoryI {
    abstract findAll(): Promise<BookEntity[]>

    abstract findById(id: number): Promise<BookEntity | undefined>

    abstract addOne(book: BookEntity): Promise<BookEntity>

    abstract delete(id: number): Promise<void>
}
