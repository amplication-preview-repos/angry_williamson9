import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskStatusService } from "./taskStatus.service";
import { TaskStatusControllerBase } from "./base/taskStatus.controller.base";

@swagger.ApiTags("taskStatuses")
@common.Controller("taskStatuses")
export class TaskStatusController extends TaskStatusControllerBase {
  constructor(protected readonly service: TaskStatusService) {
    super(service);
  }
}
