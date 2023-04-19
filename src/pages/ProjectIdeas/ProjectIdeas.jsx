import React from "react";
import { Icon } from "@iconify/react";
import Collapse from "../../components/Common/Collapse";
import Banner from "../../assets/png/ideas.png";

var collapseData = [
  {
    clickText: "Ez az első",
    hiddenText:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor, Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a második",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a harmadik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a negyedik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez az első",
    hiddenText:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor, Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a második",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a harmadik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a negyedik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez az első",
    hiddenText:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor, Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a második",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a harmadik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a negyedik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez az első",
    hiddenText:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor, Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a második",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a harmadik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a negyedik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez az első",
    hiddenText:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor, Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a második",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a harmadik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
  {
    clickText: "Ez a negyedik",
    hiddenText: "Lorem ipsum dolor sit amet, lorem ipsum dolor",
  },
];

const ProjectIdeas = () => {
  return (
    <div className="pt-10 min-h-[650px] container mx-auto">
      <div className="prose">
        <h1 className="text-4xl py-10 flex items-center">
          Projekt ötletek
          <Icon
            className="w-20 h-20 text-teal-400"
            icon="academicons:ideas-repec"
          />
        </h1>
      </div>
      <section className="flex 2xl:flex-row-reverse flex-col sm:flex-col-reverse">
        <div className="w-full mx-auto flex items-center justify-center">
          <img className="p-5 w-full object-fill" src={Banner} alt="" />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center 2xl:justify-start flex-wrap">
          {Object.entries(collapseData).map(([key, collapse]) => {
            return (
              <Collapse
                key={key}
                clickText={collapse.clickText}
                hiddenText={collapse.hiddenText}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectIdeas;
