import { PlayerStore } from '../store/PlayerStore';

export const HomePlayerButton = () => {
  const { isPlaying, setIsPlaying } = PlayerStore(state => state);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={handleClick} className='bg-rose-800 hover:bg-rose-900 text-white font-bold py-2 px-4 border border-rose-800 hover:border-rose-900 rounded'>
      {isPlaying ? 'Pausar transmisión' : 'Reproducir en vivo'}
    </button>
  );
};
