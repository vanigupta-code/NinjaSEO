import React from "react";

const Newsletter = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 m-5 p-5 bg-white rounded-lg">
      <h1 className="text-4xl">News in Your Inbox</h1>
      <p>Subscribe to our newsletter to receive bi-monthly updates.</p>
      <form className="flex justify-center items-center md:flex-row flex-col gap-4 p-4 border-l-4 border-gray-500">
        <input
          type="email"
          placeholder="you@example.com"
          id="email"
          className="outline-none p-1 border rounded border-solid border-gray-500 placeholder-gray-500 focus:border-black "
        />
        <button
          className="p-2 bg-gray-600 hover:bg-black hover:border-black text-white border rounded border-solid border-gray-600 ml-2"
          type="submit"
        >
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
