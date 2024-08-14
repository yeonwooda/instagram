import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuPlusSquare } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import Icon from "./Icon";

const Navigation = () => {
  return (
    <footer
      style={{ backgroundColor: "#FAFAFA" }}
      className="flex justify-around items-center w-full max-w-sm m-auto fixed bottom-0"
    >
      <Icon IconComponent={MdHomeFilled} />
      <Icon IconComponent={IoSearchOutline} />
      <Icon IconComponent={LuPlusSquare} />
      <Icon IconComponent={IoMdHeartEmpty} />
      <Icon IconComponent={FaRegCircle} />
    </footer>
  );
};
export default Navigation;
