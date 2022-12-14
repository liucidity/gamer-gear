import Image from 'next/image';
import * as React from 'react';
import { text } from 'stream/consumers';

export interface Props {
  gameImageSrc: string,
  gameImageAlt: string,
  gameLogoSrc: string,
  gameLogoAlt: string,
  imageStyle: string,
  textStyle: string,
  gameName: string,

}

export function GameCard ({gameImageSrc,gameImageAlt,imageStyle, gameLogoAlt, gameLogoSrc,textStyle, gameName}: Props) {
  return (
    <div className='group flex flex-col items-center'>
    <div className='gamecard'>
      <Image src={gameImageSrc} alt={gameImageAlt} fill
      className={imageStyle}/>
      <div className='w-[8em] h-[2em] relative m-4'>

        <Image src={gameLogoSrc} alt={gameLogoAlt} fill
        className={textStyle}/>
      </div>
    </div>
    <span className='group-hover:text-blue'>{gameName}</span>
        </div>
  );
}
