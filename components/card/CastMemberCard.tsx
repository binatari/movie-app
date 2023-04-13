import React from "react";
type actor = {
  name: string;
  character: string;
  profile_path?: string;
  id: number;
};
const CastMemberCard = ({ profile_path, character, name, id }: actor) => {
  return (
    <div className="cursor-pointer">
      {" "}
      <div
        className="rounded-[4px] h-[199px] w-full max-w-[199px] bg-center bg-cover"
        style={{
          backgroundImage: profile_path
            ? `url(https://image.tmdb.org/t/p/original${profile_path})`
            : "url(/images/no-image.jpg)",
        }}
      ></div>
      <p className="font-semibold mt-4 mb-2 text-white">{name}</p>
      <p className="text-xs text-[#E0E3E8]">{character}</p>
    </div>
  );
};

export default CastMemberCard;
