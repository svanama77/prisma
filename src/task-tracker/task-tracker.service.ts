import { Injectable } from '@nestjs/common';
import { CreateTaskTrackerInput } from './dto/create-task-tracker.input';
import { UpdateTaskTrackerInput } from './dto/update-task-tracker.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskTrackerService {
  constructor(private prisma: PrismaService) {}
  async create(createTaskTrackerInput: CreateTaskTrackerInput) {
    return await this.prisma.tasks.create({data :{title:createTaskTrackerInput.title}});
  }

  findAll() {
    return this.prisma.tasks.findMany();
  }

  findOne(id: number) {
    return this.prisma.tasks.findUnique({where:{id}});
  }

  update(id: number, updateTaskTrackerInput: UpdateTaskTrackerInput) {
    return this.prisma.tasks.update({
      where :{id},
      data:{title:updateTaskTrackerInput.title},
    });
  }

  remove(id: number) {
    return  this.prisma.tasks.delete({where:{id}});
  }
}
