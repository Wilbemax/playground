'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data-utils';

export default function New() {
	const newPopular = getGamesByCategory('popular');
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
