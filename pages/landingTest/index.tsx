import React from "react";
import HeroSection from "../../components/HeroSection";

// ---- Type Declarations ----
type PlayerObjectList = { username: string; id: number }[];

// ---- Data ----
let playersData:PlayerObjectList = [
  {
    id: 1,
    username: "TenZ",
  },
  {
    id: 2,
    username: "S1mple",
  },
  {
    id: 3,
    username: "NiKo",
  },
];


// ---- Main Landing Page Component ----
const LandingPage = () => {
  return (
    <HeroSection playersData={playersData}/>
  );
};

export default LandingPage;
