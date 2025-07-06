import { SectionHeader } from "@/components/SectionHeader";
import { Card} from "@/components/Card";
import StarIcon from "../assets/icons/star.svg";
import bookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import GithubIcon from "../assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon ,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon ,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon ,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  }
]

const hobbies = [
  {
    title: 'Reading',
    emoji: 'https://em-content.zobj.net/thumbs/160/apple/354/books_1f4da.png',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: 'https://em-content.zobj.net/thumbs/160/apple/354/camera_1f4f7.png',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Swimming',
    emoji: 'https://em-content.zobj.net/thumbs/160/apple/354/person-swimming_1f3ca.png',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Traveling',
    emoji: 'https://em-content.zobj.net/thumbs/160/apple/354/airplane_2708-fe0f.png',
    left: '60%',
    top: '40%',
  },
  {
    title: 'Coding',
    emoji: 'https://em-content.zobj.net/thumbs/160/apple/354/laptop_1f4bb.png',
    left: '60%',
    top: '70%',
  },
  {
    title: 'Gaming',
    emoji: 'https://em-content.zobj.net/thumbs/160/apple/354/video-game_1f3ae.png',
    left: '10%',
    top: '70%',
  },
];



export const AboutSection = () => {
  return <div className="pb-20">
    <div className="container">
    <SectionHeader 
    eyebrow="About Me"
    title="A Glimpse Into My World"
    description="Learn more about who I am, what I do, and what inspires me."
    />

  <div className="mt-20 flex flex-col gap-8">
    <Card className="h-[320px]">
      <CardHeader title="My Reads" description="Explore the books shaping my perspectives."/>
      <div className="w-40 mx-auto mt-8">
        <Image src={bookImage} alt="Book Cover" />
      </div>
    </Card>


    <Card  className="h-[320px] p-0">
      <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." className="px-6 pt-6"/>
      <ToolboxItems items={toolboxItems} className="mt-6" />
      <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName="-translate-x-1/2"/>
    </Card>

    <Card className="h-[320px] p-0 flex flex-col">
    <CardHeader
      title="Beyond the Code"
      description="Explore my interest and hobbies beyond the digital realm."
      className="px-6 py-6"
    />

    <div className="relative flex-1 ">
      {hobbies.map(hobby => (
        <div
          key={hobby.title}
          className="inline-flex items-center gap-2 px-6 py-1.5 mb-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 absolute"
          style={{
            left: hobby.left,
            top: hobby.top,
          }}
        >
          <span className="text-sm font-medium text-gray-950">{hobby.title}</span>
          <img
            src={hobby.emoji}
            alt={hobby.title}
            className="w-5 h-5"
          />
        </div>
      ))}
    </div>
  </Card>


      <Card> 
          <Image src={mapImage} alt="Map" />
          <Image src={smileMemoji} alt="smiling memoji" />
      </Card>

    </div>
    </div>

  </div>;
};
