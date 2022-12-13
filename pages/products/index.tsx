import React from 'react'
import {PrismaClient} from '@prisma/client';

export async function getServerSideProps(){
  const prisma = new PrismaClient();

  const players = await prisma.teams.findMany({
    where: {
      name: "Team Liquid"
    }
  
  })
  return {
    props: {
      initialPlayers: players
    }
  };
}

const Products = ({initialPlayers}:any) => {
  console.log(initialPlayers)
  return (
    <div>Products</div>
  )
}

export default Products