import React from "react";
import CastMemberCard from "../card/CastMemberCard";
type actors = {
  name: string;
  character: string;
  profile_path?: string;
  id: number;
}[];
const CastGrid = ({ actors }: { actors?: actors }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {actors?.map(({ profile_path, id, name, character }) => (
        <div key={id} className="flex justify-center">
          <CastMemberCard
            profile_path={profile_path}
            id={id}
            name={name}
            character={character}
          />
        </div>
      ))}
    </div>
  );
};

export default CastGrid;
