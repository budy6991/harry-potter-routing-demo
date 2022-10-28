import React from "react";
import { useNavigate } from "react-router-dom";

export const Page = ({ url, title }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-blue-harry flex flex-col items-center bg-hogwarts bg-blend-multiply ">
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
    </div>
  );
};
