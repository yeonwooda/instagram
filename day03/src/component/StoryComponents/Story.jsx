const Story = (props) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs font-semibold">
        {props.name || "Your Story"}
      </span>
    </div>
  );
};
export default Story;
