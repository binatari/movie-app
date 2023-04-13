import React from "react";
type movie = {
  poster_path: string;
  title: string;
  release_date: string;
};
const MovieCard = ({ poster_path, title, release_date }: movie) => {
  return (
    <div className="cursor-pointer">
      {" "}
      <div
        className="rounded-[4px] h-[266px] w-full max-w-[200px] bg-center bg-cover"
        style={{
          backgroundImage: poster_path
            ? `url(https://image.tmdb.org/t/p/original${poster_path})`
            : "url(/images/no-image.jpg)",
        }}
      ></div>
      <p className="font-semibold mt-4 mb-2 text-white">{title}</p>
      <p className="text-xs text-[#E0E3E8]">
        {new Date(release_date).getFullYear()}{" "}
        <span className="text-[#7B808B]">|</span> {"1h35m"}
      </p>
    </div>
  );
};

export default MovieCard;
