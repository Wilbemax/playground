'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data/data-utils';
import useGetDataByCategory from "@/app/hooks/api-hook";
import {endpoints} from "@/app/utils/api/config";

export default function New() {
	const newRunner = useGetDataByCategory(endpoints.games, "runner");

	return (
		<main>
			{newRunner ? (
				<CardLists
					id="runner"
					data={newRunner}
					title="Ранеры"
				/>
			) : (
				<Preloader />
			)}
		</main>
	);
}
