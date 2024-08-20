import Icon from "../../component/Icon";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { FiBookmark } from "react-icons/fi";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

// bottomHeader를 interactiveIcons라고 부름
const BottomHeader = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="flex items-center flex-row justify-between">
      <div className="flex items-center">
        {isLike ? (
          <FaHeart onClick={() => setIsLike(!isLike)} />
        ) : (
          <FaRegHeart onClick={() => setIsLike(!isLike)} />
        )}

        <Icon IconComponent={FiMessageCircle} />
        <Icon IconComponent={PiTelegramLogo} />
      </div>
      <div>
        <Icon IconComponent={HiDotsHorizontal} />
      </div>
      <div className="flex flex-row  relative">
        <Icon IconComponent={FiBookmark} />
      </div>
    </div>
  );
};
export default BottomHeader;
