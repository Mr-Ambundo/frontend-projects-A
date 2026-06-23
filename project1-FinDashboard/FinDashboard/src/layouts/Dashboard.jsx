import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Overview from "../features/overview/Overview";

function dashboard() {
    return (
        <>
            <div className="navbar-dash">
                <Navbar />
            </div>
            <div className="body-dash">
                <Overview/>
            </div>
            <div className="sidebar-dash">
                <Sidebar />
            </div>
            
        </>
    )
}


export default dashboard;