

function Modals(props) {
    return (
        <>
            <div className='modalHeader'>
                <h1>
                    props.title
                </h1>
                <span>
                    <a href={props.link}>
                        View all
                    </a>
                </span>
            </div>
            {props.summary && <div>{props.summary}</div>}
            <div className="modalBody">
                props.face
            </div>
        </>

    )
}

export default Modals;