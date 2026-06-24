

function Modals(props) {
    return (
        <>
        <div className="modal-container">
            <div className='modalHeader'>
                <h3>
                    {props.title}
                </h3>
                <span>
                    <a href={props.link}>
                        View all
                    </a>
                </span>
            </div>
            {props.summary && <div>{props.summary}</div>}
            <div className="modalBody">
                {props.face}
            </div>
        </div>
        </>

    )
}

export default Modals;