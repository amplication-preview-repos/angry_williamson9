import { TaskStatus as TTaskStatus } from "../api/taskStatus/TaskStatus";

export const TASKSTATUS_TITLE_FIELD = "name";

export const TaskStatusTitle = (record: TTaskStatus): string => {
  return record.name?.toString() || String(record.id);
};
