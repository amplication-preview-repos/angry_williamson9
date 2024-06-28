import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskFlowService } from "./taskFlow.service";
import { TaskFlowControllerBase } from "./base/taskFlow.controller.base";

@swagger.ApiTags("taskFlows")
@common.Controller("taskFlows")
export class TaskFlowController extends TaskFlowControllerBase {
  constructor(protected readonly service: TaskFlowService) {
    super(service);
  }
}
