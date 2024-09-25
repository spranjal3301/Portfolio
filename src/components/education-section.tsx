import { NextPage } from 'next'
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";

interface Props {
    BLUR_FADE_DELAY: number
}


const EducationSection: NextPage<Props> = ({BLUR_FADE_DELAY}) => {
  return (
    <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
  )
}

export default EducationSection