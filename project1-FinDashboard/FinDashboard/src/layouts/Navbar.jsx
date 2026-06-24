function navbar(){
    return(
        <>
        <section>
            <div className = "navbar-content">
                <div className='search-box'>
                <img src="#" alt="S" className ="search-icon"/>
                <input type="text" className="navbar-search" placeholder ="search anything..."/>
                </div>
                <span className="notification-icon">
                    <img src="#" alt="N" />
                </span>
                <span className="darkmode">
                    <img src="#" alt="DM" />
                </span>
            </div>
        </section>
        </>
    )
}

export default navbar;