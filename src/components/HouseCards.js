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
  let color = "#FFF";
  let logo = "bg-image";
  let textColor = "#FFF";

  if (name === "Gryffindor") {
    color = "gradient-to-b from-red-harry to-yellow-harry";
    logo = "bg-gryffindorlogo";
    textColor = "text-black";
  } else if (name === "Slytherin") {
    color = "gradient-to-b from-dark-green-slytherin to-green-slytherin";
    logo = "bg-slytherinLogo";
    textColor = "text-white";
  } else if (name === "Hufflepuff") {
    color = "gradient-to-b from-yellow-hufflepuff to-black-hufflepuff";
    logo = "bg-hufflepuffLogo";
    textColor = "text-gray-200";
  } else {
    color = "gradient-to-b from-dark-blue-ravenclaw to-blue-ravenclaw";
    logo = "bg-ravenclawLogo";
    textColor = "text-gray-200";
  }

  return (
    <div
      className={`p-5 rounded-xl bg-${color} flex flex-col justify-between  hover:shadow-lg hover:shadow-yellow-600 `}
    >
      <div
        className={`${logo} w-full h-1/2 bg-contain bg-center bg-no-repeat `}
      ></div>
      <div className={`font-harry ${textColor} text-xl w-full `}>
        <div className="flex justify-between ">
          <h1>Colors</h1> {houseColours}
        </div>
        <div className="flex justify-between">
          <h1>Animal</h1> {animal}
        </div>
        <div className="flex justify-between gap-10">
          <h1>Common Room {" " + " " + " "}</h1> {commonRoom}
        </div>
        <div className="flex justify-between">
          <h1>Element</h1> {element}
        </div>
        <div className="flex justify-between">
          <h1>Founder</h1> {founder}
        </div>
        <div className="flex justify-between">
          <h1>Ghost</h1> {ghost}
        </div>
      </div>
    </div>
  );
};
