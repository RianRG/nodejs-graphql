import { Field, InputType } from "type-graphql";
import { IsEmail, MinLength } from 'class-validator'
@InputType()
export class StudentDTO{
  @Field(() => String)
  @MinLength(4)
  nick: string
  
  @Field(() => String)
  @MinLength(4)
  @IsEmail()
  email: string
}