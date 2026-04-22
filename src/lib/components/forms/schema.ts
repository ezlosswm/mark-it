import { z } from 'zod/v4';

const TITLE_MIN = 4;
const DESCRIPTION_MIN = 5;
const NAME_MIN = 4;
const PASSWORD_MIN = 8;
const PASSWORD_MAX = 50;

// Bookmark Schema
export const bookmarkSchema = z.object({
	url: z.url('Please enter a valid URL'),
	title: z.string().min(TITLE_MIN, `Title must be at least ${TITLE_MIN} characters`),
	description: z
		.string()
		.min(DESCRIPTION_MIN, `Description must be at least ${DESCRIPTION_MIN} characters`)
		.optional()
});

export type BookmarkSchema = typeof bookmarkSchema;

// Register User Schema
export const registerUserSchema = z.object({
	name: z.string().min(NAME_MIN, `Name must be at least ${NAME_MIN} characters`),
	email: z.email(`Enter a valid email`),
	password: z
		.string()
		.min(PASSWORD_MIN, `Password must be at least ${PASSWORD_MIN} characters long`)
		.max(PASSWORD_MAX, `Password must be shorter than ${PASSWORD_MAX} characters`)
});

export type RegisterUserSchema = typeof registerUserSchema;

// Login User Schema
export const loginUserSchema = z.object({
	email: z.email(`Account not found`),
	password: z
		.string()
		.min(PASSWORD_MIN, 'Incorrect password')
		.max(PASSWORD_MAX, 'Incorrect password')
});

export type LoginUserSchema = typeof loginUserSchema;
