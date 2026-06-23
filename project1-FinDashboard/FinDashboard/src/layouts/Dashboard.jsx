import navbar from "./Navbar";
import footer from "./Footer";
import sidebar from "./Sidebar";


function dashboard() {
    return (
        <>
            <div className="navbar-dash">
                <navbar />
            </div>
            <div>
                `conditionally render the body elements/features here`
            </div>
            <div className="sidebar-dash">
                <sidebar />
            </div>
            <div className="footer-dash">
                <footer />
            </div>
        </>
    )
}


export default dashboard;