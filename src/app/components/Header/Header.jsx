'use client';

import { useState } from 'react';
import classe from './Header.module.css';
import NavItem from './NavItem/NavItem';
import { menuItems } from '@/app/data/data';
import { AuthForm } from '@/app/Widgets/AuthForm/AuthForm';
import { Overlay } from '@/app/Widgets/Overlay/Overlay';
import { Popup } from '@/app/Widgets/Popup/Popup';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();
	const [popupIsOpened, setPopupIsOpened] = useState(false);

	function openPopup() {
		console.log('openPopup called');
		setPopupIsOpened(true);
	}
	function closePopup() {
		console.log('closePopup called');
		setPopupIsOpened(false);
	}
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
					<Overlay closePopup={closePopup} />
					<Popup closePopup={closePopup}>
						<AuthForm />
					</Popup>
				</>
			)}
		</header>
	);
}
