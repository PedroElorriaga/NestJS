import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Book extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly nome: string;
  readonly autor: object;
  readonly linguagem: string;
  readonly anoDeLancamento: number;
  readonly paginas: number;
}
