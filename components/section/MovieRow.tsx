import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import MovieCard from "../card/MovieCard";
import Link from "next/link";

type movies = {
  backdrop_path: string;
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  adult: boolean;
}[];
const MovieRow = ({ movies }: { movies: movies }) => {
  return (
    <div className="mt-12 mb-16">
      <div className="container mx-auto overflow-x-visible">
        <div className="flex mb-6">
          <p className="text-[20px] font-semibold text-white ">
            Movies for you
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            350: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }}
          slidesPerView={1}
          modules={[FreeMode]}
          freeMode={true}
          className="mySwiper overflow-visible"
          style={{ overflow: "visible" }}
        >
          {movies?.map(({ id, release_date, title, poster_path }) => (
            <SwiperSlide key={id} className="flex justify-center">
              <Link href={`/movie/${id}`}>
                <MovieCard
                  release_date={release_date}
                  title={title}
                  poster_path={poster_path}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieRow;
