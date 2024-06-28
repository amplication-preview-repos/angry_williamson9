import { TaskFlowCreateNestedManyWithoutTasksInput } from "./TaskFlowCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  assignedTo?: string | null;
  createdBy?: string | null;
  description?: string | null;
  status?: string | null;
  taskFlows?: TaskFlowCreateNestedManyWithoutTasksInput;
  title?: string | null;
};
