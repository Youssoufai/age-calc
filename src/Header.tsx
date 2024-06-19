function Header() {
    return (
        <>
            <form action="">
                <div>
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
            </form>
        </>
    )
}

export default Header