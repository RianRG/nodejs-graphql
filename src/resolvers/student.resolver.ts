import { Query, Resolver } from "type-graphql";
import { Student } from "../models/student-model";

@Resolver()
export class StudentResolver{
  
  @Query(() => [Student])
  async listStudents(){
    return 
  }
}