import React from "react";

export const HouseCards = ({
  name,
  houseColours,
  animal,
  commonRoom,
  element,
  founder,
  ghost,
  id,
}) => {
  return (
    <div className="border-2 border-white p-5 rounded-xl">
      <div className="font-harry text-yellow-harry text-xl">
        <h1>Name: {name}</h1>
        <h1>Colors: {houseColours}</h1>
        <h1>Animal: {animal}</h1>
        <h1>Common Room: {commonRoom}</h1>
        <h1>Element: {element}</h1>
        <h1>Founder: {founder}</h1>
        <h1>Ghost: {ghost}</h1>
      </div>
    </div>
  );
};
