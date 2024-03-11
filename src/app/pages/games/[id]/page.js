'use client';

import Styles from './Game.module.css';
import {useState, useEffect} from 'react';
import {Preloader} from '@/app/Widgets/Preloader/Preloader';
import {GameNotFound} from '@/app/Widgets/GameNotFound/GameNotFound';
import {
    normalizeDataById, isResponseOk, getMe, getJWT, removeJWT, checkIfUserVoted, vote,
} from '@/app/utils/api/api-utils';
import {endpoints} from '@/app/utils/api/config';

export default function GamePage(props) {
    const [game, setGame] = useState(null);
    const [preloaderVisible, setPreloaderVisible] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [isVoted, setIsVoted] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [userData, setUserData] = useState(null)

    ///---------Испарвленно

    useEffect(() => {
        async function fetchData() {
            const gameData = await normalizeDataById(endpoints.games, props.params.id);
            if (await isResponseOk(gameData)) {
                setGame(gameData);
            } else {
                setGame(null);
            }
            setPreloaderVisible(false);
        }

        fetchData();
    }, []);
    useEffect(() => {
        const checkingUser = async (token) => {
            try {
                setUserData(await getMe(endpoints.me, token));
                if (await isResponseOk(userData)) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }

                if (game && userData.id) {
                    setIsVoted(await checkIfUserVoted(game, userData.id));

                }
            } catch (error) {
                console.error('Ошибка при проверке пользователя:', error);
                setIsAuth(false);
            }
        };
        const token = getJWT();
        if (token) {
            checkingUser(token);
        } else {
            setIsAuth(false);
        }
    }, [game]);

    useEffect(() => {
        if (isAuth) {
            setDisabled(false);
        }
        if (isVoted) {
            setDisabled(true);
        }
    }, [isAuth, isVoted]);
    const handleVote = async () => {
        const jwt = getJWT();
        let usersIdArray = game.users.length
            ? game.users.map((user) => user.id)
            : [];
        usersIdArray.push(userData.id);
        const response = await vote(
            `${endpoints.games}/${game.id}`,
            jwt,
            usersIdArray
        );
        if (await isResponseOk(response)) {
            setIsVoted(true);
            setGame(() => {
                return {
                    ...game,
                    users: [...game.users, userData],
                };/**/
            });
        }
        setDisabled(true)
    };

    console.log("isVoted", isVoted)
    console.log("isAuth", isAuth)
    return (<main className="main">
        {game ? (<>
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
                        disabled={disabled}

                        className={`button ${Styles['about__vote-button']}`}
                        onClick={handleVote}>
                        {isAuth ? (isVoted ? "Голос учтен" : "Проголосовать") : "Авторизуйтесь"}
                    </button>
                </div>
            </section>
        </>) : preloaderVisible ? (<Preloader/>) : (<GameNotFound/>)}
    </main>);
}
