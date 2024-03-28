import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaskTrackerModule } from './task-tracker/task-tracker.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:join(process.cwd(),'src/schema.gql'),
      sortSchema:true,
    }),
    TaskTrackerModule,
  ],
  providers: [PrismaService],
  
})
export class AppModule {}
