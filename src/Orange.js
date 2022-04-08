import React from 'react';




function Fruit({ name, picture, rating }){ 
    return(
        <div>
            <h2>I like { name }</h2>;
            <h4>{rating} / 5.0</h4>
            <img src={picture} width="300" alt={name} />
        </div>
    ) 
}



export default Fruit;