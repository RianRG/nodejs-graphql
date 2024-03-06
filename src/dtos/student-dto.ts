import { Field, InputType } from "type-graphql";
import { MinLength } from 'class-validator'
@InputType()
export class StudentDTO{
  @Field(() => String)
  @MinLength(4)
  nick: string
  
  @Field(() => String)
  @MinLength(4)
  email: string
}