import React from "react";

export const Home = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-harry to-black flex justify-center items-center">
      <div className="flex-col h-2/5 2-1/2 content-between">
        <div className="w-full h-1/2">
          <h1 className="py-10 text-9xl font-harry text-transparent bg-clip-text bg-gradient-to-b from-yellow-harry to-yellow-900 drop-shadow-xl">
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
