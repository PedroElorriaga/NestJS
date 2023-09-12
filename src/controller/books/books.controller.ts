import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
import { BookDTO } from '../../DTO/books.dto';

@Controller('books') // ENDPOINT
export class BooksController {
  @Get()
  pegarTodosLivros(): string {
    return 'Aqui estão todos os livros';
  }

  @Post()
  salvarLivro(@Body() req: BookDTO): BookDTO {
    return req;
  }

  @Patch()
  atualizarLivro(): string {
    return 'Livro Atualizado';
  }

  @Delete()
  deletarlivro(): string {
    return 'Livro deletado';
  }
}
