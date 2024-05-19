import { RoleRepo} from './../../repo/roleRepo';
import { UseCase, UseCaseError } from './../../../../../../packages/services/core/useCase';
import { GetPermissionResponseDTO, GetRoleDTO } from "./getRoleDTO";

export class GetRoleUseCase implements UseCase<GetRoleDTO, Promise<GetPermissionResponseDTO>>{
    private roleRepo:RoleRepo;

    constructor(roleRepo:RoleRepo){
        this.roleRepo = roleRepo;
    }

    public async execute(request: GetRoleDTO): Promise<GetPermissionResponseDTO> {
        const result = await this.roleRepo.getWithId(request.id);

        if(!result)throw new UseCaseError('Role not found',404);

        return result;
    }
}