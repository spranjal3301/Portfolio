"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Link from "next/link";
import BlurFade from "./magicui/blur-fade";

const Profiles = ({BLUR_FADE_DELAY}:{BLUR_FADE_DELAY:number}) => {
  const tabs = [
    {
      title: "LeetCode",
      value: "LeetCode",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#000000] to-[#0f9b0f]">
          <Link href={'https://leetcode.com/u/spranjal_3301/'} target="_new2">
          <p>LeetCode</p>
          <Image
            src="/Leetcode.png"
            alt="dummy image"
            width="2000"
            height="2000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
            </Link>
        </div>
      ),
    },
    {
      title: "LinkedIn",
      value: "LinkedIn",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#000000] to-[#0f9b0f]">
          <Link
            href={"https://www.linkedin.com/in/spranjal3301/"}
            target="_new1"
          >
            <p>LinkedIn</p>
            <Image
              src="/LinkedIn.png"
              alt="dummy image"
              width="2000"
              height="2000"
              className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
          </Link>
        </div>
      ),
    },
  
    {
      title: "Github",
      value: "Github",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#000000] to-[#0f9b0f]">
          <Link href={'https://github.com/spranjal3301'} target="_new3">

          <p>Github</p>
          <Image
            src="/Github.png"
            alt="dummy image"
            width="2000"
            height="2000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
            </Link>
        </div>
      ),
    },
    {
      title: "GeeksForGeeks",
      value: "GeeksForGeeks",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#000000] to-[#0f9b0f]">
          <Link href={'https://www.geeksforgeeks.org/user/spranjal_3301/'} target="_new4">

          <p>GeeksForGeeks</p>
          <Image
            src="/GFG.png"
            alt="dummy image"
            width="2000"
            height="2000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
            </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <BlurFade key={'profile'} delay={BLUR_FADE_DELAY * 7}>
      <div className="h-[20rem] md:h-[28rem] [perspective:1000px]  flex flex-col w-full  items-start justify-start my-0 bg-transparent m-2">
        <Tabs tabs={tabs} />
      </div>
      </BlurFade>
    </>
  );
};

export default Profiles;
