import './globals.css';

export const metadata = {
	title: 'Pindie',
	description: 'Портал инди-игр от студентов Яндекс Практикума',
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<header class="header">
					<a
						href="./index.html"
						class="logo">
						<img
							class="logo__image"
							src="./images/logo.svg"
							alt="Логотип Pindie"
						/>
					</a>
					<nav class="menu">
						<ul class="menu__list">
							<li class="menu__item">
								<a
									href=""
									class="menu__link">
									Новинки
								</a>
							</li>
							<li class="menu__item">
								<a
									href=""
									class="menu__link">
									Популярные
								</a>
							</li>
							<li class="menu__item">
								<a
									href=""
									class="menu__link">
									Шутеры
								</a>
							</li>
							<li class="menu__item">
								<a
									href=""
									class="menu__link">
									Ранеры
								</a>
							</li>
							<li class="menu__item">
								<a
									href=""
									class="menu__link">
									Пиксельные
								</a>
							</li>
							<li class="menu__item">
								<a
									href=""
									class="menu__link">
									TDS
								</a>
							</li>
						</ul>
						<div class="auth">
							<button class="auth__button">Войти</button>
						</div>
					</nav>
				</header>
				<main class="main">
					<section class="banner">
						<div class="banner__description">
							<h1 class="banner__title">
								Портал инди-игр от&nbsp;студентов Яндекс Практикума
							</h1>
							<div class="banner__text-block">
								<p class="banner__text">
									Студенты курсов разрабатывают свои игры на Unity, здесь мы их
									публикуем. Вы можете играть прямо на сайте. А если у вас есть
									аккаунт пользователя — получаете возможность голосовать за
									игры.
								</p>
							</div>
							<a
								href="#popular"
								class="button banner__link">
								Смотреть игры
							</a>
						</div>
						<img
							src="./images/banner-illustration.jpg"
							alt="Рука, утопленная в желтом фоне"
							class="banner__image"
						/>
					</section>
					<section class="list-section">
						<h2
							class="list-section__title"
							id="popular">
							Популярное
						</h2>
						<ul class="cards-list">
							<li class="cards-list__item">
								<a
									href="/game-id.html"
									class="card-list__link">
									<article class="card">
										<img
											src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
											alt=""
											class="card__image"
										/>
										<div class="card__content-block">
											<h3 class="card__title">Crystal Kepper</h3>
											<p class="card__description">
												Управляй боевым дроном, чтобы любой ценой защитить
												кристалл от враждебных космо-слизней.
											</p>
											<div class="card__info-container">
												<p class="card__author">
													Автор: <span class="card__accent">Lonely Baobab</span>
												</p>
												<p class="card__votes">
													Голосов на сайте: <span class="card__accent">20</span>
												</p>
											</div>
										</div>
									</article>
								</a>
							</li>
							<li class="cards-list__item">
								<a
									href="/game-id.html"
									class="card-list__link">
									<article class="card">
										<img
											src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
											alt=""
											class="card__image"
										/>
										<div class="card__content-block">
											<h3 class="card__title">Dangeons'n'Caves. Prologue</h3>
											<p class="card__description">
												Безымянный герой исследует пещеры и подземелья, чтобы
												найти больше информации о себе.
											</p>
											<div class="card__info-container">
												<p class="card__author">
													Автор: <span class="card__accent">F-Style</span>
												</p>
												<p class="card__votes">
													Голосов на сайте: <span class="card__accent">10</span>
												</p>
											</div>
										</div>
									</article>
								</a>
							</li>
							<li class="cards-list__item">
								<a
									href="/game-id.html"
									class="card-list__link">
									<article class="card">
										<img
											src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
											alt=""
											class="card__image"
										/>
										<div class="card__content-block">
											<h3 class="card__title">Defence of Crystal</h3>
											<p class="card__description">
												Защищай магический кристалл от монстров и уничтожай
												кладбища, чтобы спасти Землю, которую поглотил мрак.
											</p>
											<div class="card__info-container">
												<p class="card__author">
													Автор: <span class="card__accent">MastWe</span>
												</p>
												<p class="card__votes">
													Голосов на сайте: <span class="card__accent">20</span>
												</p>
											</div>
										</div>
									</article>
								</a>
							</li>
						</ul>
					</section>
					<section class="list-section">
						<h2
							class="list-section__title"
							id="new">
							Новинки
						</h2>
						<ul class="cards-list">
							<li class="cards-list__item">
								<a
									href="/game-id.html"
									class="card-list__link">
									<article class="card">
										<img
											src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
											alt=""
											class="card__image"
										/>
										<div class="card__content-block">
											<h3 class="card__title">Go Away</h3>
											<p class="card__description">
												Управляй автомобилем, избегая аварий и перепрыгивая
												препятствия на пути к следующему уровню.
											</p>
											<div class="card__info-container">
												<p class="card__author">
													Автор: <span class="card__accent">Mahisto</span>
												</p>
												<p class="card__votes">
													Голосов на сайте: <span class="card__accent">20</span>
												</p>
											</div>
										</div>
									</article>
								</a>
							</li>
							<li class="cards-list__item">
								<a
									href="/game-id.html"
									class="card-list__link">
									<article class="card">
										<img
											src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
											alt=""
											class="card__image"
										/>
										<div class="card__content-block">
											<h3 class="card__title">G.U.N.N.E.R.</h3>
											<p class="card__description">
												Продержись как можно дольше, отбиваясь от врагов,
												которых будет становиться всё больше.
											</p>
											<div class="card__info-container">
												<p class="card__author">
													Автор: <span class="card__accent">IDKWIAm</span>
												</p>
												<p class="card__votes">
													Голосов на сайте: <span class="card__accent">10</span>
												</p>
											</div>
										</div>
									</article>
								</a>
							</li>
							<li class="cards-list__item">
								<a
									href="/game-id.html"
									class="card-list__link">
									<article class="card">
										<img
											src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
											alt=""
											class="card__image"
										/>
										<div class="card__content-block">
											<h3 class="card__title">Space Terror</h3>
											<p class="card__description">
												Лети как можно дальше в космическом пространстве,
												уничтожая всё на своём пути.
											</p>
											<div class="card__info-container">
												<p class="card__author">
													Автор: <span class="card__accent">IDKWIAm</span>
												</p>
												<p class="card__votes">
													Голосов на сайте: <span class="card__accent">20</span>
												</p>
											</div>
										</div>
									</article>
								</a>
							</li>
							<li class="cards-list__item">
								<a
									href="/game-id.html"
									class="card-list__link">
									<article class="card">
										<img
											src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
											alt=""
											class="card__image"
										/>
										<div class="card__content-block">
											<h3 class="card__title">Square Slayer</h3>
											<p class="card__description">
												Уворачивайся и отстреливайся от озлобленных квадратов и
												собирай жизни для перехода на следующий уровень.
											</p>
											<div class="card__info-container">
												<p class="card__author">
													Автор: <span class="card__accent">niclan</span>
												</p>
												<p class="card__votes">
													Голосов на сайте: <span class="card__accent">10</span>
												</p>
											</div>
										</div>
									</article>
								</a>
							</li>
						</ul>
					</section>
					<section class="promo">
						<div class="promo__description-block">
							<h2 class="promo__title">Твой промо-код</h2>
							<p class="promo__description">
								Скидка на все курсы Яндекс Практикума для пользователей нашего
								сайта!
							</p>
							<button class="button promo__button">Получить код</button>
						</div>
						<img
							src="./images/promo-illustration.svg"
							alt="Собака"
							class="promo__image"
						/>
					</section>
				</main>
				<footer class="footer">
					<a
						href="./index.html"
						class="footer__logo">
						<span class="footer__logo-name">pindie</span>
						<span class="footer__logo-copy">, XXI век</span>
					</a>
					<ul class="social-list">
						<li class="social-list__item">
							<a
								href=""
								class="button social-list__link">
								YT
							</a>
						</li>
						<li class="social-list__item">
							<a
								href=""
								class="button social-list__link">
								ВК
							</a>
						</li>
						<li class="social-list__item">
							<a
								href=""
								class="button social-list__link">
								TG
							</a>
						</li>
					</ul>
				</footer>
			</body>
		</html>
	);
}
