import * as graphql from "@nestjs/graphql";
import { TaskStatusResolverBase } from "./base/taskStatus.resolver.base";
import { TaskStatus } from "./base/TaskStatus";
import { TaskStatusService } from "./taskStatus.service";

@graphql.Resolver(() => TaskStatus)
export class TaskStatusResolver extends TaskStatusResolverBase {
  constructor(protected readonly service: TaskStatusService) {
    super(service);
  }
}
