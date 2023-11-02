export const getQueryParam = (query: string, key: string) => {
	const params = new URLSearchParams(query);
	return params.get(key);
};

export const setQueryParam = (query: string, key: string, value: string | null) => {
	const params = new URLSearchParams(query);

	if (value) params.set(key, value);
	else params.delete(key);

	return params.toString();
};
