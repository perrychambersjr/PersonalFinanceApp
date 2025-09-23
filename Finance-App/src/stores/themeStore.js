import { create } from 'zustand';
import { THEME_CLASSES, THEME_HEX } from '../lib/constants';

export const useThemeStore = create((set, get) => ({
    themes: Object.keys(THEME_CLASSES),
    usedThemes: [],

    // Store theme when pot is created or updated
    reserveTheme: (theme) =>
        set((state) => ({
            usedThemes: [...new Set([...state.usedThemes, theme])],
        })),

    releaseTheme: (theme) =>
        set((state) => ({
            usedThemes: state.usedThemes.filter((t) => t !== theme),
        })),

    getAvailableThemes: () => {
        const { themes, usedThemes } = get();
        return themes.filter((t) => !usedThemes.includes(t))
    },

    getThemeClass: (theme) => THEME_CLASSES[theme] || "",
    getThemeHex: (theme) => THEME_HEX[theme] || '#000000'

}))