import PrimaryBtn from "./../Buttons/Primary";
import { Link } from "react-router-dom";

const Avatar = ({ card }) => {
  return (
    <div className="avatar-wrapper">
      <h2 className="text-2xl text-teal-400 text-left">{card.name}</h2>
      <div className="uppercase text-slate-400 font-medium mb-3">{card.tags}</div>
      <div className="flex justify-between items-center">
        <img
          className="avatar"
          src={card.imageUrl}
          alt={"Photo of " + card.name}
          style={{
            width: card.imageSize,
            height: card.imageSize,
          }}
        />
        <p className="my-2">{card.description}</p>
      </div>
      <Link key={card.id} to={card.url} target={"_blank"}>
        <PrimaryBtn text={"Érdekel"} />
      </Link>
    </div>
  );
};

export default Avatar;
