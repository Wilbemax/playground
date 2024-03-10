"use client"

import classe from './CardLists.module.css';
import Card from './Card/Card';
import Link from 'next/link';

export default function CardLists({ data, title }) {
	
	return (
		<section>
			<h2 className={classe.title}> {title} </h2>
			<ul className={classe.list}>
				{data.map((item) => (
					<li key={item.id}>
						<Link href={`/pages/games/${item.id}`}>
							<Card {...item} />
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
