import {useState} from "react";
import { PrismaClient } from "@prisma/client";
import useSWR from 'swr'

import { CldImage } from "next-cloudinary";
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
  valorantPlayers: any;
  peripheralData:any;
};

const VALORANT_ID = "63991c24ffc939d2f290c026"
const CSGO_ID = "63991b73ffc939d2f290c025"
const FORTNITE_ID = "63a5005bcc0038b4e98b7e67"
const OVERWATCH_ID = "63a5030bcc0038b4e98b7f17"
const APEX_ID = "63a50429cc0038b4e98b7f18"



// ---- Data ----
export async function getStaticProps() {
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

  const sortGearByCount = (data) => {
    // take the valorant object
     Object.keys(data).map((category)=> { 
  
     data[`${category}`] = data[category].reduce((sorted, player)=> {
         let index = 0;
         while(index < sorted.length && player.player_peripherals.length < sorted[index].player_peripherals.length) index++
         sorted.splice(index,0,player);
         return sorted;
       },[])
      //  keep only top 5 results
       data[`${category}`].splice(5)
     })
     // return sorted valorant object
     console.error('result:', data)
     return data
   }

  const getPeripheralData = async (gameID:string) =>{
    const mouse = await prisma.mouse.findMany({
      include: {
        player_peripherals: {
          where: {
            players: {
              players_games: {
                some: {
                  gameId: gameID
                },
              }
            }
          }
  
        },
        _count: {
          select: {
            player_peripherals: true
          }
        },
      },
    })
    const keyboard = await prisma.keyboard.findMany({
      include: {
        player_peripherals: {
          where: {
            players: {
              players_games: {
                some: {
                  gameId: gameID
                },
              }
            }
          }
  
        },
        _count: {
          select: {
            player_peripherals: true
          }
        },
      },
    })
    const headset = await prisma.headset.findMany({
      include: {
        player_peripherals: {
          where: {
            players: {
              players_games: {
                some: {
                  gameId: gameID
                },
              }
            }
          }
  
        },
        _count: {
          select: {
            player_peripherals: true
          }
        },
      },
    })
    
    const data = {mouse,keyboard,headset}
    return sortGearByCount(data)
  }
  
  const valorant = await getPeripheralData(VALORANT_ID)
  const csgo = await getPeripheralData(CSGO_ID)
  const fortnite = await getPeripheralData(FORTNITE_ID)
  const overwatch = await getPeripheralData(OVERWATCH_ID)
  const apex = await getPeripheralData(APEX_ID)


  const peripheralData = {valorant, csgo,fortnite,overwatch, apex}

  const games = await prisma.games.findMany();
  const allPlayers = await prisma.players.findMany();
  return {
    props: {
      games: JSON.parse(JSON.stringify(games)),
      allPlayers: allPlayers,
      bannerPlayers: bannerPlayers,
      peripheralData: JSON.parse(JSON.stringify(peripheralData)),
    },
  };
}



const Home = ({ children, allPlayers, games, bannerPlayers, valorantPlayers, peripheralData }: Props) => {
    
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <HeroSection bannerPlayers={bannerPlayers} />
      {/* <CldImage width="200" height="200" src="gamer-gear/g pro x superlight black" /> */}
      {/* <Games games={games} players={allPlayers} /> */}
      <ProductRanking peripheralData={peripheralData} />
    </div>
  );
};

export default Home;
