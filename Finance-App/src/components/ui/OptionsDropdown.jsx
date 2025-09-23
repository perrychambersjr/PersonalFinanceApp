import React, { useEffect, useRef, useState } from 'react';
import { EllipsisIcon } from '../ui/Icons';

const OptionsDropdown = ({ options }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
        <button
            className='p-2 rounded-full text-[var(--grey-500)] hover:text-[var(--grey-900)] hover:bg-[var(--grey-100)] transition-colors duration-200 cursor-pointer'
            onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
            <EllipsisIcon size={4} color='#B3B3B3'/>
        </button>

        {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            {options.map((option, index) => {
            const isDelete = option.label.toLowerCase().includes('delete');
            return (
                <button
                key={index}
                className={`${isDelete ? 'text-red-600 hover:bg-red-100' : 'text-gray-700 hover:bg-gray-100'} block w-full text-left px-4 py-2 text-sm`}
                onClick={() => {
                    option.action();
                    console.log('clicked')
                    setIsDropdownOpen(false);
                }}
                data-action-type={isDelete ? 'delete' : 'action'}
                >
                {option.label}
                </button>
            );
            })}
        </div>
        )}
    </div>
  )
}

export default OptionsDropdown