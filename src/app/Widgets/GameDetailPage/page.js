import Styles from './Game.module.css';

export default function GamePage(props) {
	const [game, setGame] = useState(null);
	const [preloaderVisible, setPreloaderVisible] = useState(true);
	const [isVoted, setIsVoted] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const game = await getNormalizedGameDataById(
				endpoints.games,
				props.params.id
			);
			isResponseOk(game) ? setGame(game) : setGame(null);
			setPreloaderVisible(false);
		}
		fetchData();
	}, []);

	useEffect(() => {
		authContext.user && game
			? setIsVoted(checkIfUserVoted(game, authContext.user.id))
			: setIsVoted(false);
	}, [authContext.user, game]);
	return (
		<main className="main">
			{game ? (
				<>sd
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
