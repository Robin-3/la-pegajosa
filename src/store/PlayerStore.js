import { create } from 'zustand';

export const PlayerStore = create((set) => {
  return {
    isPlaying: false,
    volume: 1,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setVolume: (volume) => set({ volume })
  };
});
