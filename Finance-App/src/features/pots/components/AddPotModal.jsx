import React, { useEffect, useRef, useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import { useThemeStore } from '../../../stores/themeStore';

const AddPotModal = ({ userId, onClose, onPotCreated }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');

  const dropdownRef = useRef(null);

  const themes = useThemeStore((store) => store.themes);
  const usedThemes = useThemeStore((store) => store.usedThemes);
  const getThemeHex = useThemeStore((store) => store.getThemeHex);
  const reserveTheme = useThemeStore((store) => store.reserveTheme);
  const addPot = useRootStore((store) => store.addPot);

  useEffect(() => { // Prevents background scroll when modal is open
        document.body.style.overflow = 'hidden';  
        return () => {
        document.body.style.overflow = 'auto'; 
        };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !amount || !selectedTheme) return;

    const newPot = {
      id: crypto.randomUUID(),
      name,
      target: parseFloat(amount),
      total: 0,
      theme: selectedTheme,
    };

    addPot(newPot);
    reserveTheme(selectedTheme);
    onPotCreated?.(newPot);
    onClose?.();
  }

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* Modal content */}
        <div className="relative bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto z-10">
          <div className="flex flex-row justify-between items-start gap-6">
            <h1 className="text-2xl font-bold text-[var(--grey-900)]">Add Pot</h1>
            <button
              onClick={onClose}
              className="cursor-pointer border-black border-2 w-8 h-8 mt-2 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          <p className="mt-4 text-[var(--grey-500)]">Create a new pot and set a saving target.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Pot Name */}
            <div>
              <label htmlFor="pot_name" className="block mb-2 text-sm font-semibold text-[var(--grey-900)]">
                Pot Name
              </label>
              <input
                id="pot_name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-3 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full"
                placeholder="New Pot Name"
                required
              />
            </div>

            {/* Target */}
            <div>
              <label htmlFor="new_target" className="block mb-2 text-sm font-semibold text-[var(--grey-900)]">
                Target
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-2 flex items-center pointer-events-none">$</span>
                <input
                  id="new_target"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-6 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full"
                  required
                />
              </div>
            </div>

            {/* Theme */}
            <div>
              <label htmlFor="theme" className="block mb-2 text-sm font-medium text-gray-900">
                Theme
              </label>
              <select
                id="theme"
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="pl-3 border border-[var(--grey-900)] text-gray-900 text-sm rounded-lg block p-2.5 w-full"
                required
              >
                <option value="">Select a theme</option>
                {themes.map((theme) => {
                  const disabled = usedThemes.includes(theme);
                  return (
                    <option key={theme} value={theme} disabled={disabled}>
                      {theme} {disabled ? '(used)' : ''}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Create Pot
            </button>
          </form>
        </div>
      </div>
  )
}

export default AddPotModal