import Story from "./Story";

const Storyboard = (props) => {
  return (
    <div className="border-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll hide-scrollbar">
      {Array(props.friends)
        .fill()
        .map((v) => (
          <Story />
        ))}
    </div>
  );
};

export default Storyboard;
