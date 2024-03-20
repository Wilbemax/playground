import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {App} from "@/app/App";

export const metadata = {
	title: 'Pindie',
	description: 'Портал инди-игр от студентов Яндекс Практикума',
	icons: {
		icon: {
			url: '/images/logo.svg',
			href: '/images/logo.svg',
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<App>{children}</App>
			</body>
		</html>
	);
}
