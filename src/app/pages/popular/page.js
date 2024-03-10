'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data/data-utils';
import useGetDataByCategory from "@/app/hooks/api-hook";
import {endpoints} from "@/app/utils/api/config";

/// с сервака получаем их что-ли

export default function New() {

	const newPopular = useGetDataByCategory(endpoints.games, "popular");

	return (
		<main>
			{newPopular ? (
				<CardLists
					id="popular"
					data={newPopular}
					title="Популярные"
				/>
			) : (
				<Preloader />
			)}
		</main>
	);
}
