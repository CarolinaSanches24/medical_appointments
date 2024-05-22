import { UseCase } from "../../../../../../packages/services/core/useCase";
import { encryption } from "../../../../../../packages/services/utils/encryption";
import { UserRepo } from "../../repo/userRepo";
import { CreateUserDTO, CreateUserResponseDTO } from "./createUserDTO";
import {v4} from 'uuid';
export class CreateUserUseCase implements UseCase<CreateUserDTO, Promise<CreateUserResponseDTO>> {
	private userRepo: UserRepo;

	constructor(userRepo: UserRepo) {
		this.userRepo = userRepo;
	}

	public async execute(request: CreateUserDTO): Promise<CreateUserResponseDTO> {

		const pid = v4();

		const res = await this.userRepo.insert({
			pid,
			phone: request.phone,
			email: request.email,
			password: await encryption.encrypt(request.password),
			roleId: request.roleId ? request.roleId : 1,
		});

		return {
			id: res.returnValue.insertId,
			pid,
		};
	}
}