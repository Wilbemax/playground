import { data } from './data.js';

export default function getGamesByCategory(category) {
	return data.filter((game) => {
		return game.category.find((item) => {
			return item.name === category;
		});
	});
}
