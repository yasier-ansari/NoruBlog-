// import Link from 'next/link'
// import Image from 'next/image'


// const Header = () => {
//     return (
//         <header className='flex justify-between py-4 px-5 max-w-screen items-center mx-auto' >
//             <div className='flex items-center space-x-5' >
//                 <Link href='/' >
//                     <img className='w-44 object-contain cursor-pointer' src='https://links.papareact.com/yvf' alt='medium Logo' />
//                 </Link>
//                 <div className='hidden md:inline-flex items-center space-x-5 ' >
//                     <h3>About</h3>
//                     <h3>Contact</h3>
//                     <h3 className='text-white bg-green-500 rounded-full py-1 px-4' >Follow</h3>
//                 </div>
//             </div>
//             <div className='flex items-center space-x-4 text-green-500' >
//                 <h3>Sign Up</h3>
//                 <h3 className='border-[.1rem] rounded-full py-1 px-3 border-green-500' >Get Started</h3>
//             </div>
//         </header>
//     )
// }

// export default Header
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { GoBrowser } from 'react-icons/go'
import ProgressBar from './ProgressBar';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <header className={`${isScrolled && 'bg-[#ffffff]'} bg-gray-200 sticky top-0 !w-screen z-10`}>
            <div className='flex flex-col items-center sm:flex-row  sm:justify-between text-center py-3 xl:container xl:mx-auto '>
                <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center pb-4 sm:py-0 pl-4' >
                    <div>
                        <input type='text' placeholder='Search...' className='text-input' />
                    </div>
                </div>
                <div className='shrink w-80 sm:order-2' >
                    <Link href={'/'}>
                        <img src='/static/norublog.png' alt="" className='w-52 mx-auto' />
                    </Link>
                </div>
                <div className='w-96 order-3 flex justify-center' >
                    <div className='flex gap-4 md:gap-6 '>
                        <Link href={'/'}>
                            <a href='' >
                                <div data-tooltip-target="tooltip-bottom" className="tooltip mb-2 md:mb-0 text-white text-sm   text-center hover:bg-transparent relative inline-block">
                                    <FaDiscord data-tooltip-target="tooltip-default" color='#555' className='h-6 w-6 hover:fill-[#5865F2]' />
                                    <span className='tooltiptext' >Discord</span>
                                </div>
                            </a>

                        </Link>

                        <Link href={'/'}>
                            <a href=''>
                                <div className="tooltip mb-2 md:mb-0 text-white text-sm  text-center hover:bg-transparent">
                                    <FaFacebook color='#555' className='h-6 w-6 hover:fill-[#f2588e]' />
                                    <span className="tooltiptext">facebook</span>
                                </div>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a href=''>
                                <div className="tooltip mb-2 md:mb-0 text-white text-sm  text-center hover:bg-transparent">
                                    <FaGithub color='#555' className='h-6 w-6 hover:fill-[#31ff9f]' />
                                    <span className="tooltiptext">Github</span>
                                </div>
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a href=''>
                                <div className="tooltip mb-2 md:mb-0 text-white text-sm  text-center hover:bg-transparent">
                                    <GoBrowser color='#555' className='h-6 w-6 hover:fill-[#9933fe]' />
                                    <span className="tooltiptext">portfolio <br /> website</span>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <ProgressBar />
        </header>

    )
}

export default Header;