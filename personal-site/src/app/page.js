"use client"
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import BackgroundOverlayShape from "@/components/BackgroundImage/BackgroundOverlayShape";
import ScrollBackground from "@/components/BackgroundImage/ScrollBackground";
import Footer from "@/components/Footer/Footer";
import FloatingHeader from "@/components/Header/Header";
import Body from "@/components/LandingBody/Body";
import BackgroundCredit from "@/components/BackgroundImage/BackgroundCredit";
import { PAGE_HEIGHT } from "@/constants/pageh";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-8 pt-0 h-[${PAGE_HEIGHT}px]`}>
      <BackgroundImage></BackgroundImage>
      <ScrollBackground></ScrollBackground>
      <BackgroundOverlayShape isVisible={isOpen} ></BackgroundOverlayShape>
      <FloatingHeader></FloatingHeader>
      <Body setIsOpen={setIsOpen}></Body>
      <BackgroundCredit></BackgroundCredit>
      <Footer />


    </main>
  );
}
