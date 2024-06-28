import { SortOrder } from "../../util/SortOrder";

export type TaskFlowOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  fromUser?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  taskId?: SortOrder;
  toUser?: SortOrder;
  updatedAt?: SortOrder;
};
