import * as React from 'react';
import {PrismaClient} from '@prisma/client';
import { GameCard } from './GameCard';





export interface IAppProps {
}

export async function getServerSideProps() {
const prisma = new PrismaClient();

const games = await prisma.games.findMany();
const players = await prisma.players.findMany();

return {
  props: {
    games:games,
    players:players
  }
}

// const player = await prisma.contact.create({
//   data: {
//     name: "hi"
//   }
// })
//   const contacts = await prisma.contact.findMany();
//   return {
//     props: {
//       initialContacts: contacts
//     }
//   };
}

export function Games ({games,players}:any) {
  console.log({games,players})
  return (
    <section className='flex flex-row'>

      
    </section>
  );
}
