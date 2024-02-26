'use client';

import { useState } from 'react';
import classe from './Header.module.css';
import NavItem from './NavItem/NavItem';
import { menuItems } from '@/app/data/data';
import { AuthForm } from '@/app/features/AuthForm/AuthForm';
import { Overlay } from '@/app/features/Overlay/Overlay';
import { Popup } from '@/app/features/Popup/Popup';

export default function Header() {
	const [popupIsOpened, setPopupIsOpened] = useState(false);

	function openPopup() {
		console.log('openPopup called'); 
		setPopupIsOpened(true);
	}
	function closePopup() {
		setPopupIsOpened(false);
	}
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
					{menuItems.map((menuItem) => (
						<li
							className={classe.menu__item}
							key={menuItem.id}>
							<NavItem {...menuItem} />
						</li>
					))}
				</ul>
				<div className={classe.auth}>
					<button
						onClick={openPopup}
						className={classe.auth__button}>
						Войти
					</button>
				</div>
			</nav>
			{popupIsOpened && (
				<>
					<Overlay />
					<Popup closePopup={closePopup}>
						<AuthForm />
					</Popup>
				</>
			)}
		</header>
	);
}
