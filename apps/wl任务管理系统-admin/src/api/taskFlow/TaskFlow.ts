import { Task } from "../task/Task";

export type TaskFlow = {
  comments: string | null;
  createdAt: Date;
  fromUser: string | null;
  id: string;
  status: string | null;
  task?: Task | null;
  toUser: string | null;
  updatedAt: Date;
};
