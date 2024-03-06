import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { Student } from "../models/student-model";
import { PrismaService } from "../services/prisma.service";
import { StudentDTO } from "../dtos/student-dto";
import { Course } from "../models/course-model";
import { StudentOnCourseDTO } from "../dtos/student-on-course.model";

//not using dependecy injection..
const prisma = new PrismaService()

@Resolver(() => Student)
export class StudentResolver{
  
  @Query(() => [Student])
  async listStudents(){
    return prisma.listStudents();
  }

  @Mutation(() => Student)
  async createStudent(@Arg('data', () => StudentDTO) data: StudentDTO){
    return prisma.createStudent(data);
  }

  @FieldResolver(() => [Course])
  async courses(@Root() student: Student){
    return prisma.listStudentCourses(student.id);
  }

  @Mutation(() => Boolean)
  async registerStudentOnCourse(@Arg('data', () => StudentOnCourseDTO) data: StudentOnCourseDTO){
    prisma.registerStudentOnCourse(data);

    return true
  }

}