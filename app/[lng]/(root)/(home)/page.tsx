import AnimationAvatar from "@/components/shared/animation-avatar";
import SelectedProjects from "@/components/shared/selected-projects";

import AnimatedContent from "@/components/ui/animated-content";
import { TextAnimate } from "@/components/ui/text-animation";

function HomePage() {
  return (
    <>
      <div className="my-16 space-y-6">
        <div className="flex justify-between gap-8">
          <div className="flex max-w-xl flex-col gap-4">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
            >
              <div className="flex flex-row flex-wrap font-sans text-xl leading-12 font-bold sm:text-3xl">
                I&#39;m Asqarbek, a Full Stack Engineer building websites and
                mobile apps using React
              </div>
            </AnimatedContent>
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-muted-foreground text-sm"
            >
              Navoi, Uz • UTC/GMT +5
            </TextAnimate>
          </div>
          <div className="relative hidden size-28 md:block">
            <div className="overflow-hidden rounded-full">
              <AnimationAvatar />
              <div className="absolute inset-0 -z-10 bg-linear-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <AnimatedContent>
        <div className="relative my-24">
          <h2 className="text-center text-3xl font-semibold">
            Selected Projects
          </h2>

          <SelectedProjects />
        </div>
      </AnimatedContent>
    </>
  );
}

export default HomePage;
