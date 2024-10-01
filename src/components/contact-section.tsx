import { NextPage } from 'next'
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import Link from 'next/link';

interface Props {
    BLUR_FADE_DELAY: number
}

const ContactSection: NextPage<Props> = ({BLUR_FADE_DELAY}) => {
  return (
    <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Wanna connect with me? Drop me a message on my{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  Twitter
                </Link>{" "}
                See you there✨
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
  )
}

export default ContactSection