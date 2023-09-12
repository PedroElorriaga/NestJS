import { Module } from '@nestjs/common';
import { BooksController } from './controller/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Pedrinho:1234@nestjs.1w6dmqm.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [BooksController],
  providers: [],
})
export class AppModule {}
