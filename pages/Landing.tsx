import { useState,useEffect } from "react";
import {FloatingButton} from "../components/FloatingButton"
import { HeroSection } from "../components/HeroSection";
import {NightCricket} from "../components/NightCricket"
import {Pricing} from "../components/Pricing"
import {LoyaltyReward} from "../components/LoyaltyReward"
import {OnsiteFacilities} from "../components/OnsiteFacilities"
import {PhotoGallery} from "../components/PhotoGallery"
import {Footer} from "../components/Footer"
export function Landing(){
    const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (approximately)
      const heroHeight = window.innerHeight * 0.8; // Assuming hero takes about 80% of viewport
      const scrollPosition = window.scrollY;
      
      // Show floating button when user scrolls past hero section
      setShowFloatingButton(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return(
        <>
        <FloatingButton showOrNot={showFloatingButton}></FloatingButton>
        <HeroSection></HeroSection>
        <NightCricket></NightCricket>
        <OnsiteFacilities></OnsiteFacilities>
        <Pricing></Pricing>
        <LoyaltyReward></LoyaltyReward>
        <PhotoGallery></PhotoGallery>
        <Footer></Footer>
        </>
    )
}