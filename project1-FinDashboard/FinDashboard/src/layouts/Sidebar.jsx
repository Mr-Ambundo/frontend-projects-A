//import avatar from "../components/Avatar/avatar"
import '../index.css';

function sidebar(){
    return(
        
        <section className="sidebar">
            <div className="sidebar-header">
                <span className="logo-title">
                    <img src="#" className='sidebar-icon'/>
                    FinTrack
                </span>
                <span className="menu-icon">
                    <img src="#" className='sidebar-icon'/>
                </span>
            </div>
            <div className="overview-sidebar">
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    <p>Overview</p>
                </span>
            </div>
            <p className='sidebar-titles'>
                        Menu
            </p>
            <div className="menu-sidebar">
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Transactions
                </span>
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Budget
                </span>
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Investments
                </span>
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Goals
                </span>
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Reports
                </span>
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Taxes
                </span>
            </div>
            <p className='sidebar-titles'>
                        Tools
                    </p>
            <div className="tools-sidebar">
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Export Data
                </span>
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Import Data
                </span>
                <span className="sidebar-nav">
                    <img src="#" className='sidebar-icon'/>
                    Settings
                </span>
            </div>
            <div className="footer-sidebar">
                <div className="advert-cta">
                    <p>
                        Upgrade to pro
                    </p>
                    <p>
                        Unlock advanced analytics, custom categories and priority support.
                    </p>
                    <span className="upgradebtn">
                        Upgrade now
                    </span>
                </div>
            </div>
        </section>
    )
}

export default sidebar;