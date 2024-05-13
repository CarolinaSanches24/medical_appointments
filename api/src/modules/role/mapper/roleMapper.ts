import { BaseDomain } from "../../../../packages/services/core/baseDomain";
import { BaseMapper } from "../../../../packages/services/core/baseMapper";
import { Role } from "../domain/role";

class RoleMapper extends BaseMapper{
    constructor(){
        super();
    }
    toDomain(raw: object):Role {
        return raw as Role;
    }
    toPersistence(data: BaseDomain): string {
        throw new Error('Method not implemented.');
    }
}

export const roleMapper = new RoleMapper();