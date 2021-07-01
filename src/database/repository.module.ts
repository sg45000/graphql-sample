import {Module} from '@nestjs/common';
import {BookRepositoryI} from './books/book.repository.i';
import {BookMockRepository} from './books/book.mock.repository';
import {Provider} from '@nestjs/common/interfaces/modules/provider.interface';
const bookRepositoryProvider: Provider = {
    provide : BookRepositoryI,
    useClass:
        process.env.NODE_ENV === 'development'
            ? BookMockRepository
            : BookMockRepository,
};

@Module({
    controllers: [],
    providers  : [bookRepositoryProvider],
    imports    : [],
    exports    : [BookRepositoryI],
})
export class RepositoryModule {}

