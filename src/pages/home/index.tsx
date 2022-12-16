import React from "react";
import { PrismaClient } from "@prisma/client";
// ---- Components ----
import SnapCarousel from "../../components/SnapCarousel";
import { GameCard } from "../../components/Widgets/GameCard";
import { Games } from "../../components/Sections/Games";
import Searchbar from "../../components/Widgets/Searchbar";
import { ProductRanking } from "../../components/Sections/ProductRanking";
import HeroSection from "../../components/HeroSection";

// ---- Type Definitions
type Props = {
  children: any;
  allPlayers: any;
  games: any;
  bannerPlayers: any;
  mouseRanking: any;
};

// ---- Data ----
export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const bannerPlayers = await prisma.players.findMany({
    where: {
      OR: [
        {
          username: {
            equals: "S1mple",
            mode: "insensitive",
          },
        },
        {
          username: {
            equals: "TenZ",
            mode: "insensitive",
          },
        },
        {
          username: {
            equals: "shroud",
            mode: "insensitive",
          },
        },
      ],
    },
    include: {
      player_peripherals: {
        include: {
          mouse: true,
          keyboard: true,
          headset: true,
          mousePad: true,
          monitor: true,
        },
      },
    },
  });

  const mouseRanking = await prisma.mouse.findMany({
    include: {
      _count: {
        select: {
          player_peripherals: true
        }
      }
    },
    take: 10,
    orderBy: {
      player_peripherals: {
       _count: 'desc' 
      }
    }
  })

  const games = await prisma.games.findMany();
  const allPlayers = await prisma.players.findMany();
  return {
    props: {
      games: JSON.parse(JSON.stringify(games)),
      allPlayers: allPlayers,
      bannerPlayers: bannerPlayers,
      mouseRanking
    },
  };
}


const Home = ({ children, allPlayers, games, bannerPlayers, mouseRanking }: Props) => {
  // console.table( mouseRanking);
  
  return (
    <>
      <HeroSection bannerPlayers={bannerPlayers} />
      {/* <Searchbar /> */}
      <ProductRanking />
      <Games games={games} players={allPlayers} />
    </>
  );
};

export default Home;
