import Story from "./Story";

const Storyboard = () => {
  const friends = [
    { name: "truthy", image: "Story/story1.jpg" },
    { name: "donald", image: "Story/story2.jpg" },
    { name: "trump", image: "Story/story3.jpg" },
    { name: "biden", image: "Story/story4.jpg" },
    { name: "harrison", image: "Story/story5.jpg" },
    { name: "korea", image: "Story/story6.jpg" },
    { name: "ito", image: "Story/story7.jpg" },
    { name: "abcd", image: "Story/story8.jpg" },
    { name: "defd", image: "Story/story9.jpg" },
  ];

  return (
    <div className="hide-scrollbarborder-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll hide-scrollbar">
      {friends.map((v) => (
        <Story image={v.image} name={v.name} />
      ))}
    </div>
  );
};

export default Storyboard;
