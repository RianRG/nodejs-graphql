import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Course{
  @Field(() => ID)
  id: string

  @Field(() => String)
  title: string
}