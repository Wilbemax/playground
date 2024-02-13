import classe from './CardLists.module.css';
import Card from './Card/Card';

export default function CardLists({ data, title }) {
	
	return (
		<section>
			<h2 className={classe.title}> {title} </h2>
			<ul className={classe.list}>
				{data.map((item) => (
					<li key={item.id}>
						<Card {...item} />
					</li>
				))}
			</ul>
		</section>
	);
}
