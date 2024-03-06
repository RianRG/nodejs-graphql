import { Field, InputType } from "type-graphql";

@InputType()
export class StudentDTO{
  @Field(() => String)
  nick: string
  
  @Field(() => String)
  email: string
}