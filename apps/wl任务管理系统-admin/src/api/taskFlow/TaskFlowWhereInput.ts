import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type TaskFlowWhereInput = {
  comments?: StringNullableFilter;
  fromUser?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  task?: TaskWhereUniqueInput;
  toUser?: StringNullableFilter;
};
