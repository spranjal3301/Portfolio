import { NextPage } from 'next'
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";


interface Props {
    BLUR_FADE_DELAY: number
}

const AboutSection: NextPage<Props> = ({BLUR_FADE_DELAY}) => {
  return (
    <section id="about" >
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold [text-shadow:0_0_10px_rgba(0,255,0,0.5)]">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty text-sm dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
  )
}

export default AboutSection