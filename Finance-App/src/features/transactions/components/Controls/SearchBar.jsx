import React, { useState } from 'react';
import IconSearch from '../../../../assets/images/icon-search.svg';


const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="p-6 bg-white">
      <label htmlFor="table-search" className="sr-only">Search</label>
      <div className="relative mt-1">
        <input type="text" onChange={(e) => onSearchChange(e.target.value)} id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="Search transactions"/>
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex justify-end items-center ps-3 pointer-events-none">
          <img src={IconSearch} alt="search" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar