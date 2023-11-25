import React from "react";
import homeImage from "../../img/home.jpg";

export const Home = () => (
	<div className="text-center mt-5">
		<figure>
			<img src={homeImage} alt="" style={{maxWidth: "65vh"}} />
		</figure>
	</div>
);
