//import avatar from "../components/Avatar/avatar"


function sidebar(){
    return(
        <>
        <section>
            <div className="sidebar-header">
                <span className="logo-title">
                    <img src="#" alt="Logo" />
                    FinTrack
                </span>
                <span className="menu-icon">
                    <img src="#" alt="Menu" />
                </span>
            </div>
            <div className="overview-sidebar">
                <span className="sidebar-nav">
                    <img src="#" alt="Home-icon" />
                    Overview
                </span>
            </div>
            <div className="menu-sidebar">
                <span className="sidebar-nav">
                    <img src="#" alt="Trans-icon" />
                    Transactions
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Budget-icon" />
                    Budget
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Investments-icon" />
                    Investments
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Goals-icon" />
                    Goals
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Reports-icon" />
                    Reports
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Taxes-icon" />
                    Taxes
                </span>
            </div>
            <div className="tools-sidebar">
                <span className="sidebar-nav">
                    <img src="#" alt="Export-icon" />
                    Export Data
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Import-icon" />
                    Import Data
                </span>s
                <span className="sidebar-nav">
                    <img src="#" alt="Settings-icon" />
                    Settings
                </span>
            </div>
            <div className="footer-sidebar">
                <div className="advert-cta">
                    <h1>
                        Upgrade to pro
                    </h1>
                    <p>
                        Unlock advanced analytics, custom categories and priority support.
                    </p>
                    <span className="upgradebtn">
                        Upgrade now
                    </span>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default sidebar;