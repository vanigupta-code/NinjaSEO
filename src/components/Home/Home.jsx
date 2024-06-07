import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center md:items-end items-center w-auto m-5 h-screen bg-no-repeat bg-cover bg-center bg-home-image">
      <div className="md:w-1/2 w-9/12 h-60 bg-teal-600 [&>*]:m-2 flex text-white justify-around items-center flex-col rounded-3xl text-center">
        <h1 className="text-2xl underline underline-offset-4">
          Team of <b>SEO</b> Experts
        </h1>
        <p className="md:text-4xl text-2xl">
          Your <b>SEO</b> Journey Begins Here
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-semibold hover:bg-transparent hover:text-white py-2 px-4 border border-yellow-500 hover:border-yellow-500 rounded-2xl">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default Home;
