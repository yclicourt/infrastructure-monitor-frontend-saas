import { Role } from "../validation/enums/role-member.enum";

export type Membership = {
  id: number;
  organizationId: number;
  userId: number;
  role: Role[];
  organization: {
    name: string;
  };
};

export type Organization = {
  id: number;
  name: string;
};
