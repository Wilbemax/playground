'use client';

import Styles from './Game.module.css';
import { useState, useEffect } from 'react';
import { Preloader } from '@/app/Widgets/Preloader/Preloader';
import { GameNotFound } from '@/app/Widgets/GameNotFound/GameNotFound';
import { normalizeDataById, isResponseOk } from '@/app/utils/api/api-utils';
import { endpoints } from '@/app/utils/api/config';

export default function GamePage(props) {
	const [game, setGame] = useState(null);
	const [preloaderVisible, setPreloaderVisible] = useState(true);
	const [isVoted, setIsVoted] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const game = await normalizeDataById(endpoints.games, props.params.id);
			isResponseOk(game) ? setGame(game) : setGame(null);
			setPreloaderVisible(false);
		}
		fetchData();
	}, []);

	useEffect(() => {
		const handleAuth = async (jwt) => {
			const userData = await getMe(endpoints.me, jwt);

			if (isResponseOk(userData)) {
				setIsVoted(true);
			} else {
				setIsAuth(false);
				setIsVoted();
			}
			const token = getJWT();
			if (token) {
				handleAuth(token);
			}
		};
	}, []);

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
								disabled={isVoted}
								className={`button ${Styles['about__vote-button']}`}
								// onClick={handleVote}
							>
								{isVoted ? 'Голос учтён' : 'Голосовать'}
							</button>
						</div>
					</section>
				</>
			) : preloaderVisible ? (
				<Preloader />
			) : (
				<GameNotFound />
			)}
		</main>
	);
}
