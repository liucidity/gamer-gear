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
// ** If the Home component below accepts more props, add them and their respective types in this Type declaration, and then destructure below **
type Props = {
  children: any;
  allPlayers: any;
  games: any;
  bannerPlayers: any;
  productRanking: any;
  valorantPlayers: any;
};

type PlayerObjectList = { username: string; id: number }[];

// ---- Data ----
let playersData: PlayerObjectList = [
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

  // mouse rankings
  const mouseRanking = await prisma.mouse.findMany({
    include: {
      _count: {
        select: {
          player_peripherals: true
        }
      }
    },
    take: 5,
    orderBy: {
      player_peripherals: {
       _count: 'desc' 
      }
    }
  })
  const keyboardRanking = await prisma.keyboard.findMany({
    include: {
      _count: {
        select: {
          player_peripherals: true
        }
      }
    },
    take: 5,
    orderBy: {
      player_peripherals: {
       _count: 'desc' 
      }
    }
  })
  const headsetRanking = await prisma.headset.findMany({
    include: {
      _count: {
        select: {
          player_peripherals: true
        }
      },
      player_peripherals:{
        include: {
          players: {
            select: {
              players_games: {
                where:{gameId:"63991b73ffc939d2f290c025"}
              }
            }
          }
        }
      }
    },
    take: 5,
    orderBy: {
      player_peripherals: {
       _count: 'desc' 
      }
    },

  })
  const monitorRanking = await prisma.monitors.findMany({
    include: {
      _count: {
        select: {
          player_peripherals: true
        }
      }
    },
    take: 5,
    orderBy: {
      player_peripherals: {
       _count: 'desc' 
      }
    }
  })
  const mousepadRanking = await prisma.mousepad.findMany({
    include: {
      _count: {
        select: {
          player_peripherals: true
        }
      }
    },
    take: 5,
    orderBy: {
      player_peripherals: {
       _count: 'desc' 
      }
    }
  })

  // const valorantPlayers = await prisma.players_Games.findMany({
  //   // find all players under csgo

  //   // include category (mouse)
  //   // include player peripherals where player ==
  //   where:{gameId:"63991b73ffc939d2f290c025"},
  //   include: {
  //    player: {
  //      include: {
  //        player_peripherals: {
  //          include: {
             
  //          }
  //        }
  //      }
  //    }
  //   },
  //   take: 5,
  //   orderBy: {
  //     player: {
  //       player_peripherals: {
  //         _count: 'desc'
  //       }
  //     }

  //   }

  // })

  const valorantPlayers = await prisma.mouse.findMany({
    // find all players under csgo

    // include category (mouse)
    // include player peripherals where player ==
    where: {
      player_peripherals: {
        some: {
          players: {
            players_games: {
              some: {
                gameId: "63991b73ffc939d2f290c025"
              }
            }
          }
        }
      }
    },
    include: {
      player_peripherals: {
        select: {
          players: {
            select: {
              players_games: {
                where: {
                  gameId: "63991b73ffc939d2f290c025"
                }
              }
            }
          }
        }
      }
    }

    // include: {
    //   _count: {
    //     select: {
    //       player_peripherals: {
            
    //       }
    //     }
    //   },
    //   player_peripherals: {
    //     include: {
    //       players: {
    //         include: {
    //           players_games: {
    //             where: {
    //                     gameId: "63991b73ffc939d2f290c025"
    //             },
    //           }
    //         }
    //       }
    //     }
    //   }
    // }

  })

  // const valplayermouse = await prisma.mouse.findMany({

  // })


  const games = await prisma.games.findMany();
  const allPlayers = await prisma.players.findMany();
  const productRanking = {mouseRanking,keyboardRanking,monitorRanking,mousepadRanking,headsetRanking}
  return {
    props: {
      games: JSON.parse(JSON.stringify(games)),
      allPlayers: allPlayers,
      bannerPlayers: bannerPlayers,
      productRanking,
      valorantPlayers,
    },
  };
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

const Home = ({ children, allPlayers, games, bannerPlayers, productRanking, valorantPlayers }: Props) => {
  // console.log("bannerPlayers: ", bannerPlayers);
  // console.table( productRanking);
  console.table({valorantPlayers});
  
  return (
    <div className="flex h-full w-full flex-col items-center justify-between pt-24">
      <HeroSection playersData={playersData} />
    
      <Games games={games} players={allPlayers} />
      <ProductRanking productRanking={productRanking} />
    </div>
  );
};

export default Home;
