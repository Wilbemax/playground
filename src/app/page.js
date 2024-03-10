"use client"

import Bunner from '@/app/components/Home/Banner/Bunner';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import Promo from '@/app/components/Home/Promo/Promo';
import getGamesByCategory from '@/app/utils/data/data-utils';
import useGetDataByCategory from "../app/hooks/api-hook";
import {endpoints} from "@/app/utils/api/config";
import {Preloader} from "@/app/Widgets/Preloader/Preloader";


export default function Page() {
	//Почему, если я делаю экспорт по дефолту все работает, но если хук просто экспортировать то ломаеться
	const popularGames = useGetDataByCategory(endpoints.games, "popular");
	const newGames = useGetDataByCategory(endpoints.games, "new");

	return (
		<main className="main">
			<Bunner/>
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
				<Preloader/>
			)}
			<Promo/>
		</main>
	);
}
