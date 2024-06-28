import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type TaskFlowUpdateInput = {
  comments?: string | null;
  fromUser?: string | null;
  status?: string | null;
  task?: TaskWhereUniqueInput | null;
  toUser?: string | null;
};
