import Link from "next/link";
import React from "react";
import MovieCard from "../card/MovieCard";
type movies = {
  backdrop_path: string;
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  adult: boolean;
}[];
const MovieGrid = ({ movies }: { movies: movies }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {movies?.map(({ id, release_date, title, poster_path }) => (
        <Link key={id} href={`/movie/${id}`}>
          <MovieCard
            release_date={release_date}
            title={title}
            poster_path={poster_path}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieGrid;
