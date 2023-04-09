import React from "react";

const Home = () => {
  return (
    <div>
      <div className="mt-10">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs mx-3"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs  mx-3"
        />
        <button className="btn btn-outline btn-warning"> Add </button>
      </div>
    </div>
  );
};

export default Home;
