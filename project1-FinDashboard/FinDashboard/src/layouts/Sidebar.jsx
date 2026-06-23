import avatar from "../components/Avatar/avatar"


function sidebar(){
    return(
        <>
        <section>
            <div className="sidebar-header"></div>
            <div className="overview-sidebar"></div>
            <div className="menu-sidebar"></div>
            <div className="tools-siebar"></div>
            <div className="footer-sidebar"></div>
        </section>
        <avatar/>
        </>
    )
}