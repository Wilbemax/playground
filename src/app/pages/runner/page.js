'use client';

import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import CardLists from '@/app/components/Home/CardLists/CardLists';
import getGamesByCategory from '@/app/utils/data/data-utils';

export default function New() {
	const newRunner = getGamesByCategory('runner');
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
