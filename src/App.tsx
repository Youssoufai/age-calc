import './App.css'
import arrow from './images/icon-arrow.svg'
function App() {

  return (
    <>
      <main
        className='h-[340px] w-[60rem] bg-offWhite p-9'
      >
        <form action="" className='flex gap-3'>
          <div
            className='flex flex-col'
          >
            <label htmlFor="day">Day</label>
            <input type="number" className="border border-lightGrey" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="month">MONTH</label>
            <input type="number" className="border border-lightGrey" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="Year">YEAR</label>
            <input type="number" className="border border-lightGrey" />
          </div>
          <hr />
          <button type="submit" className='py-2 px-4 bg-black text-white rounded'>
            Submit
          </button>
        </form>
        <div>
          <h1><span>38</span>Years</h1>
          <h1><span>3</span>months</h1>
          <h1><span>26</span>Days</h1>
        </div>
      </main>

    </>
  )
}

export default App
