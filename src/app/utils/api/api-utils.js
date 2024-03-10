
export const getData = async (url) => {
	try {
		const response = await fetch(url);
		if (response.status !== 200) {
			throw new Error('Something went wrong');
		}
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const isResponseOk = async (response) => !(response instanceof Error);

export const normalizeDataObject = (obj) => {
	return {
		...obj,
		category: obj.categories,
		users: obj.users_permissions_users,
	};
};

export const normalizeData = (data) => {
	console.log(data);
	return data.map((item) => normalizeDataObject(item));
};

export const normalizeDataById = async (url, id) => {
	const data = await getData(`${url}/${id}`);
	return await isResponseOk(data) ? normalizeDataObject(data) : data;
};

export const normalizeDataByCategory = async (url, category) => {
	try {
		const data = await getData(`${url}?categories.name=${category}`);
		if (!data.length) {
			throw new Error('Нет игр в категории');
		}
		return await isResponseOk(data) ? normalizeData(data) : data;
	} catch (e) {
		console.log(e);
		return null;
	}
};
export const authorize = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		if (response.status !== 200) {
			throw new Error('Ошибка авторизации');
		}
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};

export const setJWT = (jwt) => {
	document.cookie = `jwt=${jwt}`;
	localStorage.setItem('jwt', `${jwt}`) // Исправлено
};

export const getJWT = () => {
	if (document.cookie === '') {
		return localStorage.getItem('jwt');
	}
	const jwt = document.cookie.split(';').find((item) => item.includes('jwt'));
	return jwt ? jwt.split('=')[1] : null;
};

export const removeJWT = () => {
	localStorage.removeItem('jwt')
};

export const getMe = async (url, jwt) => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: { Authorization: `Bearer ${jwt}` },
		});
		if (response.status !== 200) {
			throw new Error('Something went wrong when fetching user');
		}
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};

export const checkIfUserVoted = (game, userID) => {

	return game.users.find((user) => user.id === userID);
};

export const vote = async (url, jwt, usersArray) => {
	try {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
			body: JSON.stringify({ users_permissions_users: usersArray }),
		});
		if (response.status !== 200) {
			throw new Error('Something went wrong when voeing');
		}
		const res = await response.json();
		return res;
	} catch (e) {
		console.log(e);
		return null;
	}
};
