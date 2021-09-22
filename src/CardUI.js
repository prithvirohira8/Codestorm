import React from "react";
import "./card-style.css";

const Card = (props) => {
	return (
		<div className="card text-center">
			<div className="overflow">
				<img src={props.imgsrc} alt="Image1" className="card-img-top" />
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title">{props.title}</h4>
				{/* <p>Some random text</p> */}
				{/* <a className="btn btn-outline-success">Explore</a> */}
			</div>
		</div>
	);
};

export default Card;
