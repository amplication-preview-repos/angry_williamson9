import * as graphql from "@nestjs/graphql";
import { TaskFlowResolverBase } from "./base/taskFlow.resolver.base";
import { TaskFlow } from "./base/TaskFlow";
import { TaskFlowService } from "./taskFlow.service";

@graphql.Resolver(() => TaskFlow)
export class TaskFlowResolver extends TaskFlowResolverBase {
  constructor(protected readonly service: TaskFlowService) {
    super(service);
  }
}
