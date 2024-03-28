import { CreateTaskTrackerInput } from './create-task-tracker.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskTrackerInput extends PartialType(CreateTaskTrackerInput) {
  @Field(() => Int)
  id: number;

  @Field()
  title:string;


}
