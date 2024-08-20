const BottomText = (props) => {
  return (
    <span className="flex text-base gap-1">
      <span className="font-bold">{props.userName || "Unnamed"}</span>
      <span className="text-base">{props.innerText}</span>
    </span>
  );
};

export default BottomText;
