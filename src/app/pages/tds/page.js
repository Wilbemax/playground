'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data/data-utils';

export default function New() {
	const newTDS = getGamesByCategory('TDS');
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
