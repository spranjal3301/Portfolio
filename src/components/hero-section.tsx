import { NextPage } from "next";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import WavingHand from "./ui/waving-hand";
import TypingEffect from "./ui/typing-effect";

interface Props {
  BLUR_FADE_DELAY: number;
}

const HeroSection: NextPage<Props> = ({ BLUR_FADE_DELAY }) => {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi,I'm ${DATA.name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};


export function HeroSection2({ BLUR_FADE_DELAY }: Props) {
  return (
    <section id="hero">
    <div className="mx-auto w-full max-w-2xl space-y-8">
      <div className="gap-2 flex justify-between">
        <div className="flex-col flex flex-1 space-y-1.5">
          <div className="flex gap-2 justify-start items-center">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi,I'm ${DATA.name.split(" ")[0]}`}
            />
            {/* <BlurFade delay={BLUR_FADE_DELAY}>
              <WavingHand />
            </BlurFade> */}
          </div>
          <TypingEffect
            className="max-w-[600px] md:text-xl  [text-shadow:0_0_10px_rgba(0,255,0,0.5)]"
            text={DATA.description}
            delay={0.0025}
            delayStart={0.75}
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Avatar className="size-28 border">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </BlurFade>
      </div>
    </div>
  </section>
  )
}

export default HeroSection;
