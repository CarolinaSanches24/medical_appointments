import { Role } from "../domain/role";

export class RoleRepo extends BaseRepo{
    constructor(){
        super('Roles');
    }

    public async insert(data:Role){
        return await super.insert(data);
    }
    public async this.delete(id:number){
        return await super.delete(id);
    }

    public async update(id:number,data:Partial<Role>){
        return await super.update(id,data);
    }
    
}export const roleRepo = new RoleRepo();
