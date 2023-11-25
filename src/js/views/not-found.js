import React from "react";
import homeImage from "../../img/home.jpg";

export const NotFound = () => (
	<div className="text-center mt-5">
        <h2 className="text-center mb-0" style={{fontFamily: '"Montserrat Alternates", sans-serif'}}>Not Found</h2>
		<figure>
			<img src={homeImage} alt="" style={{maxHeight: "50vh"}} />
		</figure>
	</div>
);