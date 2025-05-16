import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Press_Start_2P } from 'next/font/google'
 
const poppins = Poppins({
  subsets: ['latin'],
  display:'swap',
  weight: ['400', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display:'swap',
  weight: ['400', '700'],
})

const press = Press_Start_2P({ 
    subsets: ['latin'],
    display:'swap',
    weight:'400'
})


export {
    poppins,
    inter,
    press
}

