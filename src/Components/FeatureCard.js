import React, { useState } from "react";
import "./FeatureCard.css";

function FeatureCard(props) {
	const { isSmallScreen } = props;

	const { name, img, imgLg, type, url } = props.feature;
	const { id, textColor } = props;

	const [hovering, setHovering] = useState(false);

	const styles = {
		backgroundImage: `url(${isSmallScreen ? img : imgLg})`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		color: textColor,
		backgroundColor: img ? "" : "#BCA37D",
	};

	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className={`featurecard-ctn`}
			style={styles}
			id={id}
			onMouseEnter={() => {
				setHovering(true);
			}}
			onMouseLeave={() => {
				setHovering(false);
			}}
		>
			<div
				className="name"
				style={{ display: `${!hovering && !isSmallScreen ? "none" : "block"}` }}
			>
				{name}
			</div>
			<div
				className="type"
				style={{ display: `${!hovering && !isSmallScreen ? "none" : "block"}` }}
			>
				{type}
			</div>
		</a>
	);
}

export default FeatureCard;
