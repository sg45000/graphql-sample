import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {BookEntity} from '../database/books/book.entity';
import {NotFoundException} from '@nestjs/common';
import {BooksService} from './books.service';
import {BooksDto} from './books.dto';

@Resolver('Books')
export class BooksResolver {
    constructor(
        private readonly booksService: BooksService,
    ) {}

  @Query((returns) => [BookEntity])
    async getBooks(): Promise<BookEntity[]> {
        return await this.booksService.findAll();
    }

  @Query((returns) => BookEntity)
  async getBook(@Args({name: 'id', type: () => Int}) id: number) {
      const book = await this.booksService.findOneById(id);
      if (!book) {
          throw new NotFoundException(id);
      }
      return book;
  }

  @Mutation((returns) => BookEntity)
  async addBook(@Args('newBook') newBook: BooksDto): Promise<BookEntity> {
      return await this.booksService.create(newBook);
  }

  @Mutation((returns) => Boolean)
  async removeBook(@Args({name: 'id', type: () => Int}) id: number) {
      try{
          await this.booksService.remove(id);
          return true;
      } catch (e) {
          return false;
      }
  }
}
