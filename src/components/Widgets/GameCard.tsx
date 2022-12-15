import Image from 'next/image';
import * as React from 'react';

export interface Props {
  gameImageSrc: string,
  gameImageAlt: string,
  style: string,

}

export function GameCard ({gameImageSrc,gameImageAlt,style}: Props) {
  return (
    
    <div className='gamecard'>
      <Image src={gameImageSrc} alt={gameImageAlt} fill
      className={style}/>
    </div>
  );
}
