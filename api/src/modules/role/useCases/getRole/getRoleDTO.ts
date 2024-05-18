import { Role } from "../../domain/role";

export interface GetRoleDTO{
    id:number;
}

export interface GetPermissionResponseDTO extends Role{}