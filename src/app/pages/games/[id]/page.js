'use client';
import { GameNotFound } from '@/app/Widgets/GameNotFound/GameNotFound';

import Styles from './Game.module.css';
import { getGamesById } from '@/app/utils/data/data-utils';
import { useRouter } from 'next/navigation';

export default function GamePage({ params }) {
	const game = getGamesById(params.id);
	const rout = useRouter();

	return (
		<main className="main">
			{game ? (
				<>
					<section className={Styles['game']}>
						<iframe
							className={Styles['game__iframe']}
							src={game.link}></iframe>
					</section>
					<section className={Styles['about']}>
						<h2 className={Styles['about__title']}>{game.title}</h2>
						<div className={Styles['about__content']}>
							<p className={Styles['about__description']}>{game.description}</p>
							<div className={Styles['about__author']}>
								<p>
									Автор:{' '}
									<span className={Styles['about__accent']}>
										{game.developer}
									</span>
								</p>
							</div>
						</div>
						<div className={Styles['about__vote']}>
							<p className={Styles['about__vote-amount']}>
								За игру уже проголосовали:{' '}
								<span className={Styles['about__accent']}>
									{game.users.length}
								</span>
							</p>

							<button
								onClick={() => rout.push('/pages/login')}
								className={`button ${Styles['about__vote-button']}`}>
								проголосовать
							</button>
						</div>
					</section>
				</>
			) : (
				<GameNotFound />
			)}
		</main>
	);
}
