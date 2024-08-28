export function NavIcon({ url, text, link }) {
	return (
		<div className="display flex flex-col mx-1">
			{" "}
			<a
				className=" w-14 xl:w-20 2xl:w-24 rounded-xl  transition-all duration-200  	 hover:w-24"
				href={link}
			>
				<p className="text-center font-bold text-white xl:text-lg text-[8px] hover:text-gray-500">
					{" "}
					{text}{" "}
				</p>
			</a>
		</div>
	);
}
