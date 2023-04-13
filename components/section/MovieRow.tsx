import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper";
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
const MovieRow = ({ movies, title }: { movies: movies; title?: string }) => {
  return (
    <div className="mt-12 mb-16 px-4 md:px-0 z-[9999]">
      <div className="container mx-auto overflow-x-visible">
        <div className="flex justify-between mb-6 z-[9999] relative">
          <p className="text-[20px] font-semibold text-white ">{title}</p>
          <div className="flex gap-2 items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer prev-movie"
            >
              <path
                d="M6.99984 13.2709C3.54067 13.2709 0.729004 10.4592 0.729004 7.00008C0.729004 3.54091 3.54067 0.729248 6.99984 0.729248C10.459 0.729248 13.2707 3.54091 13.2707 7.00008C13.2707 10.4592 10.459 13.2709 6.99984 13.2709ZM6.99984 1.60425C4.02484 1.60425 1.604 4.02508 1.604 7.00008C1.604 9.97508 4.02484 12.3959 6.99984 12.3959C9.97484 12.3959 12.3957 9.97508 12.3957 7.00008C12.3957 4.02508 9.97484 1.60425 6.99984 1.60425Z"
                fill="#6E717D"
              />
              <path
                d="M9.0415 7.4375H5.5415C5.30234 7.4375 5.104 7.23917 5.104 7C5.104 6.76083 5.30234 6.5625 5.5415 6.5625H9.0415C9.28067 6.5625 9.479 6.76083 9.479 7C9.479 7.23917 9.28067 7.4375 9.0415 7.4375Z"
                fill="#6E717D"
              />
              <path
                d="M6.7085 9.18751C6.59767 9.18751 6.48684 9.14667 6.39934 9.05917L4.64934 7.30917C4.48017 7.14001 4.48017 6.86001 4.64934 6.69084L6.39934 4.94084C6.5685 4.77167 6.8485 4.77167 7.01767 4.94084C7.18684 5.11001 7.18684 5.39001 7.01767 5.55917L5.57684 7.00001L7.01767 8.44084C7.18684 8.61001 7.18684 8.89001 7.01767 9.05917C6.93017 9.14667 6.81934 9.18751 6.7085 9.18751Z"
                fill="#6E717D"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer next-movie"
            >
              <path
                d="M6.99984 13.2709C3.54067 13.2709 0.729004 10.4592 0.729004 7.00008C0.729004 3.54091 3.54067 0.729248 6.99984 0.729248C10.459 0.729248 13.2707 3.54091 13.2707 7.00008C13.2707 10.4592 10.459 13.2709 6.99984 13.2709ZM6.99984 1.60425C4.02484 1.60425 1.604 4.02508 1.604 7.00008C1.604 9.97508 4.02484 12.3959 6.99984 12.3959C9.97484 12.3959 12.3957 9.97508 12.3957 7.00008C12.3957 4.02508 9.97484 1.60425 6.99984 1.60425Z"
                fill="#72D7F0"
              />
              <path
                d="M8.4585 7.4375H4.9585C4.71933 7.4375 4.521 7.23917 4.521 7C4.521 6.76083 4.71933 6.5625 4.9585 6.5625H8.4585C8.69766 6.5625 8.896 6.76083 8.896 7C8.896 7.23917 8.69766 7.4375 8.4585 7.4375Z"
                fill="#72D7F0"
              />
              <path
                d="M7.29151 9.18751C7.18068 9.18751 7.06984 9.14667 6.98234 9.05917C6.81318 8.89001 6.81318 8.61001 6.98234 8.44084L8.42318 7.00001L6.98234 5.55917C6.81318 5.39001 6.81318 5.11001 6.98234 4.94084C7.15151 4.77167 7.43151 4.77167 7.60068 4.94084L9.35068 6.69084C9.51984 6.86001 9.51984 7.14001 9.35068 7.30917L7.60068 9.05917C7.51318 9.14667 7.40234 9.18751 7.29151 9.18751Z"
                fill="#72D7F0"
              />
            </svg>
          </div>
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
          navigation={{
            prevEl: ".prev-movie",
            nextEl: ".next-movie",
          }}
          slidesPerView={1}
          modules={[FreeMode, Navigation]}
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
