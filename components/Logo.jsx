import Link from 'next/link';
import Image from 'next/image';
import Logo2 from '../public/Logo2.png'

const Logo = () => {
  return <Link href='/'>
            <Image className='rounded' src={Logo2} width={100} height={100} priority alt='Logo'/>
         </Link>
  
}

export default Logo
