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
        ],
    },   
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/node-js.svg'
            },
            {
                imgPath: '/about/npm.svg'
            },
            {
                imgPath: '/about/react.svg'
            },
            {
                imgPath: '/about/microsoft-sql-server.svg'
            },
            {
                imgPath: '/about/azure.svg'
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
                            <TabsTrigger className="w-[162px] xl:w-auto" value='qualification'>Experience</TabsTrigger>
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
                            {/* qualification */}
                            <TabsContent value='qualification'>
                                <div>
                                    <h3 className='h3 mb-8 text-center xl:text-left'>
                                        Where it all began
                                    </h3>
                                    {/* Experience & Education */}
                                    <div className='justify-center grid md:grid-cols-2'>
                                        {/* experience */}
                                        <div>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary mb-4'>
                                                <Briefcase/>
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData,'experience').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData,'experience').data.map((item,index)=>{
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group ' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute 
                                                                                -left-[5px] group-hover:translate-y-[84px] transition-all
                                                                                duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary mb-4 md:my-4'>
                                                <GraduationCap/>
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData,'education').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData,'education').data.map((item,index)=>{
                                                    const {University, qualification, years} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group ' key={index}>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{University}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* Skills */}
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8'>Tools I use to get the job done</h3>
                                    {/* Skills */}
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'> {getData(skillsData,'Skills').title}</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* Skills List */}
                                        <div>
                                            {getData(skillsData,'Skills').data.map((item,index) => {
                                                const {name} = item;
                                                return (
                                                <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                    <div className='font-medium'>{name}</div>
                                                </div>)
                                            })}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* tool list */}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            {getData(skillsData,'tools').data.map((item,index) => {
                                                const {imgPath} = item;
                                                return (
                                                    <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt='' priority/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div> 
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
