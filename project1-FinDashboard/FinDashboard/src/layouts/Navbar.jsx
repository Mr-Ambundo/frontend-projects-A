function navbar(){
    return(
        <>
        <section>
            <div className = "navbar-content">
                <div className='search-box'>
                <img src="Desktop/projects/frontend-projects-A/project1-FinDashboard/FinDashboard/src//assets/icons/search.png" className ="search-icon"/>
                <input type="text" className="navbar-search" placeholder ="search anything..."/>
                </div>
                <span className="notification-icon">
                    <img src="Desktop/projects/frontend-projects-A/project1-FinDashboard/FinDashboard/src//assets/icons/bell.png" />
                </span>
                <span className="dark-mode">
                    <img src="Desktop/projects/frontend-projects-A/project1-FinDashboard/FinDashboard/src/assets/icons/moon.png" />
                </span>
            </div>
        </section>
        </>
    )
}

export default navbar;