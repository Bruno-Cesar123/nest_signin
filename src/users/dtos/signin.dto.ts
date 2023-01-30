import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class SigninDto {

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;

}