import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { AutorDTO } from './autor.dto';
import { Type } from 'class-transformer';

export class BookDTO {
  @IsNotEmpty()
  @IsString()
  readonly nome: string;

  @IsNotEmpty()
  @Type(() => AutorDTO) // CRIA TYPE
  @ValidateNested({ each: true }) // VALIDA CADA ITEM DENTRO DO ARRAY
  readonly autor: AutorDTO[];

  @IsNotEmpty()
  @IsString()
  readonly linguagem: string;

  @IsNotEmpty()
  @IsNumber()
  readonly anoDeLancamento: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly paginas: number;
}
