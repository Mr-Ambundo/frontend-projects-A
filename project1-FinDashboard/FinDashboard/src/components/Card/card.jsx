import React from "react";

export default card  = (props) => {

    // code for setting and describing the state of any reuseable card.

    return(
        <>
        <div className="card-summary">
        <p>
           {props.title}
        </p>
        <span>
            {props.figures}
        </span>
        <p>
            {props.summary}
        </p>
        </div>
        <div className="card-icon">
            `look into this in a minute`
            <img src="" alt="Wallet-icon" />
        </div>
        </>
    )
}

///imported by overview