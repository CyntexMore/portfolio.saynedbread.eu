import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollStack, { ScrollStackItem, type ScrollStackRef } from "../../blocks/Components/ScrollStack/ScrollStack";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import { toolData } from "./toolsData";

gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  const component = useRef<HTMLDivElement>(null);
  const scrollStackRef = useRef<ScrollStackRef>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const scrollStackEl = component.current?.querySelector(".scroll-stack-container");
      if (!scrollStackEl) return;

      const scrollable = scrollStackEl.querySelector(".scroll-stack-inner");
      if (!scrollable) return;
      
      const scrollHeight = scrollable.scrollHeight;
      const clientHeight = scrollStackEl.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      
      ScrollTrigger.create({
        trigger: component.current,
        start: "top top",
        end: `+=${maxScroll + 500}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          if (scrollStackRef.current) {
            const newScrollTop = self.progress * maxScroll;
            scrollStackRef.current.setScrollPosition(newScrollTop);
          }
        },
      });

    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tools" ref={component}>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 z-10 pointer-events-none">
            <SplitText
              text="My Toolkit"
              className="text-4xl font-bold text-white mb-12 text-center drop-shadow"
              splitType="chars"
              from={{ y: 50, opacity: 0 }}
              to={{ y: 0, opacity: 1 }}
              duration={0.8}
              ease="power3.out"
              delay={30}
            />
        </div>
        <div className="scroll-stack-container h-full w-full">
            <ScrollStack
                ref={scrollStackRef}
                blurAmount={1.5}
                rotationAmount={-2}
                itemStackDistance={15}
                baseScale={0.9}
                itemScale={0.02}
                stackPosition="40%"
            >
                {toolData.map((category, index) => (
                <ScrollStackItem
                    key={index}
                    itemClassName="bg-black/20 border border-white/10 backdrop-blur-lg flex flex-col !p-10"
                >
                    <h3 className="text-3xl font-semibold text-gray-200 mb-6 text-left">
                      {category.title}
                    </h3>
                    {/* UPDATED: Replaced tags with a descriptive paragraph */}
                    <p className="text-gray-400 text-lg leading-relaxed text-left">
                      {category.description}
                    </p>
                </ScrollStackItem>
                ))}
            </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default Tools;
