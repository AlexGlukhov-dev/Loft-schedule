//**Function removes object keys with empty values
export const clearObject = (obj) => {
	for (const key in obj) {
		if (obj[key] === '' || null || undefined) {
			delete obj[key]
		}
	}
	return obj
};

//**Formats price number
export const formatter = new Intl.NumberFormat("ru", {
	maximumFractionDigits: 2,
	minimumFractionDigits: 2,
	// style: "currency",
	// currency: "RUR"
});

//** Adds new key-value to existing json formatted data
export const injectKeyValueInArray = (array, keyValues) => {
	return new Promise((resolve, reject) => {
		if (!array.length)
			return resolve(array);

		array.forEach((object) => {
			for (let key in keyValues) {
				object[key] = keyValues[key]
			}
		});
		resolve(array);
	})
};
