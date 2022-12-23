import Image from "next/image";
import * as React from "react";
import { text } from "stream/consumers";

export interface Props {
  gameImageSrc: string;
  gameImageAlt: string;
  gameLogoSrc: string;
  gameLogoAlt: string;
  imageStyle: string;
  textStyle: string;
  game: string;
  setGame: any;
}

export function GameCard({
  gameImageSrc,
  gameImageAlt,
  imageStyle,
  gameLogoAlt,
  gameLogoSrc,
  textStyle,
  game,
  setGame,
}: Props) {
  return (
    <div
      className="group flex flex-col items-center border-2 border-black"
      onClick={() => setGame({ game })}
    >
      <div className="gamecard">
        <Image
          src={gameImageSrc}
          alt={gameImageAlt}
          fill
          className={imageStyle}
        />
        <div className="relative m-4 h-[2em] w-[8em]">
          <Image
            src={gameLogoSrc}
            alt={gameLogoAlt}
            fill
            className={textStyle}
          />
        </div>
      </div>
    </div>
  );
}
