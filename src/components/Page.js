import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DisplayCards } from "./DisplayCards";

export const Page = ({ url, title }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loadind, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  console.log(data);

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
      <div className="p-6 m-6 text-6xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900">
        <h2>{title}</h2>
      </div>
      <div className="w-full h-3/5 flex justify-center">
        {title === "Houses" ? (
          <DisplayCards houses={data} />
        ) : title === "wizards" ? (
          <DisplayCards wizards={data} />
        ) : null}
      </div>
    </div>
  );
};
