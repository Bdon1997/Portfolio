import React from 'react'
import {RiGithubFill, RiLinkedinFill} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
    {
        path: 'https://github.com/Bdon1997',
        name: <RiGithubFill/>,
    },
    {
        path: 'https://www.linkedin.com/in/browndon-bokanga-93b509184/',
        name: <RiLinkedinFill/>,
    }
]

const Social = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return ( <Link href={icon.path} key={index}>
                <div className={`${iconsStyles}`}>{icon.name}</div></Link>
            )
        })}
    </div>
  )
}

export default Social
