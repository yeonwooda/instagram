import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

// bottomHeader를 interactiveIcons라고 부름
const InteractiveIcons = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="flex items-center flex-row justify-between mt-3 mb-3">
      <div className="flex flex-1 items-center gap-2 ">
        {isLike ? (
          <FaHeart onClick={() => setIsLike(!isLike)} />
        ) : (
          <FaRegHeart onClick={() => setIsLike(!isLike)} />
        )}

        <FiMessageCircle />
        <PiTelegramLogo />
      </div>
      <div className="flex flex-1">
        <HiDotsHorizontal />
      </div>
      <div className="flex flex-row  relative">
        <FiBookmark />
      </div>
    </div>
  );
};
export default InteractiveIcons;
