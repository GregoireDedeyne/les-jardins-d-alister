import { ContactUs } from "../container/contactUs";
import { FollowUs } from "../container/followUs";

export function Contacts() {
	return (
		<div id="contacts">
			{" "}
			<div className="bg-white">
				{" "}
				<FollowUs />
			</div>{" "}
			<ContactUs />
		</div>
	);
}
