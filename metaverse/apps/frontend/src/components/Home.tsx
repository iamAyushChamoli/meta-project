import React from 'react';
import '../index.css';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex-grow flex flex-row w-full bg-gray-200 hero">
        <div className=' w-[100%]'>
          <div className=' mt-[40%] text-center'>
          <h1 className="text-4xl text-center text-gray-800 font-bold">Welcome to MetaVerse</h1>
          <p className='mt-2 text-2xl'> Connect with your peers in a Meta workspace remotely </p>
          <button className="bg-blue-500 hover:bg-purple-600 w-[20%] h-[25%] text-white font-bold py-2 px-4 rounded-2xl mt-4">Get Started</button>
          </div>
        </div>
        <div className=' w-full'>
          <video src="/src/assets/hero/hero.mp4" autoPlay loop muted playsInline className="w-[70%] rounded-3xl h-auto ml-[20%] mt-[28%]" />
        </div>
      </div>
      <footer className="bg-gray-800 w-full py-4 fixed mt-[47%]">
        <p className="text-white text-center">&copy; MetaVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;