export interface CreateUserDTO {
	phone: string;
	email: string;
	password: string;
	roleId?: number;
}

export interface CreateUserResponseDTO {
	id: number;
	pid: string;
}