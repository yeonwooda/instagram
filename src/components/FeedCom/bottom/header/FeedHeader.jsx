import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Photo from "../../PhotoComponents/Photo";
import NameLabel from "./NameLabel";
import PlaceLabel from "./PlaceLabel";

const FeedHeader = (props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Photo image={props.image} size={"medium"} />
        <div className="flex flex-col gap-1">
          <NameLabel name={props.name} isPopular={props.isPopular} />
          <PlaceLabel city={props.city} nation={props.nation} />
        </div>
      </div>
      <div>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
};
export default FeedHeader;
