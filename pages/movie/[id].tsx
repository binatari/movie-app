import React, { useEffect, useRef, useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import ProductBbanner from "@/components/section/ProductBbanner";
import MovieRow from "@/components/section/MovieRow";
import CastRow from "@/components/section/CastRow";
import { motion } from "framer-motion";
import Transition from "@/components/Layouts/Transition";
import CastGrid from "@/components/section/CastGrid";
import MovieGrid from "@/components/section/MovieGrid";

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

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // const first = useRef<HTMLButtonElement>(null);

  // const second = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Transition />
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
      <div className="md:block hidden">
        <CastRow actors={actors} title="Cast" />
        <MovieRow movies={movies} title="You might also like" />
      </div>
      <div className=" md:hidden ">
        <div className="relative my-6">
          <div className="flex space-x-3 container px-[15px] text-white">
            <button
              ref={(el) => (tabsRef.current[0] = el)}
              className={
                "pt-2 pb-3" + !activeTabIndex
                  ? "text-[#C3C5CA]"
                  : "text-[#FDFDFD]"
              }
              onClick={() => setActiveTabIndex(0)}
            >
              Cast
            </button>
            <button
              ref={(el) => (tabsRef.current[1] = el)}
              className={
                "pt-2 pb-3" + activeTabIndex
                  ? "text-[#C3C5CA]"
                  : "text-[#FDFDFD]"
              }
              onClick={() => setActiveTabIndex(1)}
            >
              Recommended
            </button>
          </div>
          <span
            className="absolute bottom-0 block h-1 bg-[#98B6FF] transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          />
        </div>
        {activeTabIndex ? (
          <MovieGrid movies={movies} />
        ) : (
          <CastGrid actors={actors} />
        )}
      </div>
    </motion.div>
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
