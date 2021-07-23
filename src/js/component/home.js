import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Nav from "./navbar.js";
import { Carrusel } from "./tarjeta.js";

//create your first component
export function Home() {
	return (
		<div>
			<Nav />
			<Carrusel
				imagen1="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl"
				imagen2="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"
				imagen3="https://www.hogarmania.com/archivos/201204/estrenimiento-gato-bebe2-xl-668x400x80xX.jpg"
			/>
		</div>
	);
}
