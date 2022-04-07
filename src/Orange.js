import React from 'react';




function Fruit({ name, picture }){ 
    return(
        <div>
            <h1>I like { name }</h1>;
            <img src={picture} width="300" alt={name} />
        </div>
    ) 
}



export default Fruit;