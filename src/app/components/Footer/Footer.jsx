"use client"
import Link from 'next/link';
import classe from './Footer.module.css';
import { usePathname } from 'next/navigation';

export default function Footer() {
	const pathName = usePathname()
	return (
		<footer className={classe.footer}>
			{pathName === '/' ? (<span
				className={classe.logo}>
				<span className={classe.logo_name}>pindie</span>
				<span className={classe.logo_copy}>, XXI век</span>
			</span>) : (<Link
				href="/"
				className={classe.logo}>
				<span className={classe.logo_name}>pindie</span>
				<span className={classe.logo_copy}>, XXI век</span>
			</Link>) }
			
			<ul className={classe.list}>
				<li className={classe.item}>
					<a
						href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
						target="_blank"
						className={classe.link}>
						YT
					</a>
				</li>
				<li className={classe.item}>
					<a
						href="https://vk.com/i______________l"
						target="_blank"
						className={classe.link}>
						ВК
					</a>
				</li>
				<li className={classe.item}>
					<a
						href="https://t.me/jkdlon"
						target="_blank"
						className={classe.link}>
						TG
					</a>
				</li>
			</ul>
		</footer>
	);
}
