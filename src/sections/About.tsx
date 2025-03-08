import { Card } from "@/components/Card"
import SectionHeader from "@/components/SectionHeader"
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import JavascriptIcon from "@/components/iconsJSX/JavascriptIcon";
import HtmlIcon from "@/components/iconsJSX/HtmlIcon";
import CssIcon from "@/components/iconsJSX/CssIcon";
import ReactIcon from "@/components/iconsJSX/ReactIcon";
import ChromeIcon from "@/components/iconsJSX/ChromeIcon";
import GithubIcon from "@/components/iconsJSX/GithubIcon";
import StarIcon from "@/components/iconsJSX/StarIcon";
import { CardHeader } from '@/components/CardHeader'

const toolboxItems = [
    {
        title: 'JavaScript',
        icon: <JavascriptIcon />
    },
    {
        title: 'HTML5',
        icon: <HtmlIcon />
    },
    {
        title: 'CSS3',
        icon: <CssIcon />
    },
    {
        title: 'React',
        icon: <ReactIcon />
    },
    {
        title: 'Chrome',
        icon: <ChromeIcon />
    },
    {
        title: 'Github',
        icon: <GithubIcon />
    },
]

const hobbies = [
    {
        title: 'Painting',
        emoji: '🎨'
    },
    {
        title: 'Photography',
        emoji: '📷'
    },
    {
        title: 'Gaming',
        emoji: '🎮'
    },
    {
        title: 'Hiking',
        emoji: '🥾'
    },
    {
        title: 'Music',
        emoji: '🎵'
    },
    {
        title: 'Fitness',
        emoji: '🏋️'
    },
    {
        title: 'Reading',
        emoji: '📖'
    },
]
export const AboutSection = () => {
    return (
        <div className='py-20'>
            <div className='container'>
                <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />
                <div className="mt-20">
                    <Card className="p-6 h-[320px]">
                        <CardHeader title='My Reads' description='Explore the books shaping my perspectives.' />
                        <div className='w-40 mx-auto mt-8'>
                            <Image src={bookImage} alt='Book Cover' />
                        </div>
                    </Card>
                    <Card className="p-6">
                        <CardHeader title='My Toolbox' description='Explore the technologies and tools I use to create digital experiences.' />
                        
                    </Card>
                    <Card>
                        <CardHeader title='Beyond the Code' description='Explore my interests and hobbies beyond the digital realm.' />
                        <div>
                            {hobbies.map((hobby) => (
                                <div key={hobby.title}>
                                    <span>{hobby.title}</span>
                                    <span>{hobby.emoji}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <Image src={mapImage} alt='map' />
                        <Image src={smileMemoji} alt='Smiling memoji' />
                    </Card>
                </div>
            </div>
        </div>
    )
}