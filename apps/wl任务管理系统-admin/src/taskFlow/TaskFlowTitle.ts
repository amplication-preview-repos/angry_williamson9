import { TaskFlow as TTaskFlow } from "../api/taskFlow/TaskFlow";

export const TASKFLOW_TITLE_FIELD = "fromUser";

export const TaskFlowTitle = (record: TTaskFlow): string => {
  return record.fromUser?.toString() || String(record.id);
};
