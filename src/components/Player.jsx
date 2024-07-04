import { useRef, useEffect } from 'react';
import { PlayerStore } from '../store/PlayerStore';
import { Slider } from './Slider';
import { Play } from './icons/Play';
import { Pause } from './icons/Pause';
import { Volume } from './icons/Volume';

export const Player = () => {
  const { isPlaying, setIsPlaying, volume, setVolume } = PlayerStore(state => state);
  const audioRef = useRef();

  useEffect(() => {
    const src = 'https://zapatoca.net:8088/lapegajosa';
    audioRef.current.src = src;
    audioRef.current.volume = volume;
  }, []);

  useEffect(() => {
    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='flex justify-center items-center space-x-4 mb-4'>
      <button onClick={handleClick} className='bg-rose-800 hover:bg-rose-900 text-white rounded-full p-3'>
        {isPlaying ? <Pause /> : <Play />}
        <audio ref={audioRef} />
      </button>
      <div className='flex items-center'>
        <Volume />
        <Slider defaultValue={[100]} max={100} min={0} onValueChange={value => { setVolume(value / 100); }} />
      </div>
    </div>
  );
};
