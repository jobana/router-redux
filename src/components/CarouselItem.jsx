import React from "react";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";
import PropTypes from "prop-types";

import play from "../assets/images/play-icon.png";
import plus from "../assets/images/plus-icon.png";
import remove from "../assets/images/user-icon.png";

const CarouselItem = (props) => {
	const { id, cover, title, year, contentRating, duration } = props;

	const handleSetFavorite = () => {
		props.setFavorite({ id, cover, title, year, contentRating, duration });
	};

	const handleDeleteFavorite = (itemId) => {
		props.deleteFavorite(itemId);
	};

	return (
		<div className="carousel__item">
			<img className="carousel__item__image" src={cover} alt={title} />
			<div className="carousel__item__details">
				<img src={play} alt="play" />
				<img src={plus} alt="plus" onClick={handleSetFavorite} />
				<img src={remove} alt="remove" onClick={() => handleDeleteFavorite(id)} />
				<h3>{title}</h3>
				<p>{`${year} ${contentRating} ${duration}`}</p>
			</div>
		</div>
	);
};

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
};

const mapDispatchToProps = {
	setFavorite,
	deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
