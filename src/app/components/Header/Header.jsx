import classe from './Header.module.css';

export default function Header() {
	return (
		<header className={classe.header}>
			<a
				href="./index.html"
				className={classe.logo}>
				<img
					className={classe.logo__image}
					src="./images/logo.svg"
					alt="Логотип Pindie"
				/>
			</a>
			<nav className={classe.menu}>
				<ul className={classe.menu__list}>
					<li className={classe.menu__item}>
						<a
							href=""
							className={classe.menu__link}>
							Новинки
						</a>
					</li>
					<li className={classe.menu__item}>
						<a
							href=""
							className={classe.menu__link}>
							Популярные
						</a>
					</li>
					<li className={classe.menu__item}>
						<a
							href=""
							className={classe.menu__link}>
							Шутеры
						</a>
					</li>
					<li className={classe.menu__item}>
						<a
							href=""
							className={classe.menu__link}>
							Ранеры
						</a>
					</li>
					<li className={classe.menu__item}>
						<a
							href=""
							className={classe.menu__link}>
							Пиксельные
						</a>
					</li>
					<li className={classe.menu__item}>
						<a
							href=""
							className={classe.menu__link}>
							TDS
						</a>
					</li>
				</ul>
				<div className={classe.auth}>
					<button className={classe.auth__button}>Войти</button>
				</div>
			</nav>
		</header>
	);
}
