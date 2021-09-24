import React, { Component } from "react";
import Card from "./CardUI";
import react from "./images/react.png";
import node from "./images/node.png";
import mongo from "./images/mongo.jpg";
import angular from "./images/angular.png";
import django from "./images/django.png";
import graph from "./images/graph.png";
import ReactPlayer from 'react-player';
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
				<br></br>
				<div className="Iframe">
				<ReactPlayer width="480px" height="240px"  controls url='https://www.youtube.com/watch?v=NVO7dPrPpVY'/>
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
			<footer className="w-100 py-4 flex-shrink-0">
				<div className="container py-4">
					<div className="row gy-4 gx-5">
						<div className="col-lg-4 col-md-6">
							<h5 className="h1 text-white">FB.</h5>
							<p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
							<p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
						</div>
						<div className="col-lg-2 col-md-6">
							<h5 className="text-white mb-3">Quick links</h5>
							<ul className="list-unstyled text-muted">
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Get started</a></li>
								<li><a href="#">FAQ</a></li>
							</ul>
						</div>
						<div className="col-lg-2 col-md-6">
							<h5 className="text-white mb-3">Quick links</h5>
							<ul className="list-unstyled text-muted">
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Get started</a></li>
								<li><a href="#">FAQ</a></li>
							</ul>
						</div>
						<div className="col-lg-4 col-md-6">
							<h5 className="text-white mb-3">Newsletter</h5>
							<p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
							<form action="#">
								<div className="input-group mb-3">
									<input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
									<button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
