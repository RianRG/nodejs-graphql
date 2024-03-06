import { Query, Resolver } from "type-graphql";

@Resolver()
export class StudentResolver{
  
  @Query(() => String)
  async hello(){
    return 'hello'
  }
}