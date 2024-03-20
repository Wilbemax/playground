"use client"

import Bunner from '@/app/components/Home/Banner/Bunner';
import Promo from '@/app/components/Home/Promo/Promo';
import useGetDataByCategory from "../app/hooks/api-hook";
import {endpoints} from "@/app/utils/api/config";
import {Preloader} from "@/app/Widgets/Preloader/Preloader";
import { CardsListSection } from './components/Home/CardsListSection/CardsListSection';

export default function Home() {
	const popularGames = useGetDataByCategory(endpoints.games, "popular");
	const newGames = useGetDataByCategory(endpoints.games, "new");
	return (
	  <main className="main">
		<Bunner />
		{
		  (popularGames && newGames) ? (
			<>
			  <CardsListSection id="popular" title="Популярные" data={popularGames} type="slider"/>
			  <CardsListSection id="new" title="Новинки"  data={newGames} type="slider"/>
			</>
		  ) : <Preloader />
		}
		<Promo />
	  </main>
	);
  }
