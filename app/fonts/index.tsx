import { Poppins, Inter } from 'next/font/google'
 
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


export {
    poppins,
    inter
}
 

