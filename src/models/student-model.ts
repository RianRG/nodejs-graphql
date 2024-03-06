import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Student{
  @Field(() => ID)
  id: string

  @Field(() => String)
  nick: string

  @Field(() => String)
  email: string

  @Field(() => Date)
  createdAt: Date
}