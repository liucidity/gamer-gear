import {useState} from "react";
import { PrismaClient } from "@prisma/client";
import useSWR from 'swr'

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



// ---- Data ----
const prisma = new PrismaClient();
export async function getStaticProps() {
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
  const valorantData = await getPeripheralData(VALORANT_ID)
  const csgoData = await getPeripheralData(CSGO_ID)
 // console.log(sortedPlayers)

 //  const fetcher = (...args) => fetch(...args).then(res=>res.json())
 
//  const useGetGearData = (game)=> {
   
//    const {data, error} = useSWR(`/api/${game}`, fetcher)
//    if (error) return <div>An error occured.</div>
//    if (!data) return <div>Loading ...</div>
   
//    console.error(sortGearByCount(data))
//   }

//   const res = await fetch('/api/valorant')
//   const valorant = await res.json()
//   sortGearByCount(valorant)

// const valorantData = await getValorantData();
// sortGearByCount(valorantData)
  
  // sorts fetched data by number of uses
 


  // const valorantPlayers = await prisma.mouse.findMany({
  //   // find all players under csgo

  //   // include category (mouse)
  //   // include player peripherals where player ==

  //   include: {
  //     player_peripherals: {
  //       where: {
  //         players: {
  //           players_games: {
  //             some: {
  //               gameId: "63991c24ffc939d2f290c026"
  //             },
  //           }
  //         }
  //       }

  //     },
  //     _count: {
  //       select: {
  //         player_peripherals: true
  //       }
  //     },
  //   },

  // })

  // create function that map valorant players. check .player_peripherals.length on each.

  // const sortedPlayers = {valorantPlayers}.reduce((sorted, player)=> {
  //   let index=0;
  //   while(index < sorted.Player_Peripherals.length())
  // })
  // const valplayermouse = await prisma.mouse.findMany({

  // })

  const peripheralData = {valorantData, csgoData}


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
  // console.log("bannerPlayers: ", bannerPlayers);
  // console.table( productRanking);
  // console.log(valorantPlayers);
  console.error(peripheralData)


  
  return (
    <div className="flex h-full w-full flex-col items-center justify-between pt-24">
      {/* <HeroSection playersData={playersData} /> */}
    

      <ProductRanking peripheralData={peripheralData} />
    </div>

  );
};

export default Home;
