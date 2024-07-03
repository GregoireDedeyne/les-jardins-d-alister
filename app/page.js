import { HomePage } from "./sections/home";
import { Services } from "./container/services";
import { Steps } from "./container/steps";
import { Achievements } from "./sections/achievements";
import { Teams } from "./sections/teams";
import { FeedBack } from "./container/feedBack";
import { Contacts } from "./sections/contact";
import { NavBar } from "./components/navBar";
import { Footer } from "./components/footer";
import { ServicesSmall } from "./container/servicesSmall";
import { ToastContainer } from "react-toastify";

export default function Home() {
	return (
		<main className="">
			<ToastContainer />

			<HomePage />
			<div className=" md:hidden">
				<ServicesSmall />
			</div>
			<Services />
			<Steps />
			<Achievements />
			<Teams />
			<FeedBack />
			<Contacts />
			<Footer />
		</main>
	);
}
