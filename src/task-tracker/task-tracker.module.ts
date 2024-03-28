import { Module } from '@nestjs/common';
import { TaskTrackerService } from './task-tracker.service';
import { TaskTrackerResolver } from './task-tracker.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TaskTrackerResolver, TaskTrackerService, PrismaService],
})
export class TaskTrackerModule {}
