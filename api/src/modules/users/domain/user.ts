import { BaseDomain } from "../../../../../packages/services/core/baseDomain";
export interface User extends BaseDomain {
	email: string;
	password: string|undefined;
	roleId: number;
	phone: string;
}
