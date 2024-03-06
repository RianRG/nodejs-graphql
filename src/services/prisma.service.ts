import { PrismaClient } from "@prisma/client";

interface StudentDTO{
  nick: string;
  email: string;
}

export class PrismaService extends PrismaClient{
  async listStudents(){
    return await this.student.findMany();
  }

  async createStudent(body: StudentDTO){

    const { nick, email } = body;

    return await this.student.create({
      data: {
        nick,
        email
      }
    })
  }

  async listStudentCourses(id: string){
    const relation = await this.studentCourse.findMany({
      where: {
        studentId: id
      }
    })
    
    const courses = relation.map(async data =>{
      const { title } = await this.course.findUnique({
        where: {
          id: data.courseId
        }
      })
      return {
        id: data.courseId,
        title,
      }
    })

    console.log(courses);
    return courses;
  }
}