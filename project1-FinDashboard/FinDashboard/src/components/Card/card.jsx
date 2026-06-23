import React from "react";

function Card(props){

    return (
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
                <img src="#" alt="Wallet-icon" />
            </div>
        </>
    )
}

export default Card;
///imported by overview