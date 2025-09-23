import React, { useEffect, useState } from 'react';

const EditPotModal = ({ pot, onClose, onPotUpdated, usedColors }) => {
  const [name, setName] = useState(pot.name);
  const [target, setTarget] = useState(pot.target);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(pot.color);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

    // Prevent background scroll when modal is open
    useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
        document.body.style.overflow = 'auto';
    };
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
        <div className="flex flex-row justify-between items-start gap-6">
            <h1 className="text-4xl font-bold text-[var(--grey-900)]">Edit Pot</h1>
            <button className="cursor-pointer border-black border-2 w-8 h-8 mt-2 rounded-full"
            >X</button>
        </div>
        <p className="mt-4 text-[var(--grey-500)]">If your saving targets change, feel free to update your pots.</p>

        <div className="mt-6">
            <label for="pot_name" className="text-[var(--grey-900)] font-semibold block mb-2 text-sm ">Pot Name</label>
            <input type="text" id="pot_name" className="pl-6 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full" placeholder="New Pot Name" required />
        </div>

        <div className="mt-6">
            <label for="new_target" className="text-[var(--grey-900)] font-semibold block mb-2 text-sm ">Target</label>
            <div className="relative">
                <h1 className="absolute inset-y-5 start-0 flex items-center ps-3 pointer-events-none">$</h1>
            </div>
            <input type="text" id="new_target" className="pl-6 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full" placeholder="" required />
        </div>

        <div className="mt-6">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Theme</label>
            <select id="countries" class="pl-6 border border-[var(--grey-900)] text-gray-900 text-sm rounded-lg block p-2.5 w-full">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    </div>
  )
}

export default EditPotModal