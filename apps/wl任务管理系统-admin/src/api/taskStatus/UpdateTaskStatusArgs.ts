import { TaskStatusWhereUniqueInput } from "./TaskStatusWhereUniqueInput";
import { TaskStatusUpdateInput } from "./TaskStatusUpdateInput";

export type UpdateTaskStatusArgs = {
  where: TaskStatusWhereUniqueInput;
  data: TaskStatusUpdateInput;
};
