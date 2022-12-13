import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PrismaClient} from '@prisma/client';




export async function getServerSideProps() {
const prisma = new PrismaClient();

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

export default function Home({}:any) {
  return (
    <div>
      Hello World
    </div>
  )
}
