import { BlackCut } from "../components/blackCut";
import { ContactUs } from "../container/contactUs";
import { FollowUs } from "../container/followUs";

export function Contacts() {
	return (
		<div>
			{" "}
			<div className="bg-black text-white">
				<BlackCut
					text={
						"Le jardinage apaise l'esprit, embellit les espaces, et nourrit la passion des plantes."
					}
				/>
			</div>
			<div
				className="bg-repeat bg-white"
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
