import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    navigate(`/search/${searchTerm}`)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="py-6 mt-8 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center w-full">
        <FiSearch className="w-5 h-5 ml-8" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 pl-4 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white"
        />
      </div>
    </form>
  )
}

export default Searchbar; 
