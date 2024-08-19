import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Photo from "../../PhotoComponents/Photo";
import NameLabel from "./NameLabel";
import PlaceLabel from "./PlaceLabel";

const FeedHeader = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex items-center gap-2">
        <Photo size={"medium"} />
        <div className="flex flex-col gap-1">
          <NameLabel isPopular={true} />
          <PlaceLabel city={"Tokyo"} nation={"Japan"} />
        </div>
      </div>
      <div>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
};
export default FeedHeader;
