import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container inline-block justify-content-start m-3 red'>
					<img src={movie.Poster} alt='movie'></img>
					<h1>{movie.Title}</h1>
					<h2>{movie.Year}</h2>
					{/* <h3>{movie.genre}</h3> */}
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-inline-block align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
