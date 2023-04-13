import React from "react";

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
const ProductBbanner = ({
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
  return (
    <div
      className=" pb-[175.5px] pt-[255.5px] relative bg-center bg-cover"
      style={{
        background: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full object-cover object-center -z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(27, 31, 50, 0.4) 41.56%, rgba(27, 31, 50, 0) 97.11%)",
        }}
      />
      <div className="z-50 container mx-auto w-full text-white  pr-8">
        <div className="max-w-[592px]">
          <p className="text-sm leading-[22px]">
            <span className="text-[#E8BA35]">Featured</span>
            {" | "}
            {new Date(release_date).getFullYear()}
            {" | "}
          </p>
          <h1 className="text-[#FDFDFD] text-[42px] leading-[44px] font-bold">
            {title}
          </h1>
          <div className="flex gap-3 mt-5">
            <div className="flex gap-1 items-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M5.74001 16.5C5.85001 16.01 5.65001 15.31 5.30001 14.96L2.87001 12.53C2.11001 11.77 1.81001 10.96 2.03001 10.26C2.26001 9.56 2.97001 9.08 4.03001 8.9L7.15001 8.38C7.60001 8.3 8.15001 7.9 8.36001 7.49L10.08 4.04C10.58 3.05 11.26 2.5 12 2.5C12.74 2.5 13.42 3.05 13.92 4.04L15.64 7.49C15.77 7.75 16.04 8 16.33 8.17L5.56001 18.94C5.42001 19.08 5.18001 18.95 5.22001 18.75L5.74001 16.5Z"
                  fill="#E6B220"
                />
                <path
                  d="M18.7 14.9599C18.34 15.3199 18.14 16.0099 18.26 16.4999L18.95 19.5099C19.24 20.7599 19.06 21.6999 18.44 22.1499C18.19 22.3299 17.89 22.4199 17.54 22.4199C17.03 22.4199 16.43 22.2299 15.77 21.8399L12.84 20.0999C12.38 19.8299 11.62 19.8299 11.16 20.0999L8.22999 21.8399C7.11999 22.4899 6.16999 22.5999 5.55999 22.1499C5.32999 21.9799 5.15999 21.7499 5.04999 21.4499L17.21 9.2899C17.67 8.8299 18.32 8.6199 18.95 8.7299L19.96 8.8999C21.02 9.0799 21.73 9.5599 21.96 10.2599C22.18 10.9599 21.88 11.7699 21.12 12.5299L18.7 14.9599Z"
                  fill="#E6B220"
                />
              </svg>
              <p className="semibold">{vote_average}</p>
            </div>
            <div className="rounded-[100px] border border-[#CBD1D8] py-1 px-3">
              {adult ? "18+" : "13+"}
            </div>
          </div>

          <p className="mt-[28px] mb-[32px]">{overview}</p>
          <div className="flex gap-2">
            <button className="bg-[#3772FF] px-6 py-3 rounded-[6px] font-medium flex items-center justify-center gap-1">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M6.9825 13.3334C10.2042 13.3334 12.8158 10.7217 12.8158 7.50008C12.8158 4.27842 10.2042 1.66675 6.9825 1.66675C3.76084 1.66675 1.14917 4.27842 1.14917 7.50008C1.14917 10.7217 3.76084 13.3334 6.9825 13.3334Z"
                  fill="white"
                />
                <path
                  d="M8.73249 6.46749L7.04082 5.49332C6.62082 5.24832 6.11332 5.24832 5.69333 5.49332C5.27333 5.73832 5.02249 6.16999 5.02249 6.65999V8.61415C5.02249 9.09832 5.27333 9.53582 5.69333 9.78082C5.90333 9.90332 6.13666 9.96165 6.36416 9.96165C6.59749 9.96165 6.82499 9.90332 7.03499 9.78082L8.72666 8.80665C9.14666 8.56165 9.39749 8.12999 9.39749 7.63999C9.40916 7.14999 9.15832 6.71249 8.73249 6.46749Z"
                  fill="white"
                />
              </svg>
              Watch now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBbanner;
