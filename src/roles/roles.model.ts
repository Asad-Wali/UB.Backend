/* eslint-disable prettier/prettier */
export class Role {
  Title: string;
  Description: string;
  status: RoleStatus;
}
export enum RoleStatus {
  Active = 1,
  Disabled = 0,
}
