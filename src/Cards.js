import React, { Component } from "react";
import Card from "./CardUI";
import react from "./images/react.png";
import node from "./images/node.png";
import mongo from "./images/mongo.jpg";
import angular from "./images/angular.png";
import django from "./images/django.png";
import graph from "./images/graph.png";

class Cards extends Component {
	render() {
		return (
			<>
				<div className="heading">
					<h1>Our Tutorial Covers</h1>
				</div>
				<div className="container-fluid d-flex justify-content-center">
					<div className="row">
						<div className="col-md-4">
							<Card imgsrc={node} title="Node JS" />
						</div>
						<div className="col-md-4">
							<Card imgsrc={react} title="React JS" />
						</div>
						<div className="col-md-4">
							<Card imgsrc={mongo} title="MongoDB" />
						</div>
					</div>
				</div>

				<div className="row1">
					<div className="container-fluid d-flex justify-content-center">
						<div className="row">
							<div className="col-md-4">
								<Card imgsrc={angular} title="Angular" />
							</div>
							<div className="col-md-4">
								<Card imgsrc={django} title="Django" />
							</div>
							<div className="col-md-4">
								<Card imgsrc={graph} title="GraphQL" />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Cards;
