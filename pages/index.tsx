import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import HeroSection from "@/components/section/HeroSection";
import MovieRow from "@/components/section/MovieRow";
import { motion } from "framer-motion";
import Transition from "@/components/Layouts/Transition";

const inter = Inter({ subsets: ["latin"] });
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

export default function Home() {
  const [movies, setMovies] = useState<Movies>([]);
  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <motion.main exit={{ opacity: 0 }} className="flex min-h-screen flex-col">
      <Transition />
      <HeroSection movies={movies} />
      <MovieRow movies={movies} title="Movies for you" />
    </motion.main>
  );
}
