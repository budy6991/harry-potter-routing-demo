import React from "react";

export const Home = () => {
  const housesUrl = "https://wizard-world-api.herokuapp.com/Houses";
  const wizardsUrl = "https://wizard-world-api.herokuapp.com/Wizards";
  const spellsUrl = "https://wizard-world-api.herokuapp.com/Spells";

  return (
    <div className="w-full h-full bg-blue-harry flex flex-col items-center justify-around bg-hogwarts bg-blend-multiply ">
      <nav className="w-full h-fit flex justify-center gap-20 bg-[#474d73] bg-opacity-75 border-y-2 border-gold-harry backdrop-blur-sm">
        <h1 className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125">
          Home
        </h1>
        <h1 className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125">
          Houses
        </h1>
        <h1 className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125">
          Wizards
        </h1>
        <h1 className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125">
          Spells
        </h1>
      </nav>
      <div className="flex-col h-2/5 2-1/2 content-between ">
        <div className="w-full h-1/2">
          <h1 className="py-10 text-9xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900  ">
            Harry Potter
          </h1>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center">
          <h2 className="py-5 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl">
            Demo website to test react routing
          </h2>
        </div>
      </div>
    </div>
  );
};
