import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center text-slate-500 mb-8">
        Hello from Home!
      </h1>
      <p className="text-lg text-center text-slate-400">
        Dear user, thanks for being here. Have a wonderful day!
      </p>
    </div>
  );
}

export default Home;
