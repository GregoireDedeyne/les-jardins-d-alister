import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Les jardins d'Alister - Architecte paysagiste à Tournai | Création et Aménagement de Jardins en Belgique",
	description:
		"Les jardins d'Alister, architecte paysagiste à Tournai, Belgique, propose des services de conception, aménagement et entretien de jardins. Transformez votre espace extérieur avec un design unique et écoresponsable.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
