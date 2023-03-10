import Head from "next/head";
import Card from "@/components/Card";
import Header from "@/components/Header";

const data = [
  {
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
  },
  {
    title: "The Great Wall of China",
    location: "China",
    googleMapsUrl: "https://goo.gl/maps/8SZWgJZ7hKf1sxvD8",
    startDate: "20 Feb, 2021",
    endDate: "28 Feb, 2021",
    description:
      "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.",
    imageUrl:
      "https://www.worldhistory.org/img/r/p/500x600/4020.jpg.webp?v=1666427342",
  },
  {
    title: "Eiffel Tower",
    location: "France",
    googleMapsUrl: "https://goo.gl/maps/fVd8WpFJgBjKJcHx7",
    startDate: "15 Mar, 2021",
    endDate: "20 Mar, 2021",
    description:
      "The Eiffel Tower is an iron lattice tower located on the Champ de Mars in Paris, France. It was built in 1889 as the entrance arch to the 1889 World's Fair, it has become both a global cultural icon of France and one of the most recognizable structures in the world.",
    imageUrl:
      "https://www.reuters.com/resizer/UeaUp4VxyphLZ4tY3j7jLxiybTs=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AHF2FYISNJO55J6N35YJBZ2JYY.jpg",
  },
  {
    title: "The Colosseum",
    location: "Italy",
    googleMapsUrl: "https://goo.gl/maps/9zYbqW3qV7QyFcwT7",
    startDate: "1 Apr, 2021",
    endDate: "10 Apr, 2021",
    description:
      "The Colosseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the center of the city of Rome, Italy. Built of concrete and stone, it is the largest amphitheatre ever built and is considered one of the greatest works of engineering and architecture.",
    imageUrl:
      "https://www.rometoolkit.com/where-to-stay/images/colosseum/colosseum-from-above.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {data.map((element) => (
          <Card key={element.title} item={element} />
        ))}
      </main>
    </>
  );
}
