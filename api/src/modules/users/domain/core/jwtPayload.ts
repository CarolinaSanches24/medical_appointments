export interface PublicJwtPayload {
	userId: string;
	exp: number;
}

export interface PrivateJwtPayload {
	roleId: number;
	pid: string;
	id: number;
	email: string;
}
