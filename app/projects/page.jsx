'use client';
import React, {useState} from 'react';
import {Tabs, TabsList, TabsContent, TabsTrigger} from '@/components/ui/tabs';

import ProjectCard from '@/components/ProjectCard';

//images
import img7 from '../public/work/7.png';
import img6 from '../public/work/6.png';
import img2 from '../public/work/2.png';
import img4 from '../public/work/4.png';


const projectData = [
  {
      image: img7,
      category: 'react js',
      name: 'Spotify Clone',
      description: 'Spotify clone made using react',
      link: 'https://bdon1997.github.io/Spotify-Clone/',
      github: 'https://github.com/Bdon1997/Spotify-Clone',
  },
  {
      image: img6,
      category: 'Vanilla js',
      name: ' CarGremlins Dealership',
      description: 'Car dealership landing page',
      link: 'https://bdon1997.github.io/CarDealership/',
      github: 'https://github.com/Bdon1997/CarDealership',
  },
  {
      image: img4,
      category: 'Vanilla js',
      name: 'Simon Game',
      description: 'Built a Simon Game',
      link: 'https://bdon1997.github.io/Simon-Game/',
      github: 'https://github.com/Bdon1997/Simon-Game',
  },
  {
    image: img2,
    category: 'Next Js',
    name: 'Portfolio',
    description: 'Portfolio to host my work',
    link: 'https://bdon1997.github.io/Spotify-Clone/',
    github: 'https://github.com/Bdon1997/Portfolio',
},
];

// remove category duplicates
const uniqueCategories = ['All Projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All Projects');

  const filteredProjects = projectData.filter(project => {
    // if category is 'all projects' return all else filter by category
    return category === 'All Projects' 
           ? project 
           : project.category === category;
  })

  return (
    <section className='min-h-screen pt-12'>
        <div className="container mx-auto">
          <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Projects</h2>
          {/* Tabs */}
          <Tabs defaultValue={category} className='mb-24 xl:mb-35'>
            <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                {categories.map((category, index) => {
                  return (<TabsTrigger onClick={()=> setCategory(category)}
                            value={category} 
                            key={index} 
                            className='capitalize w-[163px] md:w-auto'
                          >
                              {category}
                          </TabsTrigger>
                        );
                })}
            </TabsList>
            {/* tab content */}
            <div className='text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project}/>
                  </TabsContent>
                )
              })}
            </div>
          </Tabs>
        </div>
    </section>
  )
  
}

export default Projects
