//import avatar from "../components/Avatar/avatar"
import '../index.css';

function sidebar(){
    return(
        
        <section className="sidebar">
            <div className="sidebar-header">
                <span className="logo-title">
                    <img src="#" alt="L" />
                    FinTrack
                </span>
                <span className="menu-icon">
                    <img src="#" alt="M" />
                </span>
            </div>
            <div className="overview-sidebar">
                <span className="sidebar-nav">
                    <img src="#" alt="H-ic" />
                    Overview
                </span>
            </div>
            <p className='sidebar-titles'>
                        Menu
            </p>
            <div className="menu-sidebar">
                <span className="sidebar-nav">
                    <img src="#" alt="Tns-ic" />
                    Transactions
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Budget-icon" />
                    Budget
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="I-ic" />
                    Investments
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="G-ic" />
                    Goals
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="R-ic" />
                    Reports
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Ter-ic" />
                    Taxes
                </span>
            </div>
            <p className='sidebar-titles'>
                        Tools
                    </p>
            <div className="tools-sidebar">
                <span className="sidebar-nav">
                    <img src="#" alt="Exp-ic" />
                    Export Data
                </span>
                <span className="sidebar-nav">
                    <img src="#" alt="Imp-ic" />
                    Import Data
                </span>s
                <span className="sidebar-nav">
                    <img src="#" alt="Set-ic" />
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