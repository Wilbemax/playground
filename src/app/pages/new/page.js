'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data-utils';

export default function New() {
	const newGame = getGamesByCategory('new');
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
