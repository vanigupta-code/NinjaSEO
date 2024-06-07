import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import Newsletter from "../Newsletter/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    icon: "bs-currency-dollar",
    title: "Pricing",
    description:
      "We keep our prices most affordable for our clients while keeping them fair enough for our writers. ",
  },
  {
    icon: "ai-outline-heart",
    title: "Projects",
    description:
      "Whether a short-term project, or longer-term commitment, we are here for our clients.",
  },
  {
    icon: "bs-clipboard-check",
    title: "Results",
    description:
      "We host the inhouse team of experienced writers and SEO Strategists.",
  },
];

const Section = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);

  return (
    <div className="w-full bg-slate-200 flex justify-around items-center flex-col">
      <div className="flex justify-between items-center flex-col [&>*]:m-5 gap-6 text-center max-w-2xl">
        <h1 className="text-4xl font-bold" data-aos="fade-up">
          Our Mission
        </h1>
        <p className="text-2xl" data-aos="fade-up">
          We want to help small and medium scale businesses by helping them rank
          among <b className="text-green-700">Top 10</b> in google search
          results for their niche.
        </p>
      </div>
      <div className="flex justify-around items-center md:w-full h-max flex-col md:flex-row">
        {data.map((card, idx) => {
          return (
            <Card
              title={card.title}
              description={card.description}
              icon={card.icon}
              key={idx}
            />
          );
        })}
      </div>

      <div className="flex justify-around items-center flex-col gap-5 mt-20 text-center">
        <h1 className="text-5xl">Vivek Kushwah</h1>
        <p className="text-xl">
          My latest and greatest tips, resources, and reads. So much goodness
          all in one place!
        </p>
        <div className="flex justify-center items-center gap-5 text-blue-500">
          <a
            href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADgS7tUBOiddToityeykM9v2FUpzYl1ipSc&keywords=vivek%20kushwah&origin=RICH_QUERY_SUGGESTION&position=0&searchId=89e5bb11-02f2-4572-9f39-a529bc8485d3&sid=!.X"
            target="__blank"
          >
            <AiFillLinkedin className="text-4xl" />
          </a>
          <a href="https://twitter.com" target="__blank">
            <AiFillTwitterSquare className="text-4xl" />
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-5 mt-10">
        <div className="flex justify-center items-center text-center">
          <AiOutlineTwitter />
          <p>
            We recently helped our clients in getting over 50k+ organic traffic
            within 3 months. 🧠🌱📈
          </p>
        </div>
        <a
          href="http://twitter.com/share?&text=We%20recently%20helped%20our%20clients%20in%20getting%20over%2050k%2B%20organic%20traffic%20within%203%20months.%20%F0%9F%A7%A0%F0%9F%8C%B1%F0%9F%93%88&url=https%3A%2F%2Fninjaseo.in%2F2021%2F11%2F02%2Fwhat-is-the-progressive-web-app-pwa-and-how-it-works%2F&via=vivek_kushwah2"
          target="__blank"
        >
          <button
            type="button"
            className="text-white flex justify-center items-center gap-2 bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <AiOutlineTwitter />
            Tweet
          </button>
        </a>
      </div>

      <div className="flex justify-center items-center flex-col text-center bg-abstract-background w-10/12 p-10 m-10 text-white">
        <q className="text-3xl">
          We are what we repeatedly do. Excellence, then, is not an act, but a
          habit.
        </q>
        <p>~Will Durant</p>
      </div>

      <Newsletter />
    </div>
  );
};

export default Section;
