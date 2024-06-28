import { TaskFlow } from "../taskFlow/TaskFlow";

export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  status: string | null;
  taskFlows?: Array<TaskFlow>;
  title: string | null;
  updatedAt: Date;
};
