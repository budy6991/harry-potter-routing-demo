import React from "react";

export const SpellList = ({ name, effect }) => {
  return (
    <div className="flex justify-between bg-gradient-to-br from-bourdeaux-harry to-black m-5 p-5 rounded-r-full font-harry text-2xl transition-all hover:scale-105">
      <h2 className="text-yellow-harry">{name}</h2>
      <h2 className="text-gray-200 text-right  ">{effect}</h2>
    </div>
  );
};
