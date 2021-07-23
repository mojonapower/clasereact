import React from "react";
import PropTypes from "prop-types";

export function Card() {
	return (
		<div className="card">
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
export const Carrusel = props => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src={props.imagen1}
						alt="First slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src={props.imagen2}
						alt="Second slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src={props.imagen3}
						alt="Third slide"
					/>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleControls"
				role="button"
				data-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleControls"
				role="button"
				data-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};

Carrusel.propTypes = {
	imagen1: PropTypes.text,
	imagen2: PropTypes.text,
	imagen3: PropTypes.text
};
