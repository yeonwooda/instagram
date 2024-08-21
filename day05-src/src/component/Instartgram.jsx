import Feed from "../FeedComponents/Feed";
import Header from "./Header";
import Navigation from "./Navigation";
import Storyboard from "./StoryComponents/Storyboard";

const Instargram = () => {
  return (
    <div className="w-screen h-screen">
      <div className=" w-full h-full max-w-sm m-auto">
        <Header />
        <Storyboard />
        <Feed />
        <Navigation />
      </div>
    </div>
  );
};
export default Instargram;
