import {BookEntity} from './book.entity';
import {BookRepositoryI} from './book.repository.i';
import {Injectable} from '@nestjs/common';

@Injectable()
export class BookMockRepository implements BookRepositoryI {
    constructor() {
        for(let i = 1; i < 25; i++) {
            const record: BookEntity = {
                id   : i,
                title: `本${i}`
            };
            this.inMemoryRecords.push(record);
        }
    }

    private inMemoryRecords: BookEntity[] = []

    async findAll(): Promise<BookEntity[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.inMemoryRecords);
            }, 100);
        });
    }

    async findById(id: number): Promise<BookEntity | undefined> {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const book = this.inMemoryRecords.find(r => r.id === id);
                if(!book) {
                    return resolve(undefined);
                }
                resolve(book);
            }, 100);
        });
    }

    async addOne(book: BookEntity): Promise<BookEntity> {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const lastR = this.inMemoryRecords.slice(-1)[0];
                book.id = lastR.id + 1;
                this.inMemoryRecords.push(book);
                resolve(book);
            }, 100);
        });
    }

    async delete(id: number): Promise<void> {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                this.inMemoryRecords = this.inMemoryRecords.filter(r => r.id !== id);
            }, 100);
        });
    }


}
