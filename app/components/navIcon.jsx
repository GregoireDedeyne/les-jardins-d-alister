export function NavIcon({ url, text, link }) {
	return (
		<div className="display flex flex-col">
			{" "}
			<a
				className="bg-black w-14 xl:w-20 2xl:w-24 rounded-xl  transition-all duration-200  hover:bg-transparent hover:w-24"
				href={link}
			>
				<img src={url} className="w-10 pl-2 xl:w-16  2xl:w-24" />{" "}
				<p className="text-center font-bold text-white xl:text-sm text-[8px]">
					{" "}
					{text}{" "}
				</p>
			</a>
		</div>
	);
}
