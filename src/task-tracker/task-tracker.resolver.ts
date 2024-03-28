import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskTrackerService } from './task-tracker.service';
import { TaskTracker } from './entities/task-tracker.entity';
import { CreateTaskTrackerInput } from './dto/create-task-tracker.input';
import { UpdateTaskTrackerInput } from './dto/update-task-tracker.input';

@Resolver(() => TaskTracker)
export class TaskTrackerResolver {
  constructor(private readonly taskTrackerService: TaskTrackerService) {}

  @Mutation(() => TaskTracker)
  createTaskTracker(@Args('createTaskTrackerInput') createTaskTrackerInput: CreateTaskTrackerInput) {
    return this.taskTrackerService.create(createTaskTrackerInput);
  }

  @Query(() => [TaskTracker], { name: 'taskTrackers' })
  findAll() {
    return this.taskTrackerService.findAll();
  }

  @Query(() => TaskTracker, { name: 'taskTracker' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.taskTrackerService.findOne(id);
  }

  @Mutation(() => TaskTracker)
  updateTaskTracker(@Args('updateTaskTrackerInput') updateTaskTrackerInput: UpdateTaskTrackerInput) {
    return this.taskTrackerService.update(updateTaskTrackerInput.id, updateTaskTrackerInput);
  }

  @Mutation(() => TaskTracker)
  removeTaskTracker(@Args('id', { type: () => Int }) id: number) {
    return this.taskTrackerService.remove(id);
  }
}
