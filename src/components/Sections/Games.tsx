import { GameCard } from "../Widgets/GameCard";
export function Games({ setGame }: any) {
  return (
    <section className="flex max-w-screen-xl flex-row flex-wrap justify-center">
      <GameCard
        gameImageAlt="csgo2.jpg"
        gameImageSrc="/csgo2.jpg"
        imageStyle="gamecard-image object-[70%]"
        gameLogoSrc="/csgo_logo.png"
        gameLogoAlt="/csgo_logo.png"
        textStyle="logo-text"
        game="csgo"
        setGame={setGame}
      />
      <GameCard
        gameImageAlt="valorant.jpg"
        gameImageSrc="/valorant.jpg"
        imageStyle="gamecard-image"
        gameLogoSrc="/val_logo.png"
        gameLogoAlt="/val_logo.png"
        textStyle="object-cover"
        game="valorant"
        setGame={setGame}
      />
      <GameCard
        gameImageAlt="fortnite.jpg"
        gameImageSrc="/fortnite.jpg"
        imageStyle="gamecard-image object-[95%]"
        gameLogoSrc="/fortnite_logo.png"
        gameLogoAlt="/fortnite_logo.png"
        textStyle="logo-text"
        game="fortnite"
        setGame={setGame}
      />
      <GameCard
        gameImageAlt="ow.png"
        gameImageSrc="/ow.png"
        imageStyle="gamecard-image object-[30%]"
        gameLogoSrc="/ow_logo.png"
        gameLogoAlt="/ow_logo.png"
        textStyle="logo-text"
        game="overwatch"
        setGame={setGame}
      />
      <GameCard
        gameImageAlt="apex.png"
        gameImageSrc="/apex.png"
        imageStyle="gamecard-image object-[35%]"
        gameLogoSrc="/apex_logo.png"
        gameLogoAlt="/apex_logo.png"
        textStyle="logo-text"
        game="apex"
        setGame={setGame}
      />
    </section>
  );
}
