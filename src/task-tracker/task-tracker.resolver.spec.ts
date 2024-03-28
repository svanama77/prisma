import { Test, TestingModule } from '@nestjs/testing';
import { TaskTrackerResolver } from './task-tracker.resolver';
import { TaskTrackerService } from './task-tracker.service';

describe('TaskTrackerResolver', () => {
  let resolver: TaskTrackerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskTrackerResolver, TaskTrackerService],
    }).compile();

    resolver = module.get<TaskTrackerResolver>(TaskTrackerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
