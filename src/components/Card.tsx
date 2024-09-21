import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  listStyle?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  listStyle,
}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      className={`bg-white w-full shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  ${
        listStyle === "grid" ? "flex flex-col" : "flex flex-row h-[185px]"
      }`}
    >
      {/* In grid, image is at the top; in list, image is next to text */}
      <img
        src={imageUrl}
        alt={title}
        className={`${
          listStyle === "grid" ? "w-full h-56" : "w-1/3 h-auto"
        } object-cover`}
      />
      <div className={`${listStyle === "grid" ? "p-4" : "p-4 w-2/3"}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-2 text-right">{title}</h2>
          {liked ? (
            <FaHeart
              size={30}
              color={"#EA8D09"}
              onClick={() => setLiked(!liked)}
              className="cursor-pointer"
            />
          ) : (
            <CiHeart
              onClick={() => setLiked(!liked)}
              className="cursor-pointer"
              size={30}
              color={"#6D6D6D"}
            />
          )}
        </div>
        <p className="font-normal text-lg text-right max-w-[450px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
