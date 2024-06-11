import Image from "next/image";
import { HomePage } from "./sections/home";
import { Services } from "./container/services";
import { Steps } from "./container/steps";
import { Achievements } from "./sections/achievements";
import { Teams } from "./sections/teams";
import { FeedBack } from "./container/feedBack";
import { Contacts } from "./sections/contact";
import { NavBar } from "./components/navBar";

export default function Home() {
	return (
		<main className="">
			<HomePage />
			<Services />
			<Steps />
			<Achievements />
			<Teams />
			<FeedBack />
			<Contacts />
		</main>
	);
}
