import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuPlusSquare } from "react-icons/lu";
import Icon from "./Icon";
import Photo from "../PhotoComponents/Photo";

const Navigation = () => {
  return (
    <footer
      style={{ backgroundColor: "#FAFAFA" }}
      className="fixed bottom-0 justify-around items-center w-full max-w-sm m-auto flex "
    >
      <Icon IconComponent={MdHomeFilled} />
      <Icon IconComponent={IoSearchOutline} />
      <Icon IconComponent={LuPlusSquare} />
      <Icon IconComponent={IoMdHeartEmpty} />
      <Photo size="small" />
    </footer>
  );
};
export default Navigation;
