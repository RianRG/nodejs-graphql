import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Student } from "../models/student-model";
import { PrismaService } from "../services/prisma.service";
import { StudentDTO } from "../dtos/student-dto";

//not using dependecy injection..
const prisma = new PrismaService()

@Resolver()
export class StudentResolver{
  
  @Query(() => [Student])
  async listStudents(){
    return prisma.listStudents();
  }

  @Mutation(() => Student)
  async createStudent(@Arg('data', () => StudentDTO) data: StudentDTO){
    return prisma.createStudent(data);
  }
}