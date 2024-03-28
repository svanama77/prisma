import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TaskTracker {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;
}
