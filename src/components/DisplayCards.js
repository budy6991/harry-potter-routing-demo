import React from "react";
import { HouseCards } from "./HouseCards";

export const DisplayCards = ({ houses, wizards }) => {
  if (houses) {
    const displayAll = houses.map((house) => {
      console.log(house.name);
      return (
        <HouseCards
          name={house.name}
          houseColours={house.houseColours}
          animal={house.animal}
          commonRoom={house.commonRoom}
          element={house.element}
          founder={house.founder}
          ghost={house.ghost}
          id={house.id}
          key={house.id}
        />
      );
    });
    return (
      <div className="flex justify-center gap-20 h-full w-full">
        {displayAll}
      </div>
    );
  }
};

//This will take an array, map over it and return as many cards elements.
