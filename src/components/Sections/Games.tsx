import * as React from 'react';
import {PrismaClient} from '@prisma/client';
import { GameCard } from '../Widgets/GameCard';





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
      imageStyle='gamecard-image object-[70%]'
      gameLogoSrc='/csgo_logo.png'
      gameLogoAlt='/csgo_logo.png'
      textStyle='logo-text'
      gameName='CounterStrike'
      />
      <GameCard 
      gameImageAlt='valorant.jpg' 
      gameImageSrc='/valorant.jpg' 
      imageStyle='gamecard-image'
      gameLogoSrc='/val_logo.png'
      gameLogoAlt='/val_logo.png'
      textStyle='object-cover'
      gameName='Valorant'/>
      <GameCard 
      gameImageAlt='fortnite.jpg' 
      gameImageSrc='/fortnite.jpg' 
      imageStyle='gamecard-image object-[95%]'
      gameLogoSrc='/fortnite_logo.png'
      gameLogoAlt='/fortnite_logo.png'
      textStyle='logo-text'
      gameName='Fortnite'
      />
      <GameCard 
      gameImageAlt='ow.png' 
      gameImageSrc='/ow.png' 
      imageStyle='gamecard-image object-[30%]'
      gameLogoSrc='/ow_logo.png'
      gameLogoAlt='/ow_logo.png'
      textStyle='logo-text'
      gameName='Overwatch'/>
      <GameCard 
      gameImageAlt='apex.png' 
      gameImageSrc='/apex.png'
      imageStyle='gamecard-image object-[35%]'
      gameLogoSrc='/apex_logo.png'
      gameLogoAlt='/apex_logo.png'
      textStyle='logo-text'
      gameName='Apex Legends'/>
      
    </section>
  );
}
