import React from 'react';
import Social from './Social';

const Footer = () => {
    return (
        <footer className='bg-secondary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-center'>
                    {/* socials */}
                    <Social 
                        containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' 
                        iconsStyles='text-primary text-[30px] dark:text-white/70 
                                     hover:text-white dark:hover:text-primary transition-all'
                    />
                    {/* copyright */}
                    <div className='text-muted-foreground'>
                        Copyright &copy; Browndon Bokanga. All rights reserved.
                    </div>
                </div>
            </div> 
        </footer>
    )
}

export default Footer