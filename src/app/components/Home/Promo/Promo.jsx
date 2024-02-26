'use client';
import { useEffect, useState } from 'react';
import classe from './Promo.module.css';
export default function Promo(props) {
	const [codeIsVisible, setCodeIsVisible] = useState(false);
	function hendleClick() {
		setCodeIsVisible(true);
	}
	useEffect(() => {
		let timer;
		if (codeIsVisible) {
			timer = setTimeout(() => setCodeIsVisible(false), 5000);
		}
		return () => clearTimeout(timer);
	}, [codeIsVisible]);
	return (
		<section className={classe.promo}>
			<div className={classe.description_block}>
				<h2 className={classe.title}>Твой промо-код</h2>
				<p className={classe.description}>
					Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
				</p>
				<button
					onClick={hendleClick}
					className={`button ${classe.button}`}>
					{!codeIsVisible && <sapn>твой промокод</sapn>}
					{codeIsVisible && <span>а где он?.. я не придумал</span>}
				</button>
			</div>
			<img
				src="/images/promo-illustration.svg"
				alt="Собака"
				className={classe.image}
			/>
		</section>
	);
}
