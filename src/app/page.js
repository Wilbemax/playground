import Bunner from '@/app/components/Home/Banner/Bunner';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import Promo from '@/app/components/Home/Promo/Promo';
import getGamesByCategory from '@/app/utils/data/data-utils';


export default function Page() {
	const popularGames = getGamesByCategory( "popular");
  	const newGames = getGamesByCategory("new");

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
