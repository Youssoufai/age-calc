import './index.css'
import arrow from './images/icon-arrow.svg'
import Calc from './Calc'
import { useState } from 'react'

function App() {
  const [day, setDay] = useState<number | undefined>();
  const [month, setMonth] = useState<number | undefined>();
  const [year, setYear] = useState<number | undefined>();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }

  return (
    <>
      <Calc />
      <main
        className='h-[full] w-[45rem] bg-offWhite p-12 space-y-3 rounded-lg'
        style={{
          borderBottomRightRadius: '8rem'
        }}
      >
        <form onSubmit={handleClick}>
          <div className='flex gap-3'>
            <div className='flex flex-col'>
              <label htmlFor="day" className='text-[#646464]'>Day</label>
              <input
                type="text"
                id='day'
                value={day || ''}
                onChange={(e) => setDay(parseInt(e.target.value))}
                className="input input-bordered bg-white w-[10rem] h-[50px] max-w-xs"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="month" className='text-[#646464]'>MONTH</label>
              <input
                type="text"
                id='month'
                value={month || ''}
                onChange={(e) => setMonth(parseInt(e.target.value))}
                className="input input-bordered bg-white w-[10rem] h-[50px] max-w-xs"
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="year" className='text-[#646464]'>YEAR</label>
              <input
                type="text"
                id='year'
                value={year || ''}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="input input-bordered bg-white w-[10rem] h-[50px] max-w-xs"
              />
            </div>
          </div>

          <br />
          <section className='flex flex-col items-center md:flex-row'>
            <div className='w-[90%]'>
              <hr className='w-[90%] h-[3px] bg-black' />
            </div>
            <button type="submit">
              <img src={arrow} className="m-4 md:m-0 rounded-[100%] bg-purple px-12 py-12 flex justify-center items-center" alt="" />
            </button>
          </section>
        </form>
        <div className='w-full'>
          <h1 className='text-[54px] text-black'><span className='text-purple text-[54px]'>34</span> Years</h1>
          <h1 className='text-[54px] text-black'><span className='text-purple text-[54px]'>3</span> Months</h1>
          <h1 className='text-[54px] text-black'><span className='text-purple text-[54px]'>26</span> Days</h1>
        </div>
      </main>
    </>
  )
}

export default App
