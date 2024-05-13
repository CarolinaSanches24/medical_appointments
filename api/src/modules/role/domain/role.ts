import { BaseDomain } from "../../../../packages/services/core/baseDomain";

export interface Role extends BaseDomain{
    name: string;
    description:string;
}