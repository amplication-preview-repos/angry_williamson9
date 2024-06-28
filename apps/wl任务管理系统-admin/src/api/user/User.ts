export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  password: string | null;
  roles?: Array<"Option1">;
  updatedAt: Date;
  username: string;
};
