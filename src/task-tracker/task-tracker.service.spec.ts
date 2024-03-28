import { Test, TestingModule } from '@nestjs/testing';
import { TaskTrackerService } from './task-tracker.service';

describe('TaskTrackerService', () => {
  let service: TaskTrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskTrackerService],
    }).compile();

    service = module.get<TaskTrackerService>(TaskTrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
