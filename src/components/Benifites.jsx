import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from '../assets/svg/ClipPath';


const Benifites = () => {
  return (
    <Section id="features">
      <div className="container relative z-2 ">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10 ">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h2 mb-5 ">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    height={48}
                    width={48}
                  />

                  <p className="ml-auto font-bold font-code font-xl text-n-1 uppercase tracking-wider ">Explore more</p>
                  <Arrow />

                </div>
              </div>

              <div className="absolute inset-0.5 bg-n-8" style={{clipPath:"url(#benefits"}}>
                <div className="absolute inset-0 opacity-10 sm:opacity-0 transition-opacity lg:hover:opacity-10">
                  {item.imageUrl && (
                    <img src={item.imageUrl} width={380} height={362} 
                    className="w-full h-full object-cover"
                    alt="" />
                  )}
                </div>
              </div>

              <ClipPath />
             
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benifites;
