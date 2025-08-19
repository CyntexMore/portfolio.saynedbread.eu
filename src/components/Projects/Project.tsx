import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
    title: string;
    description: string;
    link: string;
}

const Project = ({ title, description, link }: ProjectProps) => {
    const projectRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const el = projectRef.current;
        if (!el) return;

        const animation = gsap.fromTo(
            el,
            { opacity: 0, y: 50, filter: "blur(8px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    once: true,
                },
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <a
            ref={projectRef}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-black/20 border border-white/10 p-6 transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-white/20 hover:scale-[1.03] backdrop-blur-lg"
        >
            <h3 className="text-2xl font-semibold text-gray-100 mb-2 drop-shadow">
                {title}
            </h3>
            <p className="text-gray-300">{description}</p>
        </a>
    );
};

export default Project;