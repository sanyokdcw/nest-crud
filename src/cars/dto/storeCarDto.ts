import { IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';
/*
Через dto прописываем правила для валидации и сообщения в случае ошибки.
https://github.com/typestack/class-validator#validation-decorators - декораторы для валидации.
*/
export class StoreCarDto {
  @IsString()
  @IsNotEmpty({ message: 'Поле title не может быть пустым.' })
  title?: string;

  @IsNumberString()
  @Length(4, 4, { message: 'Год должен состоять из 4 чисел' })
  year: string;
}
