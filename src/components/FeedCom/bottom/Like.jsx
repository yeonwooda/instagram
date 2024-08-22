const Like = () => {
  const likePeople = [
    "craing_love",
    "jinseal",
    "woo",
    "choi",
    "kim",
    "bae",
    "seo",
  ];
  return (
    <div className="flex gap-1">
      <Photo size="small" />
      <LikebyPeople likePeople={likePeople} />
    </div>
  );
};
export default Like;
