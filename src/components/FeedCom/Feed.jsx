import FeedBottom from "./bottom/FeedBottom";
import FeedHeader from "./bottom/header/FeedHeader";
import FeedSnap from "./bottom/header/photo/FeedSnap";

const Feed = () => {
  return (
    <>
      <FeedHeader />
      <FeedSnap />
      <FeedBottom></FeedBottom>
    </>
  );
};
