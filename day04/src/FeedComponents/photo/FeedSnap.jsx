import FeedPhoto from "./FeedPhoto";

const FeedSnap = () => {
  return (
    <div className="hide-scrollbar flex w-full h-96 snap-x snap-mandatory overflow-x-scroll">
      <FeedPhoto image="tokyo.jpg" />
      <FeedPhoto image="tokyo2.jpg" />
      <FeedPhoto image="tokoy3.jpg" />
    </div>
  );
};
export default FeedSnap;
