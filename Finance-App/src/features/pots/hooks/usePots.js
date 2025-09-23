import { usePotsStore } from "../store/potsStore";

export const usePots = () => {
    const pots = usePotsStore((state) => state.pots)
    const addPot = usePotsStore((state) => state.addPot)

    return { pots, addPot }
}