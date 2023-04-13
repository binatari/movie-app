import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import HeroSection from "@/components/section/HeroSection";

const inter = Inter({ subsets: ["latin"] });
type Movies = {
  backdrop_path: string;
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  adult: boolean;
}[];

export default function Home() {
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
    <main className="flex min-h-screen flex-col">
      <HeroSection movies={movies} />
    </main>
  );
}
