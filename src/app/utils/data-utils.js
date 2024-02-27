import { data } from '../data/data';

const getGamesByCategory = (category) => {
	return data.filter((game) =>
		game.category.some((item) => item.name === category)
	);
};
export default getGamesByCategory;

export const getGamesById = (id) => {
	debugger;
	return data.find((game) => game.id === +id);
};
