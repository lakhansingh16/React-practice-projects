import React from "react";

const List = (props) => {
    return (
        <>
            <div className="person">
                <img src={props.image}></img>
                <section>
                    <h4>{props.name}</h4>
                    <p>{props.age} years old</p>
                </section>
            </div>
        </>
    );
};

export default List;
