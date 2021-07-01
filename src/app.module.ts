import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import {join} from 'path';
import {BooksModule} from './books/books.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            playground    : true,
            // autoSchemaFile: join(__dirname, '..', 'schema.graphql'),
            autoSchemaFile: 'schema.graphql',
        }),
        BooksModule,
    ],
    controllers: [AppController],
    providers  : [AppService],
})
export class AppModule {}
