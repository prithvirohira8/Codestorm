import React, { Component } from "react";
import Card from "./CardUI";
import react from "./images/react.png";
import node from "./images/node.png";
import mongo from "./images/mongo.jpg";
import angular from "./images/angular.png";
import django from "./images/django.png";
import graph from "./images/graph.png";
import ReactPlayer from 'react-player';
import FooterNew from './FooterNew';
import "./Card.css"
import './Footer.css'
export default function Cards() {

	return (
		<div>
			<>
				<br></br>
				<div className = "AboutUs">
					<div className="align_div">
						<h1 className="align_text">About Us</h1>
					</div>
					<div className="align_div">
						<h5 className="align_text">Alpha is an organization soley dedicated to teach users full stack web development by providing the most refined and qualitu quality content after interaction with 1500+ proffessionals in the field. We strongly believe in open source development and aim to create a community that helps developers and users interact grow.</h5>
					</div>
				</div>
				<div className="Iframe">
				</div>
				<br></br>
				<div className="What_do_we_provide">
					<div className="align_div">
						<h1 className="align_text">What do we Provide</h1>
					</div>
					<div className="align_div">
						<ul>
							<li><h5 className="align_text">A refined and filtererd full stack web development course after browsing through many different courses from indivisuals.</h5></li>
							<li><h5 className="align_text">Free Courses of web development tech stacks for users from proffessionals from all over the world.</h5></li>
							<li><h5 className="align_text">A quiz after each tutorial to test your knowledge.</h5></li>
							<li><h5 className="align_text">A discussion forum under each tutorial to discuss doubts and tech related queries.</h5></li>
						</ul>
					</div>
				</div>
				<br></br>
				<br></br>
				<div className="align_text">
					<h1>Tech Stacks Covered</h1>
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
			<FooterNew />
		</div>
	)
}
