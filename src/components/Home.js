import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const housesUrl = "https://wizard-world-api.herokuapp.com/Houses";
  const wizardsUrl = "https://wizard-world-api.herokuapp.com/Wizards";
  const spellsUrl = "https://wizard-world-api.herokuapp.com/Spells";

  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-blue-harry flex flex-col items-center justify-around bg-hogwarts bg-blend-multiply ">
      <nav className="w-full h-fit flex justify-center gap-20 bg-[#474d73] bg-opacity-75 border-y-2 border-gold-harry backdrop-blur-sm">
        <button
          className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125"
          onClick={() => navigate("/houses")}
        >
          Houses
        </button>
        <button
          className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125"
          onClick={() => navigate("/wizards")}
        >
          Wizards
        </button>
        <button
          className="p-10 text-4xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl transition ease-in-out hover:scale-125"
          onClick={() => navigate("/spells")}
        >
          Spells
        </button>
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
