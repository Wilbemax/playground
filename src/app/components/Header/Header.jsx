'use client';

import { useState, useEffect } from 'react';
import classe from './Header.module.css';
import NavItem from './NavItem/NavItem';
import { menuItems } from '@/app/data/data';
import { AuthForm } from '@/app/Widgets/AuthForm/AuthForm';
import { Overlay } from '@/app/Widgets/Overlay/Overlay';
import { Popup } from '@/app/Widgets/Popup/Popup';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	getJWT,
	getMe,
	isResponseOk,
	removeJWT,
} from '@/app/utils/api/api-utils';
import { endpoints } from '@/app/utils/api/config';

export default function Header() {
	const pathname = usePathname();
	const [isAuth, setIsAuth] = useState(false);
	const [popupIsOpened, setPopupIsOpened] = useState(false);

	function openPopup() {
		setPopupIsOpened(true);
	}
	function closePopup() {
		setPopupIsOpened(false);
	}

	const handleLogout = () => {
		debugger;
		removeJWT();
		setIsAuth(false);
	};
	useEffect(() => {
		const handleAuth = async (jwt) => {
			const userData = await getMe(endpoints.me, jwt);

			if (isResponseOk(userData)) {
				setIsAuth(true);
			} else {
				setIsAuth(false);
				removeJWT();
			}
			const token = getJWT();
			if (token) {
				handleAuth(token);
			}
		};
	}, [isAuth]);

	return (
		<header className={classe.header}>
			{pathname === '/' ? (
				<span className={classe.logo}>
					<img
						className={classe.logo__image}
						src="/images/logo.svg"
						alt="Логотип Pindie"
					/>
				</span>
			) : (
				<Link
					href="/"
					className={classe.logo}>
					<img
						className={classe.logo__image}
						src="/images/logo.svg"
						alt="Логотип Pindie"
					/>
				</Link>
			)}
			<nav className={classe.menu}>
				<ul className={classe.menu__list}>
					{menuItems.map((menuItem) => (
						<li
							className={classe.menu__item}
							key={menuItem.id}>
							<NavItem {...menuItem} />
						</li>
					))}
				</ul>
				{isAuth ? (
					<div className={classe.auth}>
						<button
							onClick={handleLogout}
							className={classe.auth__button}>
							Выйти
						</button>
					</div>
				) : (
					<div className={classe.auth}>
						<button
							onClick={openPopup}
							className={classe.auth__button}>
							Войти
						</button>
					</div>
				)}
			</nav>
			{popupIsOpened && (
				<>
					<Overlay closePopup={closePopup} />
					<Popup closePopup={closePopup}>
						<AuthForm
							close={closePopup}
							setAuth={setIsAuth}
						/>
					</Popup>
				</>
			)}
		</header>
	);
}
