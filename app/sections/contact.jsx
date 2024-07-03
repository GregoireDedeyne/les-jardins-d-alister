import { BlackCut } from "../components/blackCut";
import { ContactUs } from "../container/contactUs";
import { FollowUs } from "../container/followUs";

export function Contacts() {
	return (
		<div id="contacts">
			{" "}
			<div className="bg-black text-white">
				<BlackCut
					text={
						"Le jardinage apaise l'esprit, embellit les espaces, et nourrit la passion des plantes."
					}
				/>
			</div>
			<div
				className="bg-repeat min-h-screen bg-white"
				style={{
					backgroundImage: "url('/Pictures/logoMosaique.png')",
				}}
			>
				{" "}
				<FollowUs />
			</div>{" "}
			<ContactUs />
		</div>
	);
}
