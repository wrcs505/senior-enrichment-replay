import React from 'react';

export default (props) => {
    let craft = props.craft;
    return (
        <div key={craft.id}>
            <h2>MODEL: {craft.model} YEAR: {craft.year}</h2>
            <img src={craft.image_url} /> 
        </div>
    )
}
