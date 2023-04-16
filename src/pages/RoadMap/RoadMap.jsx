import React from "react";
import { Icon } from "@iconify/react";
import Avatar from "../../components/About/Avatar";
import RoadMapData from "../../data/roadmap.json";
import RoadMapImg from "../../assets/png/roadmap.png";
const alt = "Freepik photo edited by Zsena: Roadmap image for a webdevelopment";

const RoadMap = () => {
  return (
    <section className="container mx-auto pt-10">
      <h1 className="text-4xl py-10">
        Roadmap <Icon icon="vscode-icons:file-type-html" />
      </h1>

      <img
        className="mb-10 rounded-2xl max-w-[70%] mx-auto"
        src={RoadMapImg}
        alt={alt}
      />
      <section className="flex items-center justify-around flex-wrap">
        {RoadMapData.map((roadMap) => {
          return (
            <Avatar
              key={roadMap.id}
              card={{
                name: roadMap.title,
                imageUrl: roadMap.imagePath,
                description: roadMap.excerpt,
                imageSize: 80,
                url: roadMap.url,
                tags: roadMap.tags,
              }}
            />
          );
        })}
      </section>
    </section>
  );
};

export default RoadMap;
