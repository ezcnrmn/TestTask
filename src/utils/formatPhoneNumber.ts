// возвращает в +1-xxx-xxx-xxxx
export const formatPhoneNumber = (phoneNumber: string) => {
	const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g;
	// const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/g;
	const replaceRegex = /[ .-]/g;

	const match = phoneNumber.match(phoneRegex);

	if (match) {
		let formatted = match[0];

		formatted = formatted.replace(replaceRegex, '-');

		return '+1-' + formatted;
	}

	return phoneNumber;
};
