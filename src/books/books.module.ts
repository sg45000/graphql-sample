import {Module} from '@nestjs/common';
import {BooksResolver} from './books.resolver';
import {RepositoryModule} from '../database/repository.module';
import {BooksService} from './books.service';

@Module({
    controllers: [],
    providers  : [BooksResolver, BooksService],
    imports    : [RepositoryModule],
})
export class BooksModule {}
