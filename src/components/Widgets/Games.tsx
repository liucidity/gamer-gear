import * as React from 'react';
import {PrismaClient} from '@prisma/client';
import { GameCard } from './GameCard';





type Props = {
  games:any;
  players:any;

}

// export async function getStaticProps() {
// const prisma = new PrismaClient();

// const games = await prisma.games.findMany();
// const players = await prisma.players.findMany();

// return {
//   props: {
//     games:JSON.parse(JSON.stringify(games)),
//     players:{players}
//   }
// }

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
// }

export function Games ({games,players}:Props) {
  console.log({games,players})
  return (
    <section className='flex flex-row'>
      <GameCard 
      gameImageAlt='csgo2.jpg' 
      gameImageSrc='/csgo2.jpg' 
      style='gamecard-image object-[70%]'/>
      <GameCard 
      gameImageAlt='valorant.jpg' 
      gameImageSrc='/valorant.jpg' 
      style='gamecard-image'/>
      <GameCard 
      gameImageAlt='fortnite.jpg' 
      gameImageSrc='/fortnite.jpg' 
      style='gamecard-image object-right'/>
      <GameCard 
      gameImageAlt='ow.png' 
      gameImageSrc='/ow.png' 
      style='gamecard-image object-[35%]'/>
      <GameCard 
      gameImageAlt='apex.png' 
      gameImageSrc='/apex.png'
      style='gamecard-image'/>
      
    </section>
  );
}
