export type Plain = null | undefined | boolean | number | string;

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: object;
	company: object;
}

export interface Post {
	userId: User['id'];
	id: number;
	title: string;
	body: string;
}
