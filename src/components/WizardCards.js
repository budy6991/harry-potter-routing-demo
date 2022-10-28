import React from "react";

export const WizardCards = ({ firstName, lastName }) => {
  return (
    <div className="text-yellow-harry font-harry w-fit h-fit p-5 self-center items-center ">
      <div className="p-5 bg-gradient-to-b from-bourdeaux-harry to-black rounded-full border-white text-3xl hover:shadow-lg transition-all hover:scale-125 hover:cursor-pointer hover:shadow-gold-harry hover:shadow-md">
        <h2>
          {firstName} {lastName}
        </h2>
      </div>
    </div>
  );
};
