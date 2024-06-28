import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskStatusServiceBase } from "./base/taskStatus.service.base";

@Injectable()
export class TaskStatusService extends TaskStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
