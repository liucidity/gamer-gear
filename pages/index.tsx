import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PrismaClient} from '@prisma/client';




export async function getServerSideProps() {
 
const prisma = new PrismaClient();
// const add = await prisma.players.create({
//   data: {
//     username:"stanley",
//     gamesIDs: '6391143d8f2ae6a25db6a6a3'
//   }
// })
const players = await prisma.teams.findMany({
  where: {
    name: "Team Liquid"
  }

}
);
  return {
    props: {
      initialPlayers: players
    }
  };
}

export default function Home({initialContacts, initialPlayers}:any) {
  console.log(initialContacts)
  console.log(initialPlayers)
  return (
    <div className="h-screen w-screen flex flex-col">
      <div>
        LLLL
        {/* <div>{...initialContacts}</div> */}
      </div>
    </div>
  )
}
