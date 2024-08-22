import Photo from "../../PhotoComponents/Photo";
import LikeByPeople from "./LikeByPeople";

const Like = (props) => {
  return (
    <div className="flex gap-1">
      <Photo size="small" image={props.image} />
      <LikeByPeople likePeople={props.likePeople} />
    </div>
  );
};
export default Like;
