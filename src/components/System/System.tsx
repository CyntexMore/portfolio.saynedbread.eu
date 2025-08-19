import DecryptedText from "../../blocks/TextAnimations/DecryptedText/DecryptedText";
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import { useScrollReveal } from "../../hooks/useScrollReveal"; // <-- Import the hook

const System = () => {
    const sectionRef = useScrollReveal<HTMLElement>(); // <-- Use the hook

    const specs = [
        { label: "OS", value: "NixOS (Unstable)" },
        { label: "WM", value: "Hyprland" },
        { label: "Editor", value: "NeoVim (nixvim)" },
        { label: "Shell", value: "fish w/ Starship" },
        { label: "Terminal", value: "Kitty" },
    ];

    return (
        <section id="system" className="w-full max-w-5xl mx-auto mt-32 mb-20 px-4 sm:px-8" ref={sectionRef}>
            <SplitText
              text="My Digital Environment"
              className="text-4xl font-bold text-white mb-12 text-center drop-shadow"
              splitType="chars"
              from={{ y: 50, opacity: 0 }}
              to={{ y: 0, opacity: 1 }}
              duration={0.8}
              ease="power3.out"
              delay={30}
            />

            <div className="rounded-2xl bg-black/20 border border-white/10 p-8 sm:p-10 backdrop-blur-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Left Column: Specs */}
                    <div className="flex flex-col gap-y-4">
                        <h3 className="text-2xl font-semibold text-gray-200 border-b border-white/10 pb-3 mb-2">
                            Core Components
                        </h3>
                        {specs.map(spec => (
                            <div key={spec.label} className="flex justify-between items-center font-mono text-lg">
                                <span className="text-gray-400">{spec.label}:</span>
                                <DecryptedText
                                    text={spec.value}
                                    className="text-gray-200 text-right"
                                    encryptedClassName="text-purple-400/50"
                                    speed={25}
                                    maxIterations={20}
                                    sequential={false}
                                    animateOn="view" // Animate when it scrolls into view
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Description & Link */}
                    <div>
                         <h3 className="text-2xl font-semibold text-gray-200 border-b border-white/10 pb-3 mb-4">
                            Philosophy
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            My entire setup is managed declaratively using NixOS. This allows for a reproducible, version-controlled, and reliable system that I can deploy anywhere. Every package, service, and dotfile is defined in code, ensuring perfect consistency.
                        </p>
                        <a 
                            href="https://github.com/CyntexMore/nixos-config" // <-- UPDATE THIS LINK
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-lg font-semibold text-gray-200 bg-white/5 border border-white/10 rounded-lg px-6 py-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
                        >
                            View Configuration →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default System;