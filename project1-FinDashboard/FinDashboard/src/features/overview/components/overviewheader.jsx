function overviewheader(){
    return(
        <div className="main">
            <span>
            <h1>Good morning, Alex! 👋</h1>
            <p>Here's what's happening with your finances today</p>
            </span>
            <span>
                <select name="calendar-period" id="calendar-period">
                    <option value="" disabled> -- Choose a month -- </option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">January</option>
                    <option value="May">February</option>
                    <option value="June">March</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </span>
        </div>
    )
}

export default overviewheader;