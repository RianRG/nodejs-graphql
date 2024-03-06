import { Query, Resolver } from "type-graphql";
import { Student } from "../models/student-model";
import { PrismaService } from "../services/prisma.service";

//not using dependecy injection..
const prisma = new PrismaService()

@Resolver()
export class StudentResolver{
  
  @Query(() => [Student])
  async listStudents(){
    return prisma.listStudents();
  }
}