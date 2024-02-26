import Link from 'next/link';
import classe from './NavItem.module.css';

export default function NavItem({ linkText, linkHref }) {
	return (
		
			<Link
				href={`${linkHref}`}
				className={classe.menu__link}>
				{linkText}
			</Link>
	
	);
}
