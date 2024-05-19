import { roleRepo } from "../../repo/roleRepo";
import { GetRoleUseCase } from "./getRoleUseCase";

export const getRoleUseCase = new GetRoleUseCase(roleRepo);