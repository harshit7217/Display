import { Link } from 'react-router-dom'
import { PiStarFourBold } from 'react-icons/pi'
import { IoMdBook } from 'react-icons/io'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'

function Header() {
    return (
        <nav className='flex w-[100vw] h-30 bg-yellow-50 m-0 p-0'>
            <div className='flex w-[18%] h-[100vh] fixed overflow-x-hidden'>
                <Link to='' className='bg-coral w-[50%] flex justify-center pt-10' >
                    < IoMdBook color='#FF667D' className='bg-white h-15 border-1 rounded-full w-auto p-4'/>
                </Link>
                <Link to='' className='bg-peach w-[50%] flex justify-center pt-10' >
                    < PiStarFourBold color='#FF9776' className='bg-white h-15 border-1 rounded-full w-auto p-4' />
                </Link>
            </div>
            <div className='flex justify-around ml-[20%] w-[80vw] fixed pt-10'>
                <div className='flex items-center justify-center gap-5'>
                    < BsFillEmojiSmileFill color='#FF9776' className='h-15 w-auto' />
                    <h1 className='text-3xl text-gray-500'>Display<sup className='text-sm font-bold'>TM</sup></h1>
                </div>
                <div className=' flex items-center w-35'>
                    <p className='text-sm text-gray-500 font-monospace'>A CARE ORIENTED DESIGN STUDIO</p>
                </div>
                <div className='flex justify-center items-center gap-5 bg-peach rounded-full w-35'>
                    <button>Contact</button>
                    < FaLongArrowAltRight/>
                </div>
            </div>
        </nav>
    )
}

export default Header