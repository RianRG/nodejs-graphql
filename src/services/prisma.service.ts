import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient{
  async listStudents(){
    // return await this.student.findMany();
  }
}