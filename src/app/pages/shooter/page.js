'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data-utils';

export default function New() {
	const newShooter = getGamesByCategory('shooter');
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
