import { FC } from "react";

const SearchIcon = () => (
  <svg 
    aria-hidden="true" 
    className="w-5 h-5 text-gray-500 dark:text-gray-400" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

export const SearchBar: FC = () => {
  return (
    <div className="w-full relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        id="search"
        type="search" 
        placeholder="Search"
        autoComplete="off"
        className="h-8 w-full px-3 py-2 pl-9 pr-4 text-white text-sm placeholder:text-gray-500 bg-[#151922] appearance-none rounded-full"
      />
    </div>
  )
}
