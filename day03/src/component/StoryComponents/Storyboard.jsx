import Story from "./Story";

const Storyboard = () => {
  return (
    <div className="hide-scrollbarborder-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll hide-scrollbar">
      <Story />
    </div>
  );
};

export default Storyboard;
