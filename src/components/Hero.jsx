import { curve, heroBackground, robot } from "../assets/";
import Section from './Section';
import Button from './Button';


const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25]"
      customPaddings
      id="hero"
    >
      <div
        className='relative container'
      >
        <div className='relative z-1 w-full max-auto text-center  mb-[4rem] md:mb-20 lg:mb-[6rem]'>
          <h1 className='h1 mb-6 pt-6'>
            Explore the Possibilites of AI Chatting with
            <span className='inline-block relative'>
              Brainwave{" "}
              <img src={curve} alt="curve" 
              className='absolute top-full left-0 w-full xl:mt-2'
              height={28}
              width={624}
               />
            </span>
          </h1>
          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
          Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>Get Started</Button>
        </div>

        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient '>
              <div className='relative bg-n-8 rounded-[1rem]'>
                  <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]'></div>

                  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"> 
                    <img src={robot} alt="robot" 
                      className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[15%]"
                      width={1024}
                      height={490}
                    />
                  </div>
              </div>
          </div>

          <div className="absolute -top-[54%] left-1/2 w-full -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"> 
            <img src={ heroBackground } alt="" width={1440}
                      height={1800} className="w-full"/>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Hero