
import { BaseMapper } from '../../../../../packages/services/core/baseMapper';
import {User} from '../domain/user';

class UserMapper extends BaseMapper {
	constructor() {
		super();
	}

	toDomain(raw: object): User {
		return raw as User;
	}

	toPublicDomain(raw: User):User{
		return {
			...raw,
			password: undefined,
			id: undefined,
		};
	}

	toPersistence(data: any): string {
		throw new Error('Method not implemented.');
	}
}

export const userMapper = new UserMapper();