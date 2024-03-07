import 'dotenv/config';

import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root, UseMiddleware } from "type-graphql";
import { Student } from "../models/student-model";
import { PrismaService } from "../services/prisma.service";
import { StudentDTO } from "../dtos/student-dto";
import { Course } from "../models/course-model";
import { StudentOnCourseDTO } from "../dtos/student-on-course.model";
import { Login } from "../models/login-model";
import { sign } from "jsonwebtoken";
import { Context, isAuth } from '../middlewares/isAuth';

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

  @Mutation(() => Login)
  async loginStudent(@Arg('data', () => StudentDTO) data: StudentDTO){
    const student = await prisma.findStudent(data.email);

    if(!student)
      throw new Error('User does not exist!');

    return {
      accessToken: sign({ userId: student.id }, process.env.PRIVATE_KEY, {
        expiresIn: '90m'
      })
    }
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  async me(@Ctx() { payload }: Context){
    return `Your user id: ${payload.userId}`
  }

}