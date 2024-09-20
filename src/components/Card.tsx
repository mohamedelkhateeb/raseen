import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white w-full shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className=" text-xl font-medium mb-2 text-right">{title}</h2>
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
        <p className="font-normal text-sm text-right w-2/3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
