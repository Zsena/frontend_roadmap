import { Icon } from "@iconify/react";
import PrimaryBtn from "./../Buttons/Primary";
import { Link } from "react-router-dom";

const Avatar = ({ card }) => {
  return (
    <div className="avatar-wrapper">
      <h2 className="text-2xl text-teal-400 text-left">{card.name}</h2>
      <div className="badge badge-secondary badge-outline">
        {card.tags}
      </div>
      <div className="flex justify-between items-center">
        <div className="avatar">
          <Icon icon={card.iconType} />
        </div>
        <p className="my-2 ml-4">{card.description}</p>
      </div>
      <Link key={card.id} to={card.url} target={"_blank"}>
        <PrimaryBtn text={"Érdekel"} />
      </Link>
    </div>
  );
};

export default Avatar;
