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
        text: 'Bokanga@gmail.com',
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

    console.log(getData(qualificationData,'experience'));
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:,b-26 text-center mx-auto'>About Me</h2>
        </div>
    </section>
  )
}

export default About
