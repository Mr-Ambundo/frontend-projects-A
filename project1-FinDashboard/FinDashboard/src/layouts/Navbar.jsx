function navbar(){
    return(
        <>
        <section>
            <div className = "navbar-content">
                <div>
                <img src="#" alt="S" id = "search-icon"/>
                <input type="text" id = "navbar-search" name = " " placeholder = "search anything..."/>
                </div>
                <span className="notification-icon">
                    <img src="#" alt="N" />
                </span>
                <span className="darkmode">
                    <img src="#" alt="" />
                </span>
            </div>
        </section>
        </>
    )
}

export default navbar;