import Bunner from './components/Home/Banner/Bunner';
import CardLists from './components/Home/CardLists/CardLists';
import Promo from './components/Home/Promo/Promo';
import { useGetDataByCategory } from './hooks/api-hook';




export default function Page() {
	const popularGames = useGetDataByCategory(endpoints.games, "popular");
	const newGames = useGetDataByCategory(endpoints.games, "new");

	return (
		<main className="main">
			<Bunner />
			{popularGames && newGames ? (
				<>
					<CardLists
						id="popular"
						title="Популярные"
						data={popularGames} />
					<CardLists
						id="new"
						title="Новинки"
						data={newGames} />
				</>
			) : (
				<Preloader />
			)}
			<Promo />
		</main>
	);
}
