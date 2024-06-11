"use client";
import { Footer } from "../components/footer";
import Link from "next/link";
export default function PolitiqueDeConfidentialite() {
	return (
		<div className="bg-slate-200">
			{" "}
			<div className="container mx-auto text-black font-cocomat">
				<Link href={"/"} className="flex justify-center top-10">
					{" "}
					<button className="btn m-10"> Page d'accueil </button>{" "}
				</Link>
				<h1 className="m-5 text-2xl underline"> Qui sommes-nous ? </h1>
				<p className="m-3">
					L’adresse de notre site Web est :
					http://lesjardinsdalister.com.{" "}
				</p>{" "}
				<h1 className="m-5 text-2xl underline">
					{" "}
					Utilisation des données personnelles collectées{" "}
				</h1>
				<h3 className="m-4 text-lg"> Commentaires </h3>
				<p className="m-3">
					{" "}
					Quand vous laissez un commentaire sur notre site web, les
					données inscrites dans le formulaire de commentaire, mais
					aussi votre adresse IP et l’agent utilisateur de votre
					navigateur sont collectés pour nous aider à la détection des
					commentaires indésirables. Une chaîne anonymisée créée à
					partir de votre adresse de messagerie (également appelée
					hash) peut être envoyée au service Gravatar pour vérifier si
					vous utilisez ce dernier. Les clauses de confidentialité du
					service Gravatar sont disponibles ici :
					https://automattic.com/privacy/. Après validation de votre
					commentaire, votre photo de profil sera visible publiquement
					à coté de votre commentaire.
				</p>
				<h3 className="m-4 text-lg"> Médias</h3>
				<p className="m-3">
					Si vous êtes un utilisateur ou une utilisatrice enregistré·e
					et que vous téléversez des images sur le site web, nous vous
					conseillons d’éviter de téléverser des images contenant des
					données EXIF de coordonnées GPS. Les visiteurs de votre site
					web peuvent télécharger et extraire des données de
					localisation depuis ces images.{"  "}
				</p>
				<h1 className="m-5 text-2xl underline">
					{" "}
					Formulaires de contact
				</h1>
				<p className="m-3">
					Vos données personnelles sont traitées par Les jardins
					d’Alister pour différentes occasions : • Traiter vos
					demandes et recevoir d’information sur nos services •
					Établir des statistiques sur la provenance des demandes qui
					nous parviennent via le site{"  "}
				</p>
				<h2 className="m-4 text-lg"> Cookies </h2>
				<p className="m-3">
					Si vous déposez un commentaire sur notre site, il vous sera
					proposé d’enregistrer votre nom, adresse de messagerie et
					site web dans des cookies. C’est uniquement pour votre
					confort afin de ne pas avoir à saisir ces informations si
					vous déposez un autre commentaire plus tard. Ces cookies
					expirent au bout d’un an. Si vous avez un compte et que vous
					vous connectez sur ce site, un cookie temporaire sera créé
					afin de déterminer si votre navigateur accepte les cookies.
					Il ne contient pas de données personnelles et sera supprimé
					automatiquement à la fermeture de votre navigateur. Lorsque
					vous vous connecterez, nous mettrons en place un certain
					nombre de cookies pour enregistrer vos informations de
					connexion et vos préférences d’écran. La durée de vie d’un
					cookie de connexion est de deux jours, celle d’un cookie
					d’option d’écran est d’un an. Si vous cochez « Se souvenir
					de moi », votre cookie de connexion sera conservé pendant
					deux semaines. Si vous vous déconnectez de votre compte, le
					cookie de connexion sera effacé. En modifiant ou en publiant
					une publication, un cookie supplémentaire sera enregistré
					dans votre navigateur. Ce cookie ne comprend aucune donnée
					personnelle. Il indique simplement l’ID de la publication
					que vous venez de modifier. Il expire au bout d’un jour.
					{"  "}
				</p>
				<h2 className="m-4 text-lg">
					{" "}
					Contenu embarqué depuis d’autres sites
				</h2>
				<p className="m-3">
					Les articles de ce site peuvent inclure des contenus
					intégrés (par exemple des vidéos, images, articles…). Le
					contenu intégré depuis d’autres sites se comporte de la même
					manière que si le visiteur se rendait sur cet autre site.
					Ces sites web pourraient collecter des données sur vous,
					utiliser des cookies, embarquer des outils de suivis tiers,
					suivre vos interactions avec ces contenus embarqués si vous
					disposez d’un compte connecté sur leur site web.{" "}
				</p>
				<h1 className="m-5 text-xl underline">
					{" "}
					Utilisation et transmission de vos données personnelles
				</h1>
				<h2 className="m-4 text-lg">
					{" "}
					Durées de stockage de vos données
				</h2>
				<p className="m-3">
					{" "}
					Si vous laissez un commentaire, le commentaire et ses
					métadonnées sont conservés indéfiniment. Cela permet de
					reconnaître et approuver automatiquement les commentaires
					suivants au lieu de les laisser dans la file de modération.
					Pour les utilisateurs et utilisatrices qui s’enregistrent
					sur notre site (si cela est possible), nous stockons
					également les données personnelles indiquées dans leur
					profil. Tous les utilisateurs et utilisatrices peuvent voir,
					modifier ou supprimer leurs informations personnelles à tout
					moment (à l’exception de leur nom d’utilisateur·ice). Les
					gestionnaires du site peuvent aussi voir et modifier ces
					informations.{"  "}
				</p>
				<h2 className="m-4 text-lg">
					{" "}
					Les droits que vous avez sur vos données
				</h2>
				<p className="m-3">
					{" "}
					Si vous avez un compte ou si vous avez laissé des
					commentaires sur le site, vous pouvez demander à recevoir un
					fichier contenant toutes les données personnelles que nous
					possédons à votre sujet, incluant celles que vous nous avez
					fournies. Vous pouvez également demander la suppression des
					données personnelles vous concernant en adressant votre
					demande par mail à info@lesjardinsdalister.com. Cela ne
					prend pas en compte les données stockées à des fins
					administratives, légales ou pour des raisons de sécurité.
				</p>
				<h2 className="m-4 text-lg">
					Transmission de vos données personnelles
				</h2>
				<p className="m-3">
					{" "}
					Les commentaires des visiteurs peuvent être vérifiés à
					l’aide d’un service automatisé de détection des commentaires
					indésirables.
				</p>
			</div>{" "}
			<Footer />
		</div>
	);
}
