import {PrismaClient } from "@prisma/client";


export default async function handle(req,res) {
  const prisma = new PrismaClient
  const mouse = await prisma.mouse.findMany({
    include: {
      player_peripherals: {
        where: {
          players: {
            players_games: {
              some: {
                gameId: "63991c24ffc939d2f290c026"
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
                gameId: "63991c24ffc939d2f290c026"
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
                gameId: "63991c24ffc939d2f290c026"
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
  const valorantGearData = {mouse, keyboard, headset}
  res.json(valorantGearData)
}