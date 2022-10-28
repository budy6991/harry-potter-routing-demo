import React from "react";
import { HouseCards } from "./HouseCards";
import { WizardCards } from "./WizardCards";
import { SpellList } from "./SpellList";

export const DisplayCards = ({ houses, wizards, spells }) => {
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
  } else if (wizards) {
    const displayAll = wizards.map((wizard) => {
      console.log(wizard.firstName);
      return (
        <WizardCards firstName={wizard.firstName} lastName={wizard.lastName} />
      );
    });
    return <div className="flex flex-wrap justify-center">{displayAll}</div>;
  } else if (spells) {
    const displayAll = spells.map((spell) => {
      return <SpellList name={spell.name} effect={spell.effect} />;
    });
    return (
      <div className="w-3/5 h-full backdrop-blur-sm overflow-scroll p-5 rounded-xl">
        {displayAll}
      </div>
    );
  }
};

//This will take an array, map over it and return as many cards elements.
