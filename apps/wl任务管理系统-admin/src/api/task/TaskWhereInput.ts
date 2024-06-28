import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskFlowListRelationFilter } from "../taskFlow/TaskFlowListRelationFilter";

export type TaskWhereInput = {
  assignedTo?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  taskFlows?: TaskFlowListRelationFilter;
  title?: StringNullableFilter;
};
