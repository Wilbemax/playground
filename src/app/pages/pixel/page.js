'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data/data-utils';

export default function New() {
	const newPixel = getGamesByCategory('pixel');
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
