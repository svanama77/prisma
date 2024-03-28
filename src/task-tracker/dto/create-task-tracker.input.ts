import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskTrackerInput {
  @Field()
  title:string;
}
