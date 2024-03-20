'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardsListSection/CardsList';
import getGamesByCategory from '@/app/utils/data/data-utils';
import useGetDataByCategory from "@/app/hooks/api-hook";
import {endpoints} from "@/app/utils/api/config";

export default function New() {
	const newPixel = useGetDataByCategory(endpoints.games, "pixel");
	return (
		<main>
			{newPixel ? (
				<CardLists
					id="pixel"
					data={newPixel}
					title="Пиксельные"
				/>
			) : (
				<Preloader />
			)}
		</main>
	);
}
