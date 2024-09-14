import React from 'react'
import Section from './Section'
import { collabContent, collabText } from '../constants'
import { check } from '../assets'
import Button from './Button'

const Collaboration = () => {
  return (
    <Section crosses>
        <div className='container lg:flex '>

            {/* left side */}
            <div className='max-w-[25rem] '>
                <h2 className='h2 mb-4 md:mb-8'>AI Chat App for Seamless Collaboration</h2>

                <ul className='max-w-[22rem] mb-10 md:mb-14 '>
                    {collabContent.map((item)=>(
                        <li className='mb-3 py-3 key={item.id}'>
                            <div className='flex items-center'>
                                <img src={check} alt="" width={24} height={24} />
                                <h6 className='body-2 ml-5'>{item.title}</h6>
                               
                            </div>
                            {item.text && (
                                    <p className='body-2 mt-3 text-n-4 '>
                                        {item.text}
                                    </p>
                             )}
                        </li>
                    ))}
                </ul>

                <Button>Try it now</Button>


            </div>

                    {/* right side destop */}

            <div className='lg:ml-auto xl:w-[38rem]'>
                    <p className='body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto mt-4'>{collabText}</p>
                    <div className="relative flex w-[22rem] left-1/2 aspect-square border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100 ">

                    </div>
            </div>


        </div>
    </Section>
  )
}

export default Collaboration