import { TaskFlowUpdateManyWithoutTasksInput } from "./TaskFlowUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  assignedTo?: string | null;
  createdBy?: string | null;
  description?: string | null;
  status?: string | null;
  taskFlows?: TaskFlowUpdateManyWithoutTasksInput;
  title?: string | null;
};
