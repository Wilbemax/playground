import classe from './Promo.module.css';
export default function Promo(params) {
	return (
		<section className={classe.promo}>
			<div className={classe.description_block}>
				<h2 className={classe.title}>Твой промо-код</h2>
				<p className={classe.description}>
					Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
				</p>
				<button className={`button ${classe.button}`}>Получить код</button>
			</div>
			<img
				src="/images/promo-illustration.svg"
				alt="Собака"
				className={classe.image}
			/>
		</section>
	);
}
