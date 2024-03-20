'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardsListSection/CardsList';
import getGamesByCategory from '@/app/utils/data/data-utils';
import useGetDataByCategory from "@/app/hooks/api-hook";
import {endpoints} from "@/app/utils/api/config";

export default function New() {

	const newGame = useGetDataByCategory(endpoints.games, "new");
	return (
		<main>
			{newGame ? (
				<CardLists
					id="new"
					data={newGame}
					title="Новинки"
				/>
			) : (
				<Preloader />
			)}
		</main>
	);
}
