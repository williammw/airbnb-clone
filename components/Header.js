import Image from 'next/image';
export default function Header() {
  return (
    <header>
    
      {/* Left */}
      <div>
        <div className='relative flex items-center h-10 cursor-pointer' >
          <Image
            src='/assets/images/airbnb-logo.svg'
            layout='fill'
            alt='airbnb logo'
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </div>

      {/* middle */}
      <div></div>

      {/* right */}
      <div></div>
    </header>
  )
}
