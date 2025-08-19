import RotatingText from '../../blocks/TextAnimations/RotatingText/RotatingText';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <SplitText
            text="Welcomen!"
            className="text-8xl font-semibold"
            delay={70}
            duration={2}
            ease="elastic.out(1, 0.3)"
            splitType="chars"
            threshold={0.1}
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="inline-flex items-center justify-center text-lg md:text-xl font-mono">
            <span className="relative inline-flex items-center">
                <RotatingText
                  texts={[
                    'Building webapps with TypeScript & React',
                    'Crafting APIs with Golang & Gin',
                    'Managing PostgreSQL databases',
                    'Caching with Redis',
                    'Writing GraphQL queries',
                    'Rendering stuff with Vulkan in C',
                    'Writing CLI tools in Rust',
                    'Doing machine learning with Python & PyTorch',
                  ]}
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3500}
                />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
