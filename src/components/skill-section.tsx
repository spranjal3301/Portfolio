import { NextPage } from 'next'
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import {IconCloud} from "@/components/magicui/icon-cloud";

interface Props {
    BLUR_FADE_DELAY: number
}

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "sonarqube",
    "figma",
  ];

const SkillSection: NextPage<Props> = ({BLUR_FADE_DELAY}) => {
  return (
        <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
            </BlurFade>
            ))}
        </div>

        <div className="m-auto  flex size-2/4 max-w-lg items-center justify-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>  

        </div>

    
    </section>
  )
}

export default SkillSection