import React, { useEffect, useRef, useState } from 'react';
import { useRootStore } from '../../../stores/rootStore';
import { useThemeStore } from '../../../stores/themeStore';

const EditPotModal = ({ pot, onClose, usedColors }) => {
  const updatePot = useRootStore(state => state.updatePot);
  const reserveTheme = useThemeStore(state => state.reserveTheme);
  const availableThemes = useThemeStore(state => state.themes);
  const [name, setName] = useState(pot.name);
  const [target, setTarget] = useState(pot.target);
  const [selectedColor, setSelectedColor] = useState(pot.color);

  // prevent background scroll while model is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    setName(pot?.name || "");
    setTarget(pot?.target || 0);
    setSelectedColor(pot?.color || "");
  }, [pot]);

  const handleSave = () => {
    updatePot({ ...pot, name, target: parseFloat(target), color: selectedColor });
    reserveTheme(selectedColor);
    onClose();
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/30 z-50">
      <div className="bg-white p-6 rounded-xl shadow-md w-1/3">
        {/* Header */}
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-[var(--grey-900)]">
            Edit Pot
          </h1>
          <button
            onClick={onClose}
            className="cursor-pointer border-black border-2 w-8 h-8 rounded-full flex items-center justify-center hover:bg-[var(--grey-100)]"
          >
            ✕
          </button>
        </div>

        <p className="mt-4 text-[var(--grey-500)]">
          If your saving targets change, feel free to update your pots.
        </p>

        {/* Name input */}
        <div className="mt-6">
          <label
            htmlFor="pot_name"
            className="text-[var(--grey-900)] font-semibold block mb-2 text-sm"
          >
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

        {/* Target input */}
        <div className="mt-6">
          <label
            htmlFor="new_target"
            className="text-[var(--grey-900)] font-semibold block mb-2 text-sm"
          >
            Target
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-600">
              $
            </span>
            <input
              id="new_target"
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="pl-6 border border-[var(--grey-900)] text-gray-900 text-sm font-semibold rounded-lg block p-2.5 w-full"
              placeholder="0"
              required
            />
          </div>
        </div>

        {/* Color/Theme dropdown */}
        <div className="mt-6">
          <label
            htmlFor="theme"
            className="text-[var(--grey-900)] font-semibold block mb-2 text-sm"
          >
            Theme
          </label>
          <select
            id="theme"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="pl-3 border border-[var(--grey-900)] text-gray-900 text-sm rounded-lg block p-2.5 w-full"
          >
            <option value="">Select a theme</option>
            {availableThemes.map((color) => (
              <option key={color} value={color} disabled={usedColors.includes(color)}>
                {color} {usedColors.includes(color) ? "(used)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handleSave}
            className="w-full px-4 py-2 rounded-lg bg-[var(--grey-900)] text-white font-semibold hover:bg-gray-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditPotModal