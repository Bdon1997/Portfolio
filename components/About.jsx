import DevImg from './DevImg';
import Image from 'next/image';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, CalendarRange, Briefcase, Calendar, University, Section} from 'lucide-react';

const infoData = [
    {
    icon: <User2 size={20} />,
    text: 'Browndon Bokanga',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+44 7852481326',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'Bokanga97.bb@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born 21 Nov, 1997',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelors in Business Information Systems',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Newham, London, England',
    }
];

const qualificationData = [
    {
      title: 'education',
      data: [
        {
            University: 'Canterbury Christ Church University',
            qualification: 'Bachelors in Business Information Systems',
            years: '2016 -2019',
        }
      ]  
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Innocent Drinks',
                role: 'Data Integration Analyst',
                years: 'Jul - 2023 : Jan - 2024',
            },
            {
                company: 'Bollore Logistics',
                role: 'Software Developer/Analyst',
                years: 'Nov - 2019 : Jul - 2023',
            },
            {
                company: 'Univeristy of East London',
                role: 'Database Administrator',
                years: 'Jul - 2019 : Sep - 2019',
            },

        ]
    }
];

const skillsData = [
    {
        title: 'Skills',
        data: [
            {
                name: 'HTML, CSS, JavaSript'
            },
            {
                name: 'Front-end Development'
            },
            {
                name: 'Node.Js, NPM, JQuery, Axios'
            },
            {
                name: 'Back-end Development'
            },
            {
                name: 'HTML, CSS, JS'
            },
            {
                name: 'HTML, CSS, JS'
            },

        ],
    },   
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/figma.svg'
            },
            {
                imgPath: '/about/notion.svg'
            },
            {
                imgPath: '/about/wordpress.svg'
            },
        ],
    }

];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className=" container mx-auto sm:px-6">
            <h2 className='section-title mb-8 xl:mb-26 text-center mx-auto'>About Me</h2>
            <div className='flex flex-col xl:flex-row'>
                {/* Image */}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg  containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/hero/developer.png'/>
                </div> 
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                            <TabsTrigger className="w-[162px] xl:w-auto" value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value='qualification'>Qualifications</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 xl:mt-8'>
                            {/* personal */}
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>
                                        Creating amazing designs using cutting-edge technology
                                    </h3>
                                    <p className='subtitle max-auto xl:mx-0'>
                                        Been programming for 4 years, working primarily with; ABL Openedge Progress, HTML, CSS JavaScript, Azure Devops, Azure data factories and SQL databases and more.
                                    </p>
                                    {/* Icons */}
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index) => {
                                            return ( 
                                            <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                    {/* Languages */}
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-primary h4'>Languages Skills</div>
                                        <div className="border-b border-border"></div>
                                        <div>HTML,CSS,JavaScript,SQL,ABL,Python</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualification'>qualification Info</TabsContent>
                            <TabsContent value='skills'>Skills Info</TabsContent>
                        </div> 
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
