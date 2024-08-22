import Comment from "./Comment";
import InteractiveIcons from "./InteractiveIcons";
import Like from "./Like";

const FeedBottom = (props) => {
  return (
    <>
      <InteractiveIcons />
      <Like {...props} />
      <Comment {...props} />
    </>
  );
};
export default FeedBottom;
