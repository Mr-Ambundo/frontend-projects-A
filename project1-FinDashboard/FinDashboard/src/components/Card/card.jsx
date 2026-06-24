import React from "react";

function Card(props){

    return (
        <section className="cards-box">
            
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
                <img src="#" alt="W" />
            </div>
            
        </section>
    )
}

export default Card;
///imported by overview