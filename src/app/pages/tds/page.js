'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data/data-utils';
import useGetDataByCategory from "@/app/hooks/api-hook";
import {endpoints} from "@/app/utils/api/config";

export default function New() {
	const newTDS = useGetDataByCategory(endpoints.games, "TDS");

	return (
		<main>
			{newTDS ? (
				<CardLists
					id="TDS"
					data={newTDS}
					title="TDS"
				/>
			) : (
				<Preloader />
			)}
		</main>
	);
}
