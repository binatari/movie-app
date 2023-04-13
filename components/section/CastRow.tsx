import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import MovieCard from "../card/MovieCard";
import Link from "next/link";
import CastMemberCard from "../card/CastMemberCard";
type actors = {
  name: string;
  character: string;
  profile_path?: string;
  id: number;
}[];
const CastRow = ({ actors, title }: { actors?: actors; title?: string }) => {
  return (
    <div className="mt-12 mb-16">
      <div className="container mx-auto overflow-x-visible">
        <div className="flex mb-6">
          <p className="text-[20px] font-semibold text-white ">{title}</p>
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
          {actors?.map(({ id, profile_path, character, name }) => (
            <SwiperSlide key={id} className="flex justify-center">
              <CastMemberCard
                id={id}
                profile_path={profile_path}
                character={character}
                name={name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CastRow;
