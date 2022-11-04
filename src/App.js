import './App.css';

function App() {
  return (
    <div className="container min-h-screen max-w-full bg-darkblue flex justify-center items-center">
      <div className='h-fit w-80 bg-blueblur p-4 rounded-2xl shadow-2xl'>
        <div className='relative w-full rounded-xl mb-4'>
          <img className='relative w-full rounded-xl hover:bg-cyan-400 hover:cursor-pointer hover:opacity-0' src='./img/image-equilibrium.jpg' alt='' />
          <div className='absolute top-0 rounded-xl bg-cyan-500 w-full h-full z-50 opacity-0 hover:cursor-pointer hover:opacity-80 transition-opacity flex justify-center items-center' >
            <img className='' src='./img/icon-view.svg' alt='' />
          </div>
        </div>
        <h1 className='text-white text-xl font-sans font-semibold mb-4 hover:text-cyan-400 hover:cursor-pointer'>Equilibrium #3429</h1>
        <h2 className='text-gray-400 font-sans font-normal text-md mb-3'>Our Equilibrium collection promotes balance and calm.</h2>
        <div className='flex justify-between mb-3'>
          <div>
            <img className='inline w-2 h-3' src='./img/icon-ethereum.svg' alt='' /><span className='text-cyan-400 text-sm font-semibold'> 0.041ETH</span>
          </div>
          <div>
            <img className='inline w-3' src='./img/icon-clock.svg' alt='' /><span className='text-gray-400 text-sm font-semibold'> 3 Days Left</span>
          </div>
        </div>
        <div className='border-t border-gray-400 pt-3'>
          <img className='w-7 inline border-solid border-2 border-gray-400 rounded-full' src='./img/image-avatar.png' alt='' />
          <h2 className='inline font-sans font-semibold text-sm text-gray-400 ml-2'> Creation of<span className='text-white hover:text-cyan-400 hover:cursor-pointer'> Jules Wyvern</span></h2>
        </div>
      </div>
    </div>
  );
}

export default App;
