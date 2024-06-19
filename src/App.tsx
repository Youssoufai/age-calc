import './App.css'
import arrow from './images/icon-arrow.svg'
function App() {

  return (
    <>
      <main
        className='h-[340px] w-[60rem] bg-offWhite p-9'
      >
        <form action="" className='flex'>
          <div
            className='flex'
          >
            <label htmlFor="day">Day</label>
            <input type="number" className="border border-lightGrey" />
          </div>
          <div>
            <label htmlFor="month">MONTH</label>
            <input type="number" className="border border-lightGrey" />
          </div>
          <div>
            <label htmlFor="Year">YEAR</label>
            <input type="number" className="border border-lightGrey" />
          </div>
          <hr />
          <button type="submit" className='p-2 bg-slate-800 rounded-md'>
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
