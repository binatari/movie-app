import React, { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import ProductBbanner from "@/components/section/ProductBbanner";
import MovieRow from "@/components/section/MovieRow";
import CastRow from "@/components/section/CastRow";

type actor = {
  name: string;
  character: string;
  profile_path?: string;
  id: number;
};

type moviedetails = {
  vote_average: number;
  title: string;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  backdrop_path: string;
  id: number;
  adult: boolean;
  release_date: string;
  actors?: actor[];
};

type Movies = {
  backdrop_path: string;
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  adult: boolean;
  poster_path: string;
}[];

const Movie = ({
  vote_average,
  title,
  runtime,
  genres,
  overview,
  backdrop_path,
  id,
  adult,
  release_date,
  actors,
}: moviedetails) => {
  // console.log(vote_average);
  const [movies, setMovies] = useState<Movies>([]);
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=79df6e7ff6e4584f69159203960ebedc"
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <ProductBbanner
        vote_average={vote_average}
        title={title}
        runtime={runtime}
        genres={genres}
        overview={overview}
        backdrop_path={backdrop_path}
        id={id}
        adult={adult}
        release_date={release_date}
      />
      <CastRow actors={actors} title="Cast" />
      <MovieRow movies={movies} title="You might also like" />
    </div>
  );
};

export default Movie;

// Generates `/posts/1` and `/posts/2`

type moveId = {
  id: number;
}[];

type results = {
  results: moveId;
};

export async function getStaticPaths() {
  const getMovies = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=79df6e7ff6e4584f69159203960ebedc"
  );

  const movies = await getMovies.json().then((res: results) => res.results);

  const paths = movies.map(({ id }) => {
    return { params: { id: id.toString() } };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: GetStaticPropsContext) {
  const getMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.id}?api_key=79df6e7ff6e4584f69159203960ebedc`
  );

  const getCast = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.id}/credits?api_key=79df6e7ff6e4584f69159203960ebedc`
  );

  const movie: moviedetails = await getMovie.json().then((res) => res);
  const cast = await getCast.json().then((res) => res);

  return {
    // Passed to the page component as props
    props: { ...movie, actors: cast?.cast },
  };
}
