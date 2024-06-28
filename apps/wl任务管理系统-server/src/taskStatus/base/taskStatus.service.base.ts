/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TaskStatus as PrismaTaskStatus } from "@prisma/client";

export class TaskStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TaskStatusCountArgs, "select">
  ): Promise<number> {
    return this.prisma.taskStatus.count(args);
  }

  async taskStatuses(
    args: Prisma.TaskStatusFindManyArgs
  ): Promise<PrismaTaskStatus[]> {
    return this.prisma.taskStatus.findMany(args);
  }
  async taskStatus(
    args: Prisma.TaskStatusFindUniqueArgs
  ): Promise<PrismaTaskStatus | null> {
    return this.prisma.taskStatus.findUnique(args);
  }
  async createTaskStatus(
    args: Prisma.TaskStatusCreateArgs
  ): Promise<PrismaTaskStatus> {
    return this.prisma.taskStatus.create(args);
  }
  async updateTaskStatus(
    args: Prisma.TaskStatusUpdateArgs
  ): Promise<PrismaTaskStatus> {
    return this.prisma.taskStatus.update(args);
  }
  async deleteTaskStatus(
    args: Prisma.TaskStatusDeleteArgs
  ): Promise<PrismaTaskStatus> {
    return this.prisma.taskStatus.delete(args);
  }
}
