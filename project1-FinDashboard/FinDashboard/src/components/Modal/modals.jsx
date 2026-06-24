

function Modals(props) {
    return (
        <>
        <div className="modal-container">
            <div className='modal-header'>
                <p>
                    {props.title}
                </p>
                <span>
                    <a href={props.link}>
                        View all
                    </a>
                </span>
            </div>
            {props.summary && <div className="modal-extras">{props.summary}</div>}
            <div className="modal-body">
                {props.face}
            </div>
        </div>
        </>

    )
}

export default Modals;