export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string | null;
  roles?: Array<"Option1">;
  username: string;
};
