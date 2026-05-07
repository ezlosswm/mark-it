// export function normalizeTag(input: string) {
// 	return input.trim().toLowerCase().replace(/\s+/g, '-');
// }

export function normalizeTag(input: string) {
	return input.replace('-', ' ').toUpperCase();
}
