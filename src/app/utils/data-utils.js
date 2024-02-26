import { data } from '../data/data';

const getGamesByCategory = (category) => {
  return data.filter((game) => game.category.some((item) => item.name === category));
};
export default getGamesByCategory;
