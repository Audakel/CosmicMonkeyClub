import React, { useState } from "react";
import FullTextSection from "./FullTextSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope, faMeteor, faRocket, faSatellite } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./button";

export default function Roadmap() {
  const [IsActive, setIsActive] = useState([false, false])
  const toggleActive = (index) => {
    let newArr = [...IsActive];
    newArr[index] ? newArr[index] = false : newArr[index] = true
    setIsActive(newArr);
  }
  console.log(IsActive)
  return (
    <section id="roadmap">
      <div className="mx-auto md:mx-0">
        <FullTextSection
          header="Mission Briefing"
          body={[
            "Space is a lonely place, so the monkeys take community very seriously. Here's the roadmap for the CMC universe:",
          ]}
        />
        <div
          id="roadmap"
          className="flex flex-col items-center py-5"
        >
          <div className="step one grid-rows-1 md:grid-rows-2">
            <div className="circle md:absolute md:right-2/4">
              <span className="text-7xl"><FontAwesomeIcon className="text-7xl mb-4" icon={faSatellite} /></span>
              <h4 className="text-4xl">
                Phase 1 Missions
              </h4>
            </div>
            <article data-step="1" className="md:left-2/4 pt-6 md:pt-0">
              <header className="flex items-center" onClick={() => (toggleActive(0))}>
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Public Mint/Half Metadata Reveal</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[0] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="2" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(1))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Full Metadata Reveal</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[1] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="3" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(2))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Reward All Holding Owners From Mint An Exclusive Poap *Poap* - https://Poap.Xyz/</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[2] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="4" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(3))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Exclusive Merchandise Drop to All Cosmic Monkey Holders</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[3] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
            <article data-step="5" className="md:left-2/4">
              <header className="flex items-center " onClick={() => (toggleActive(4))}>
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Teaser Trailer for Animated Series (Introduce New Character)</h6>
              </header>
              <div className={`roadmap-body text-sm pl-4 transition-height transition-opacity duration-500 ease-in-out ${IsActive[4] ? "pt-4 opacity-1" :"overflow-hidden h-0 opacity-0"}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </article>
          </div>

          <div className="step two ">
            <div className="circle md:absolute md:left-2/4">
              <span className="text-7xl"><FontAwesomeIcon icon={faMeteor} className="text-7xl mb-4" /></span>
              <h4 className="text-4xl">
                Phase 2 Missions
              </h4>
            </div>
            <article data-step="6" className="pt-6 md:pt-0 md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>CMC Podcast w/ Exclusive Members (Ft. Paid Participants) Weekly/Bi-monthly</h6>
              </header>
            </article>
            <article data-step="7" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Casino Update</h6>
              </header>
            </article>
            <article data-step="8" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Launch Second NFT Collection Featuring New Main Character Seen in Teaser Trailer (Presale to Existing Holders)</h6>
              </header>
            </article>
            <article data-step="9" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Announce New Partnerships/Exclusive Events</h6>
              </header>
            </article>
            <article data-step="10" className="md:left-2/4 md:text-right transform md:-translate-x-full">
              <header className="flex items-center md:flex-row-reverse">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Full Animated Series Trailer</h6>
              </header>
            </article>
          </div>

          <div className="step three">
            <div className="circle md:absolute md:-translate-x-full md:right-2/4">
              <span className="text-7xl"><FontAwesomeIcon className="text-7xl mb-4" icon={faGlobeEurope} /></span>
              <h4 className="text-4xl">
                Phase 3 Missions
              </h4>
            </div>
            <article data-step="11" className="md:left-2/4 pt-6 md:pt-0">
              <header className="flex items-center ">
                <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Cage Your Ape for X Days and Receive New 3D Render NFT of Your Monkey</h6>
              </header>
            </article>
            <article data-step="12" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>IRL Private Members Club Partnership Announced</h6>
              </header>
            </article>
            <article data-step="13" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Exclusive CMC Casino Launch</h6>
              </header>
            </article>
            <article data-step="14" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Exclusive Members Only Events/Meetups</h6>
              </header>
            </article>
            <article data-step="15" className="md:left-2/4">
              <header className="flex items-center ">
              <span><FontAwesomeIcon icon={faRocket} className="fa-rotate-90" /></span>
                <h6>Episode One Release of Series</h6>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
