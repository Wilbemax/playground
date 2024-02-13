import classe from './Bunner.module.css';

export default function Bunner() {
	return (
		<section className={classe.banner}>
			<div className={classe.description}>
				<h1 className={classe.title}>
					Портал инди-игр от&nbsp;студентов Яндекс Практикума
				</h1>
				<div className={classe.text_block}>
					<p className={classe.text}>
						Студенты курсов разрабатывают свои игры на Unity, здесь мы их
						публикуем. Вы можете играть прямо на сайте. А если у вас есть
						аккаунт пользователя — получаете возможность голосовать за игры.
					</p>
				</div>
				<a
					href="#popular"
					className={`button ${classe.link}`}>
					Смотреть игры
				</a>
			</div>
			<img
				src="/images/banner-illustration.jpg"
				alt="Рука, утопленная в желтом фоне"
				className={classe.image}
			/>
		</section>
	);
}
