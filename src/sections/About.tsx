"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import GithubIcon from "../assets/icons/github.svg";
import kotlinIcon from "../assets/icons/kotlin.svg"
import pythonIcon from "../assets/icons/python.svg"
import mysqlIcon from "../assets/icons/mysql.svg"
import figmaIcon from "../assets/icons/figma.svg";
import javaIcon from "../assets/icons/java.svg";
import canvaIcon from "../assets/icons/canva.svg";
import premierepro from "../assets/icons/premiere-pro.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import canvaPreviewImage from "/public/images/canvaaa.png"
import mapImage from "/public/images/map.png"
import smileMemoji from "/public/images/chaima.png"
import {motion} from "framer-motion";
import { useRef } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const toolboxItems = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "kotlin", iconType: kotlinIcon },
  { title: "Python", iconType: pythonIcon },
  { title: "Figma", iconType: figmaIcon },
  { title: "MySQL", iconType: mysqlIcon },
  { title: "Java", iconType: javaIcon },
  { title: "Adobe Premiere Pro", iconType: premierepro },
  { title: "Canva", iconType: canvaIcon },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "https://em-content.zobj.net/thumbs/160/apple/354/books_1f4da.png",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "https://em-content.zobj.net/thumbs/160/apple/354/camera_1f4f7.png",
    left: "50%",
    top: "5%",
  },
  {
    title: "Swimming",
    emoji: "https://em-content.zobj.net/thumbs/160/apple/354/person-swimming_1f3ca.png",
    left: "10%",
    top: "35%",
  },
  {
    title: "Traveling",
    emoji: "https://em-content.zobj.net/thumbs/160/apple/354/airplane_2708-fe0f.png",
    left: "60%",
    top: "40%",
  },
  {
  title: "Fashion",
  emoji: "https://em-content.zobj.net/thumbs/160/apple/354/high-heeled-shoe_1f460.png",
  left: "60%",
  top: "70%",
  },
  {
    title: "Gaming",
    emoji: "https://em-content.zobj.net/thumbs/160/apple/354/video-game_1f3ae.png",
    left: "10%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Ligne 1 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            <Card className="h-[320px] p-0 flex flex-col w-full md:col-span-2 relative">
              <div className="absolute top-4 right-4">
                <a
                  href="https://drive.google.com/drive/folders/1pKLStm8QVk-j4SlaXq-_bxZIBskcS9bF?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-950 h-10 px-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 shadow hover:bg-white/80 transition text-sm">
                    <span>View</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>


              <CardHeader
                title="My Canva Projects"
                description="Creative projects made with Canva — from storytelling to branding."
                className="px-6 pt-6 pb-2"
              />

              <div className="w-40 mx-auto mt-4 md:-mt-6">
                <Image
                  src={canvaPreviewImage}
                  alt="Book Cover"
                  className="rounded-xl shadow-md"
                />

              </div>
            </Card>


            <Card className="h-[320px] p-0 flex flex-col w-full md:col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="px-6 pt-6"
              />
              <ToolboxItems
                items={[...toolboxItems, ...toolboxItems]}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:10s]"
              />
              <ToolboxItems
                items={[...toolboxItems, ...toolboxItems]}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:10s]"
              />
            </Card>
          </div>


          {/* Ligne 2 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col w-full md:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 py-1.5 mb-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                     drag
                     dragConstraints={constraintRef}
                  >
                    <span className="text-sm font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <img
                      src={hobby.emoji}
                      alt={hobby.title}
                      className="w-5 h-5"
                    />
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 w-full relative md:col-span-3">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};