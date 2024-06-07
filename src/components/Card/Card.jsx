import React from "react";
import Icons from "../Icons";

const Card = (props) => {
  return (
    <div className="flex justify-around items-center flex-col [&>*]:m-2 w-10/12 bg-white md:w-1/3 m-5 p-5 text-center h-full border border-gray-300 rounded-2xl">
      <Icons name={props.icon} />
      <h1 className="text-3xl">{props.title}</h1>
      <p className="text-base">{props.description}</p>
    </div>
  );
};

export default Card;
