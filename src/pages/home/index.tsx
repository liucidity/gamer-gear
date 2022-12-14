import React from "react";
import SnapCarousel from "../../components/SnapCarousel";
import { GameCard } from "../../components/Widgets/GameCard";
import { Games } from "../../components/Widgets/Games"
import Searchbar from "../../components/Widgets/Searchbar";

// ---- Type Definitions
// ** If the Home component below accepts more props, add them and their respective types in this Type declaration, and then destructure below **
type Props = {
  children: any;
  players:any;
  games:any
};


import {PrismaClient} from '@prisma/client';





// export interface IAppProps {
// }

export async function getServerSideProps() {
const prisma = new PrismaClient();

const games = await prisma.games.findMany();
try {
  const players = await prisma.players.findMany();
  console.log(players)
  return {
    props: {
      games:JSON.parse(JSON.stringify(games)),
      players:players
    }
  }
} catch (e) {
  console.log(e)
}

}

const topProducts = [
  {
    type: "Mouse",
    id: "id1",
  },
  {
    type: "Keyboard",
    id: "id2",
  },
  {
    type: "Monitor",
    id: "id3",
  },
  {
    type: "Headphones",
    id: "id4",
  },
];

const Home = ({ children,players,games}: Props) => {
  console.log({players,games})
  return (
    <div className="flex h-full w-full flex-col items-center justify-between pt-24">
      <header className="flex h-52 w-[90%] flex-col items-center border-2 border-purple-main">
        <h1 className="prose-sm px-5 md:prose-xl">GAMERGEAR</h1>
        <h2>Test Tagline For Hero Section</h2>
      </header>
      <Searchbar />
      <section className="flex w-[90%] flex-col border-2 border-purple-main">
        <header className="flex items-center justify-between px-5">
          <div>Top Products</div>
          <a>View More</a>
        </header>
        <SnapCarousel products={topProducts} />
      </section>
      <Games games={games} players={players}/>
    </div>
  );
};

export default Home;
