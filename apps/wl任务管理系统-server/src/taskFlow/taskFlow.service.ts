import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskFlowServiceBase } from "./base/taskFlow.service.base";

@Injectable()
export class TaskFlowService extends TaskFlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
