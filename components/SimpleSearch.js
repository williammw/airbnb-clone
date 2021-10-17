import React, {useState} from 'react'





function SimpleSearch() {
  const [searchVal, setSearchValue] = useState("")

  const posts = [
    {
      id: 1,
      imgPath: "/assets/img/1.png",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      address: "New Delhi, India",
    },
    {
      id: 2,
      imgPath: "/assets/img/2.png",
      name: "Mary Rosamund",
      email: "agra@rosie.com",
      address: "Tbilisi, India",
    },
    {
      id: 3,
      imgPath: "/assets/img/3.png",
      name: "Sherlock Watson",
      email: "irene@johnlock.com",
      address: "Baker Street, India",
    },
    {
      id: 4,
      imgPath: "/assets/img/4.png",
      name: "John Holmes",
      email: "mary@johnlock.com",
      address: "Baker Street, India",
    },
    {
      id: 5,
      imgPath: "/assets/img/5.png",
      name: "Mycroft Lestrade",
      email: "britishgovt@gmail.com",
      address: "London, India",
    },
  ];


  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
      <div className="flex border-2 rounded">
          
          <input 
            className="px-4 py-2 w-80"
            value={searchVal}
            onChange={handleSearch}
            type="text"
            placeholder="Search Shit" />
          <button className="flex items-center justify-center px-4 border-l">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
          </button>
      </div>
      </div>
      <div className=" relative w-full bg-white rounded-lg shadow-lg lg:w-1/3">
        <ul className="divide-y-2 divide-gray-100">
        {posts?.length > 0 && posts.filter(post => (post.name.toLowerCase().includes(searchVal.toLowerCase()) || post.email.toLowerCase().includes(searchVal.toLowerCase())  )).map(post => (
          <li className='p-3 hover:bg-blue-600 hover:text-blue-200' key={post.id}>
            {post.namne} 
            {post.email}
            {post.address}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default SimpleSearch
