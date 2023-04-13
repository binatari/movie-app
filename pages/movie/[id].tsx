import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";

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
};

const movie = ({
  vote_average,
  title,
  runtime,
  genres,
  overview,
  backdrop_path,
  id,
  adult,
  release_date,
}: moviedetails) => {
  console.log(vote_average);
  return <div>[id]</div>;
};

export default movie;

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

  const movie: moviedetails = await getMovie.json().then((res) => res);

  return {
    // Passed to the page component as props
    props: { ...movie },
  };
}
