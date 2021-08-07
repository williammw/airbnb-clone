import Image from 'next/image';
import {SearchIcon} from '@heroicons/react/solid'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 md:px-10">
      {/* Left */} 
      <div className="relative flex items-center h-10 cursor-pointer my-auto" >
        <Image
          src='/assets/images/airbnb-logo.svg'
          layout='fill'
          alt='airbnb logo'
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center 
      md:border-2 rounded-full py-2
      md:shadow-sm">
        <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"  type="text" placeholder="start find your next hotel" />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
      </div>

      {/* right */}
      <div></div>
    </header>
  )
}
