const Diary = (props) => {
  return (
    <span>
      <span className="font-bold">{props.name || "Unnamed"}</span> The game in
      Japan was amazinga and Iwant to share some photos
    </span>
  );
};
export default Diary;
