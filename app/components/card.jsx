export function Card({ url, text, title }) {
	return (
		<div className="group h-96 w-96 [perspective:1000px] p-5 font-cocomat">
			<div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
				{" "}
				<div className="absolute inset-0">
					{" "}
					<img
						src={url}
						className="h-full w-full rounded-xl object-cover shadow-xl shadow-black "
					/>{" "}
				</div>{" "}
				<div className="absolute inset-0 h-full w-full rounded-xl bg-black/10 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
					{" "}
					<div className="flex min-h-full flex-col items-center justify-center">
						<p className="text-lg"> {text} </p>
					</div>
				</div>
			</div>{" "}
			<h1 className="absolute top-32 left-20 text-2xl text-white transition-opacity duration-500 group-hover:opacity-0 w-1/3">
				{title}{" "}
			</h1>
		</div>
	);
}
