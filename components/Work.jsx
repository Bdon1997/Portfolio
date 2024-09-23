'use client'
import Link from 'next/link';
import {Button} from './ui/button';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';
import { Description } from '@radix-ui/react-dialog';

const projectData = [
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Spotify Clone',
        description: 'Spotify clone made using react',
        link: 'https://bdon1997.github.io/Spotify-Clone/',
        github: 'https://github.com/Bdon1997/Spotify-Clone',
    },
    {
        image: '/work/2.png',
        category: 'Vanilla js',
        name: ' CarGremlins Dealership',
        description: 'Built a Car dealership landing page',
        link: 'https://bdon1997.github.io/CarDealership/',
        github: 'https://github.com/Bdon1997/CarDealership',
    },
    {
        image: '/work/3.png',
        category: 'Vanilla js',
        name: 'Simon Game',
        description: 'Built a Simon Game',
        link: 'https://bdon1997.github.io/Spotify-Clone/',
        github: 'https://github.com/Bdon1997/Spotify-Clone',
    },

];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48 '>
        <div className="container mx-auto">
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] 
                            flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p className='subtitle mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <Link href='/projects'><Button>All projects</Button></Link>
            </div>
            {/* Slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                    640:{
                        slidesPerView: 2
                    }
                    }} 
                    spaceBetween={30} 
                    modules={[Pagination]} 
                    pagination={{clickable: true}}
                    loop={true}
                >
                    {/* first 4 projects */}
                    {projectData.slice(0,4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper> 
            </div>
        </div>
    </section>
  )
}

export default Work
