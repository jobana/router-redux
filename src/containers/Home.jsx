import React from "react";
import { connect } from "react-redux";

import Searcher from "../components/Searcher";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
//import useInitialState from "../hooks/useInitialState";

// con redux
const Home = ({ myList, trends, originals }) => {
	const lists = [myList, trends, originals];
	const categories = ["Mi Lista", "Tendencias", "Originales de PatVideo"];

	return (
		<>
			<Searcher />
			{categories.map(
				(category, i) =>
					lists[i].length > 0 && (
						<Categories key={category} title={category}>
							<Carousel>
								{lists[i].map((item) => (
									<CarouselItem key={item.id} {...item} />
								))}
							</Carousel>
						</Categories>
					)
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		myList: state.myList,
		trends: state.trends,
		originals: state.originals,
	};
};

export default connect(mapStateToProps, null)(Home);

//Con el hook todo unido:

//const API = "http://localhost:3000/initialState";

// const Home = () => {
// 	const [videos, categories] = useInitialState(API);
// 	return (
// 		<div className="App">
// 			<Searcher />
// 			{categories.map(
// 				(category) =>
// 					videos[category].length > 0 && (
// 						<Categories key={category} title={category}>
// 							<Carousel>
// 								{videos[category].map((item) => (
// 									<CarouselItem key={item.id} {...item} />
// 								))}
// 							</Carousel>
// 						</Categories>
// 					)
// 			)}
// 		</div>
// 	);
// };

// export default Home;
