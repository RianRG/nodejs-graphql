import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Login{
  @Field(() => String)
  accessToken: string
}