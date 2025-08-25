import React from 'react'
import { Link } from 'react-router-dom'
import { PiStarFourBold } from 'react-icons/pi'
import { IoMdBook } from 'react-icons/io'
import { BsFillEmojiSmileFill } from 'react-icons/bs'

function Header() {
  return (
    <nav>
        <div>
            <div>
                <Link to='' >
                    < IoMdBook color='#FF667D'/>
                </Link>
                <Link to='' >
                    < PiStarFourBold color='#FF9776' />
                </Link>
            </div>
            <div>
                <div>
                    < BsFillEmojiSmileFill color='#FF9776' />
                    <h1>Display<sup>TM</sup></h1>
                </div>
                <div>
                    <p>A CARE ORIENTED DESIGN STUDIO</p>
                </div>
                <div>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header