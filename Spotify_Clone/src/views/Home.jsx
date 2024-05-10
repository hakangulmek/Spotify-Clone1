import React from "react";
import Section from "../components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Blinding Lights",
      desc: "	The Weeknd",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
      src: "https://freesound.org/data/previews/612/612095_5674468-lq.mp3",
    },
    {
      id: 2,
      title: "Shape of You",
      desc: "	Ed Sheeran",
      image:
        "https://images.genius.com/d94ba8724dbf9989f1ff280569940192.1000x1000x1.jpg",
      src: "https://freesound.org/data/previews/612/612092_7037-lq.mp3",
    },
    {
      id: 3,
      title: "Someone You Loved",
      desc: "		Lewis Capaldi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJ1TI9pkLFm7ReZDpUv58IEnmQdygTLirjGbayWGyCw&s",
      src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
    },
    {
      id: 4,
      title: "Dance Monkey",
      desc: "		Tones and I",
      image: "https://i.scdn.co/image/ab67616d0000b273c6f7af36ecdc3ed6e0a1f169",
      src: "https://freesound.org/data/previews/612/612085_28867-lq.mp3",
    },
    {
      id: 5,
      title: "Sunflower",
      desc: "		Post Malone ve Swae Lee",
      image: "https://i.scdn.co/image/ab67616d0000b273fbb34faba025e82837c40470",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="See All" items={items} />
      <Section title="Shows to try" more="See All" items={items} />
      <Section title="Made For Hakan Gülmek" more="See All" items={items} />
    </div>
  );
}

export default Home;
