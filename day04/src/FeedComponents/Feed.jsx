import BottomDate from "./bottom/BottomDate";
import BottomHeader from "./bottom/BottomHeader";
import BottomLike from "./bottom/BottomLike";
import BottomText from "./bottom/BottomText";
import FeedHeader from "./header/FeedHeader";
import FeedSnap from "./photo/FeedSnap";

const Feed = () => {
  return (
    <>
      <FeedHeader />
      <FeedSnap />
      <BottomHeader />
      <BottomLike friendsName={" woo "} />
      <BottomText userName={"joshua"} innerText={" The game in Japan"} />
      <BottomDate date={"September 19"} />
    </>
  );
};
export default Feed;
