import classe from './Card.module.css';
export default function Card({
	image,
	title,
	description,
	developer,
	users,
	link,
}) {
	return (
		<article className={classe.card}>
			<a href={link}>
				<img
					src={`${image}`}
					alt=""
					className={classe.image}
				/>
				<div className={classe.content_block}>
					<h3 className={classe.title}>{title}</h3>
					<p className={classe.description}>{description}</p>
					<div className={classe.container}>
						<p className={classe.author}>
							Автор: <span className={classe.accent}>{developer}</span>
						</p>
						<p className={classe.votes}>
							Голосов на сайте:{' '}
							<span className={classe.accent}>{users.length}</span>
						</p>
					</div>
				</div>
			</a>
		</article>
	);
}
