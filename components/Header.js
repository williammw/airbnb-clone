import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import {useState} from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


export default function Header() {

  const [searchInput , setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuest] = useState(1);
  const selectionRange = {
    startDate:startDate,
    endDate: endDate,
    key: 'selection',
  }
  const handleSelect = (ranges) => {
    // console.log(ranges)
    setStartDate(ranges.selection.StartDate)
    setEndDate(ranges.selection.endDate)
  }
  const resetInput = () => {
    setSearchInput("")
  }
  // console.log(searchInput)
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto" >
        <Image
          src='https://imagedelivery.net/Y07ySA3u_Km8xu1A8ejC2g/cd174566-0a62-4656-a50e-cd67a201d200/public'
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
        <input 
        className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" 
        type="text" 
        placeholder="start find your next hotel"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}

        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer" >become a host</p>
        
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
      {searchInput&& (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
              <UsersIcon className="h-5 "/>
              <input 
                value={numOfGuests}
                onChange={e => setNumOfGuest(e.target.value)}
                type="number" 
                min={1}
                className="w-12 pl-2 " 
              />
            </div>
            <div className="flex">
              <button
                onClick={resetInput}
                className="flex-grow text-gray-500">Cancel</button>
              <button className="flex-grow text-red-400">Search</button>
            </div>
          </div>
        )
      }
      
    </header>
  )
}
