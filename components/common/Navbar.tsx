import React from 'react'
import { ModeToggle } from './toggle-theme'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='text-xs md:mb-5 mb-2'>
      {/* desktop navbar */}
      <div className=' hidden bg-card px-3 md:grid grid-cols-12 md:items-center 
                      md:justify-center py-2 '>
        {/* login register */}
        <div className='flex col-span-3 items-center gap-x-2'> 
       
          <Link href="/accounts"><Button size='sm'> ثبت نام </Button></Link>
        </div>
        <div className=' col-span-6'>
          <ul className='flex items-center justify-center gap-x-3'>
            <Link href="/"><li> خانه </li></Link>
            <Link href="/tutorial/1"><li> آموزش </li></Link>
            <Link href="/coding/1"><li> تمرین </li></Link>
            <Link href="#"><li> درباره من </li></Link>
          
          </ul>  
        </div>

        {/* dark theme */}
        <div className='flex col-span-3 gap-x-2 items-center justify-end'> 
        <ModeToggle/>

        <span className='text-rose-600'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
        </svg>


        </span>
        </div>

      </div>

       
    </nav>
  )
}