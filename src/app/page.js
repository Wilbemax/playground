import Bunner from './components/Home/Banner/Bunner';
import CardLists from './components/Home/CardLists/CardLists';
import Promo from './components/Home/Promo/Promo';

import getGamesByCategory from './data/data-utils';

export default function page() {
	const popularGames = getGamesByCategory('popular');
	const newGames = getGamesByCategory('new');

	return (
		<main className="main">
			<body>
				<Bunner />
				<CardLists
					id="populare"
					title="Популярные"
					data={popularGames}
				/>
				<CardLists
					id="new"
					title="Новые"
					data={newGames}
				/>
				<Promo />
			</body>
		</main>
	);
}
