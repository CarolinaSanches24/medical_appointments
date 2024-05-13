import {BaseDomain} from './baseDomain';

export interface IBaseMapper {
	toDomain: (raw: object) => BaseDomain;
	toPersistence: (data: BaseDomain) => string;
}

export abstract class BaseMapper implements IBaseMapper {
	abstract toDomain(raw: object): BaseDomain;

	abstract toPersistence(data: BaseDomain): string;
}