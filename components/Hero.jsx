import Link from "next/link";
import {Button} from './ui/button';
import {Download, Send} from 'lucide-react';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri'

//components
import DevImg from './DevImg';
import Social from './Social';

//image
import imgdev from '../public/hero/developer.png';

//file
//import CV from '../public/work/browndon_bokanga_CVlatest.pdf';

const Hero = () => {
  return (
  <section className='xl:px-12 2xl:px-6 py-6 xl:py-24 h-[84vh] xl:pt-8 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none'>
    <div className="container mx-auto ">
        <div className='flex justify-between gap-x-8'>
            {/* text */}
            <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                    <h1 className='h1 mb-4'>Browndon Bokanga, Welcome to my portfolio</h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Creating many amazing designs</p>
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                    <Link href='https://www.linkedin.com/in/browndon-bokanga-93b509184/'>
                        <Button className='gap-x-2'>Contact Me <Send size={18}/></Button>
                    </Link>
                    {/* <a href={'/'} download="CV">
                        <Button variant='secondary' className='gap-x-2'>Download CV <Download size={18}/> </Button>
                    </a> */}
                </div>
                {/* Socials */}
                <Social containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[35px] hover:text-primary transition-all'/>
            </div>
            {/* image */}
            <div className='hidden xl:flex relative'>
                <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[450px] h-[500px] bg-no-repeat absolute
                    -top-1 -right-2'></div>
                    <DevImg containerStyles='bg-hero_shape w-[500px] h-[500px] bg-no-repeat relative bg-bottom' 
                    imgSrc={imgdev}/>
            </div>
        </div>
    </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary'/>
        </div>
  </section>
  )
}

export default Hero
