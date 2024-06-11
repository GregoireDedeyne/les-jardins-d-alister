export function NavIcon({ url, text, link }) {
	return (
		<div>
			{" "}
			<a
				className="bg-black w-24 rounded-3xl  transition-all duration-200  hover:bg-transparent hover:w-32"
				href={link}
			>
				<img src={url} className="" />{" "}
				<p className="text-center font-bold text-white"> {text} </p>
			</a>
		</div>
	);
}
