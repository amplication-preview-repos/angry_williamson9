import { Module } from "@nestjs/common";
import { TaskStatusModuleBase } from "./base/taskStatus.module.base";
import { TaskStatusService } from "./taskStatus.service";
import { TaskStatusController } from "./taskStatus.controller";
import { TaskStatusResolver } from "./taskStatus.resolver";

@Module({
  imports: [TaskStatusModuleBase],
  controllers: [TaskStatusController],
  providers: [TaskStatusService, TaskStatusResolver],
  exports: [TaskStatusService],
})
export class TaskStatusModule {}
