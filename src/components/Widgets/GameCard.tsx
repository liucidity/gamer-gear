import Image from 'next/image';
import * as React from 'react';

export interface Props {
  gameImageSrc: string,
  gameImageAlt: string,

}

export function GameCard ({gameImageSrc,gameImageAlt}: Props) {
  return (
    
    <div className='gamecard'>
      <Image src={gameImageSrc} alt={gameImageAlt} fill
      className='position-absolute object-cover rounded-xl'/>
    </div>
  );
}
