import { NavIcon } from "./navIcon";

export function NavBar() {
	return (
		<div className="container mx-auto pt-16">
			<div className="navbar bg-black rounded-3xl w-2/5 bg-opacity-70 flex ">
				<div className="w-full">
					<ul className="hidden lg:flex px-1 w-full items-center justify-center">
						<li>
							<NavIcon
								url="/Pictures/Home.png"
								text={"Accueil"}
								link={"#home"}
							/>
						</li>
						<li>
							<NavIcon
								url="/Pictures/Services.png"
								text={"Services"}
								link={"#Services"}
							/>
						</li>
						<li>
							<NavIcon
								url="/Pictures/Photos.png"
								text={"Photos"}
								link={"#achievements"}
							/>
						</li>
						<li>
							<NavIcon
								url="/Pictures/Teams.png"
								text={"Equipes"}
								link={"#teams"}
							/>
						</li>
						<li>
							<NavIcon
								url="/Pictures/Contacts.png"
								text={"Contact"}
								link={"#contacts"}
							/>
						</li>
					</ul>
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn text-white btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent rounded-box w-52"
						>
							<li>
								<NavIcon
									url="/Pictures/Home.png"
									text={"accueil"}
									link={"#home"}
								/>
							</li>
							<li>
								<NavIcon
									url="/Pictures/Services.png"
									text={"services"}
									link={"#Services"}
								/>
							</li>
							<li>
								<NavIcon
									url="/Pictures/Photos.png"
									text={"pictures"}
									link={"#achievements"}
								/>
							</li>
							<li>
								<NavIcon
									url="/Pictures/Teams.png"
									text={"teams"}
									link={"#teams"}
								/>
							</li>
							<li>
								<NavIcon
									url="/Pictures/Contacts.png"
									text={"contact"}
									link={"#contacts"}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
