import { PageNotFound } from "@/app/Widgets/GameNotFound/GameNotFound";

export default function Not() {
	console.log('Not called');
	return (
		<main className="main-inner">
			<PageNotFound />
		</main>
	);
}
