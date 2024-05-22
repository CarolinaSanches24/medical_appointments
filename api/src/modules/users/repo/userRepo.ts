import { BaseRepo } from '../../../../../packages/services/core/baseRepo';
import {User} from '../domain/user';

export class UserRepo extends BaseRepo {
	constructor() {
		super('Users');
	}

	public async insert(data: User) {
		return await super.insert(data);
	}

	public async delete(id: number) {
		return await super.delete(id);
	}

	public async update<T>(id: number, data: User) {
		return await super.update(id, data);
	}

}