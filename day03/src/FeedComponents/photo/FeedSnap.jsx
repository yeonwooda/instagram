import FeedPhoto from "./FeedPhoto";

const FeedSnap = () => {
  return (
    <div className="hide-scrollbar flex w-full h-96 snap-x snap-mandatory overflow-x-scroll">
      <FeedPhoto image="tokoy.jpj" />
      <FeedPhoto image="tokoy2.jpj" />
      <FeedPhoto image="tokoy3.jpj" />
    </div>
  );
};
export default FeedSnap;
