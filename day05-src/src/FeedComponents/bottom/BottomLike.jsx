import Photo from "../../PhotoComponents/Photo";

const BottomLike = (props) => {
  const data = {
    image: "story/story1.jpg",
  };
  const { likePeople } = props;

  return !!likePeople ? (
    <div className="flex">
      <div className="min-w-3 min-h-3">
        <Photo image="small" />
      </div>
      <span className="text-xs">
        Liked by
        <span className="font-bold">{props.friendsName}</span>and otheres
      </span>
    </div>
  ) : (
    <span>No likeks</span>
  );
};
export default BottomLike;
