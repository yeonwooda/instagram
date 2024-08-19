import Header from "./Header";
import Navigation from "./Navigation";
import Storyboard from "./Storyboard";

const Instargram = () => {
  return (
    <div className="w-screen h-screen">
      <div className=" w-full h-full max-w-sm m-auto bg-orange-200">
        <Header />
        <Storyboard friends={10} />
        <Navigation />
      </div>
    </div>
  );
};
export default Instargram;
