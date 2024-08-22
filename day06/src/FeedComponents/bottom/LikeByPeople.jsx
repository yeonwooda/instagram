const LikeByPeople = (props) => {
  const { likePeople } = props;

  return !!likePeople ? (
    <span className="text-xs">
      Liked by <span className="font-semibold">{likePeople[0]}</span> and
      <span className="font-semibold"> {likePeople.length}</span> others
    </span>
  ) : (
    <span>No likse</span>
  );
};
export default LikeByPeople;
