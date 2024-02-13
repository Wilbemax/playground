import classe from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={classe.footer}>
			<a
				href="./index.html"
				className={classe.logo}>
				<span className={classe.logo_name}>pindie</span>
				<span className={classe.logo_copy}>, XXI век</span>
			</a>
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
