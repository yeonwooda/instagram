const BottomDate = (props) => {
  return (
    <div className="w-full mt-5">
      <span className="text-gray-500 text-sm">
        {props.date || "No Month Date"}
      </span>
    </div>
  );
};
export default BottomDate;
