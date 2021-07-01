import {Inject, Injectable} from '@nestjs/common';
import {BooksDto} from './books.dto';
import {BookEntity} from '../database/books/book.entity';
import {BookRepositoryI} from '../database/books/book.repository.i';

@Injectable()
export class BooksService {
    constructor(private readonly bookRepository: BookRepositoryI) {
    }

    async findAll(): Promise<BookEntity[]> {
        return await this.bookRepository.findAll();
    }

    async findOneById(id: number): Promise<BookEntity | undefined> {
        return await this.bookRepository.findById(id);
    }

    async create(book: BooksDto): Promise<BookEntity> {
        const bookEntity = new BookEntity();
        bookEntity.title = book.title;
        return await this.bookRepository.addOne(bookEntity);
    }

    async remove(id: number): Promise<void> {
        await this.bookRepository.delete(id);
    }
}
