import memojiImage from "../assets/images/my-memoji.png";
import Image from "next/image";
import ArrowDown from "../assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return <div className="py-32">
    <div className="container">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop"/>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Availbale for new projects</div>
      </div>
      </div>
      <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
      <p className="mt-4 text-center text-white/60">
        Hey there! I’m an Android dev who also enjoys building for the web.
        Let’s bring your next idea to life together.
      </p>
      <div className="flex flex-col items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold ">Explore My Work</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>
             <img
                src="https://em-content.zobj.net/thumbs/160/apple/354/waving-hand_1f44b.png"
                alt="Waving Hand"
                style={{ width: "1.2em", verticalAlign: "middle" }}
              />
            </span>
          <span>
            Let&apos;s Connect
          </span>
        </button>
      </div>
    </div>
  </div>;
};
