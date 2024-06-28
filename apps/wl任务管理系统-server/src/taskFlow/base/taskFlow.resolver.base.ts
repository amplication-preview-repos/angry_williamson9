/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TaskFlow } from "./TaskFlow";
import { TaskFlowCountArgs } from "./TaskFlowCountArgs";
import { TaskFlowFindManyArgs } from "./TaskFlowFindManyArgs";
import { TaskFlowFindUniqueArgs } from "./TaskFlowFindUniqueArgs";
import { CreateTaskFlowArgs } from "./CreateTaskFlowArgs";
import { UpdateTaskFlowArgs } from "./UpdateTaskFlowArgs";
import { DeleteTaskFlowArgs } from "./DeleteTaskFlowArgs";
import { Task } from "../../task/base/Task";
import { TaskFlowService } from "../taskFlow.service";
@graphql.Resolver(() => TaskFlow)
export class TaskFlowResolverBase {
  constructor(protected readonly service: TaskFlowService) {}

  async _taskFlowsMeta(
    @graphql.Args() args: TaskFlowCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TaskFlow])
  async taskFlows(
    @graphql.Args() args: TaskFlowFindManyArgs
  ): Promise<TaskFlow[]> {
    return this.service.taskFlows(args);
  }

  @graphql.Query(() => TaskFlow, { nullable: true })
  async taskFlow(
    @graphql.Args() args: TaskFlowFindUniqueArgs
  ): Promise<TaskFlow | null> {
    const result = await this.service.taskFlow(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TaskFlow)
  async createTaskFlow(
    @graphql.Args() args: CreateTaskFlowArgs
  ): Promise<TaskFlow> {
    return await this.service.createTaskFlow({
      ...args,
      data: {
        ...args.data,

        task: args.data.task
          ? {
              connect: args.data.task,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => TaskFlow)
  async updateTaskFlow(
    @graphql.Args() args: UpdateTaskFlowArgs
  ): Promise<TaskFlow | null> {
    try {
      return await this.service.updateTaskFlow({
        ...args,
        data: {
          ...args.data,

          task: args.data.task
            ? {
                connect: args.data.task,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TaskFlow)
  async deleteTaskFlow(
    @graphql.Args() args: DeleteTaskFlowArgs
  ): Promise<TaskFlow | null> {
    try {
      return await this.service.deleteTaskFlow(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Task, {
    nullable: true,
    name: "task",
  })
  async getTask(@graphql.Parent() parent: TaskFlow): Promise<Task | null> {
    const result = await this.service.getTask(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
