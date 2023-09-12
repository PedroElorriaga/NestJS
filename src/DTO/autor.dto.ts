import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AutorDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  nome: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  vulgo: string;
}
