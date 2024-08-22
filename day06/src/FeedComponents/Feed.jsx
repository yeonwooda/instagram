import FeedBottom from "./bottom/FeedBottom";
import FeedHeader from "./header/FeedHeader";
import FeedSnap from "./photo/FeedSnap";

const Feed = (props) => {
  return (
    <>
      <FeedHeader {...props} />
      <FeedSnap {...props} />
      <FeedBottom {...props} />
    </>
  );
};
export default Feed;
