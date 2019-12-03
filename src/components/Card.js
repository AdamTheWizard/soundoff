import React from "react"

function Card(props) {
    return (
<a href={props.link}>
        <div className="card-container">
            <img src={props.artwork} />
            <h4 className="card-title">{props.title}</h4>
            <small>View more</small>
        </div>
            </a>

    )
}

export default Card