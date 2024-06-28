import { TaskStatusWhereInput } from "./TaskStatusWhereInput";
import { TaskStatusOrderByInput } from "./TaskStatusOrderByInput";

export type TaskStatusFindManyArgs = {
  where?: TaskStatusWhereInput;
  orderBy?: Array<TaskStatusOrderByInput>;
  skip?: number;
  take?: number;
};
