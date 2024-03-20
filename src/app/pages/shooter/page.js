'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardsListSection/CardsList';
import getGamesByCategory from '@/app/utils/data/data-utils';
import {endpoints} from "@/app/utils/api/config";
import useGetDataByCategory from "@/app/hooks/api-hook";

export default function New() {
	const newShooter = useGetDataByCategory(endpoints.games, "shooter");

	return (
		<main>
			{newShooter ? (
				<CardLists
					id="shooter"
					data={newShooter}
					title="Шутеры"
				/>
			) : (
				<Preloader />
			)}
		</main>
	);
}
