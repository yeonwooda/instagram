import { CiCamera } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdBroadcastOnPersonal } from "react-icons/md";
import Icon from "./Icon";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <Icon IconComponent={CiCamera} />
      <div style={{ width: "105px", height: "30px" }}>
        <img className="w-full h-full object-cover" src="logo.png" alt="" />
      </div>
      <div className="flex items-center">
        <Icon IconComponent={MdBroadcastOnPersonal} />
        <Icon IconComponent={CiLocationArrow1} />
      </div>
    </header>
  );
};
export default Header;
