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
}