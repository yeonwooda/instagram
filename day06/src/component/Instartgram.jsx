import Feed from "../FeedComponents/Feed";
import Header from "./Header";
import Navigation from "./Navigation";
import Storyboard from "./StoryComponents/Storyboard";

const Instargram = () => {
  const data = [
    {
      image: "Story/story1.jpg",
      name: "woo",
      isPopular: false,
      city: "Tokyo",
      nation: "Japan",
      images: ["Feed/feed1.jpg", "Feed/feed2.jpg", "Feed/feed3.jpg"],
      likePeople: [
        "adagb",
        "akjdg",
        "dkjag",
        "dkjag",
        "dkajgk",
        "djkga",
        "dkjga",
      ],
      date: "August 19th",
    },
    {
      image: "Story/story1.jpg",
      name: "Sophia",
      isPopular: false,
      city: "Tokyo",
      nation: "Japan",
      images: ["Feed/feed1.jpg", "Feed/feed2.jpg", "Feed/feed3.jpg"],
      likePeople: [
        "Samuel",
        "Lucas",
        "John",
        "lsaac",
        "dkajgk",
        "djkga",
        "dkjga",
      ],
      date: "August 19th",
    },
    {
      image: "Story/story1.jpg",
      name: "Emma",
      isPopular: false,
      city: "Tokyo",
      nation: "Japan",
      images: ["Feed/feed1.jpg", "Feed/feed2.jpg", "Feed/feed3.jpg"],
      likePeople: [
        "Alexandra",
        "Khole",
        "Naomi",
        "Liam",
        "Jayden",
        "Daniel",
        "Benjamin",
      ],
      date: "August 19th",
    },
    {
      image: "Story/story1.jpg",
      name: "Olivia",
      isPopular: false,
      city: "Tokyo",
      nation: "Japan",
      images: ["Feed/feed1.jpg", "Feed/feed2.jpg", "Feed/feed3.jpg"],
      likePeople: [
        "Sophie",
        "Mila",
        "Paisley",
        "Nora",
        "London",
        "Eva",
        "Ruby",
      ],
      date: "August 19th",
    },
    {
      image: "Story/story1.jpg",
      name: "Lily",
      isPopular: false,
      city: "Tokyo",
      nation: "Japan",
      images: ["Feed/feed1.jpg", "Feed/feed2.jpg", "Feed/feed3.jpg"],
      likePeople: [
        "Aubree",
        "Penelope",
        "Alyssa",
        "Bella",
        "Alexa",
        "Mackenzie",
        "Violet",
      ],
      date: "August 19th",
    },
    {
      image: "Story/story1.jpg",
      name: "Anna",
      isPopular: false,
      city: "Tokyo",
      nation: "Japan",
      images: ["Feed/feed1.jpg", "Feed/feed2.jpg", "Feed/feed3.jpg"],
      likePeople: [
        "Kaylee",
        "Scarlett",
        "Riley",
        "Alexis",
        "Gabriella",
        "Camila",
        "Allison",
      ],
      date: "August 19th",
    },
  ];

  return (
    <div className="w-screen h-screen">
      <div className=" w-full h-full max-w-sm m-auto">
        <Header />
        <Storyboard />
        <section style={{ paddingBottom: "60px" }}>
          {data.map((v) => (
            <Feed {...v} />
          ))}
        </section>

        <Navigation />
      </div>
    </div>
  );
};
export default Instargram;
