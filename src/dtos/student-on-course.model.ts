import { MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class StudentOnCourseDTO{
  @Field(() => String)
  @MinLength(5)
  studentId: string

  @Field(() => String)
  @MinLength(5)
  courseId: string
}