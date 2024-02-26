import classe from './NavItem.module.css';

export default function NavItem({ linkText, linkHref }) {
	return (
		
			<a
				href={`${linkHref}`}
				className={classe.menu__link}>
				{linkText}
			</a>
	
	);
}
