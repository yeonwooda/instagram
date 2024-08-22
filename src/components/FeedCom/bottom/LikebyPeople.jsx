import Photo from "../../PhotoComponents/Photo";

const LikebyPeople = (props) => {
  const data = {
    image: "story/story1.jpg",
  };
  const { likePeople } = props;

  return !!likePeople ? (
    <span className="text-xs">
      Liked by <span className="font-semibold">{likePeople[0]}</span> and
      <span className="font-semibold">{likePeople.length}</span>others
      <span className="font-bold">{props.friendsName}</span>
    </span>
  ) : (
    <span>No likse</span>
  );
};
export default LikebyPeople;
