import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}  >
                <img src={props.image} className="card-img-top" alt="Nature Images..." width="100
                %" height="200px"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.paragraph}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </>
    );

}

export default Card;