import { Module } from "@nestjs/common";
import { TaskFlowModuleBase } from "./base/taskFlow.module.base";
import { TaskFlowService } from "./taskFlow.service";
import { TaskFlowController } from "./taskFlow.controller";
import { TaskFlowResolver } from "./taskFlow.resolver";

@Module({
  imports: [TaskFlowModuleBase],
  controllers: [TaskFlowController],
  providers: [TaskFlowService, TaskFlowResolver],
  exports: [TaskFlowService],
})
export class TaskFlowModule {}
