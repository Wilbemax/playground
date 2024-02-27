import Bunner from './components/Home/Banner/Bunner';
import CardLists from './components/Home/CardLists/CardLists';
import Promo from './components/Home/Promo/Promo';

import getGamesByCategory from './utils/data-utils';

export default function Page() {
	const popularGames = getGamesByCategory('popular');
	const newGames = getGamesByCategory('new');

	return (
		<main className="main">
			<Bunner />
			{popularGames && newGames ? (
				<>
					<CardLists
						id="popular"
						title="Популярные"
						data={popularGames}
						
					/>
					<CardLists
						id="new"
						title="Новинки"
						data={newGames}
						
					/>
				</>
			) : (
				<Preloader />
			)}
			<Promo />
		</main>
	);
}
