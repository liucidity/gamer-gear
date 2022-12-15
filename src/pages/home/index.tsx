import React from "react";
import SnapCarousel from "../../components/SnapCarousel";
import { GameCard } from "../../components/Widgets/GameCard";
import { Games } from "../../components/Sections/Games"
import Searchbar from "../../components/Widgets/Searchbar";
import {ProductRanking} from "../../components/Sections/ProductRanking"

// ---- Type Definitions
// ** If the Home component below accepts more props, add them and their respective types in this Type declaration, and then destructure below **
type Props = {
  children: any;
  players:any;
  games:any;
  player:any
};


import {PrismaClient} from '@prisma/client';
import HeroSection from "../../components/HeroSection";

type PlayerObjectList = { username: string; id: number }[];

// ---- Data ----
let playersData:PlayerObjectList = [
  {
    id: 1,
    username: "TenZ",
  },
  {
    id: 2,
    username: "S1mple",
  },
  {
    id: 3,
    username: "NiKo",
  },
];



// export interface IAppProps {
// }

export async function getServerSideProps() {
const prisma = new PrismaClient();
const player = await prisma.players.findMany({
  where: {
    username: {
      contains: "eLecTronic",
      mode: 'insensitive'
    }
  },
  include: {
    player_peripherals: {
      include: {
        mouse: true,
        keyboard: true,
        Headset: true,
        mousePad: true,
        monitor: true,
        
      }
    }
  }
})

const games = await prisma.games.findMany();
try {
  const players = await prisma.players.findMany();
  console.log(players)
  return {
    props: {
      games:JSON.parse(JSON.stringify(games)),
      players:players,
      player:player[0]
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
  {
    type: "Headphones",
    id: "id4",
  },
  {
    type: "Headphones",
    id: "id4",
  },
  {
    type: "Headphones",
    id: "id4",
  },
];

const Home = ({ children,players,games, player}: Props) => {
  console.log({players,games, player})
  console.log(player.player_peripherals[0])
  return (
    <div className="flex h-full w-full flex-col items-center justify-between pt-24">
      <HeroSection playersData={playersData}/>
      <header className="flex h-52 w-[90%] flex-col items-center border-2 border-purple-main md:w-5/6">
        <h1 className="prose-sm px-5 md:prose-xl">GAMERGEAR</h1>
        <h2>Test Tagline For Hero Section</h2>
      </header>
      <Searchbar />
      <section className="mt-5 flex w-[90%] flex-col md:w-5/6 ">
        <header className="flex items-center justify-between ">
          <h1 className="font-sans text-2xl font-bold antialiased md:text-3xl">
            Top Products
          </h1>
          <a className="cursor-pointer rounded-md py-1 px-4 font-semibold antialiased ring-2 ring-inset ring-gray-200 hover:bg-purple-light hover:text-off-white hover:ring-0 md:px-4 md:py-2">
            View more
          </a>
        </header>
        <SnapCarousel products={topProducts} />
      </section>
      <ProductRanking/>
      <Games games={games} players={players}/>
    </div>
  );
};

export default Home;
