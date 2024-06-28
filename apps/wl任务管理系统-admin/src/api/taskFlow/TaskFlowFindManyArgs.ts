import { TaskFlowWhereInput } from "./TaskFlowWhereInput";
import { TaskFlowOrderByInput } from "./TaskFlowOrderByInput";

export type TaskFlowFindManyArgs = {
  where?: TaskFlowWhereInput;
  orderBy?: Array<TaskFlowOrderByInput>;
  skip?: number;
  take?: number;
};
