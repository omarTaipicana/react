import React from 'react';

const Card = ({item, item1,item2,item3,item4}) => {
    const click = () => alert("FreeTime")
    
  
  return (
    <div onClick={click} >
            <h3>{item}</h3>
            <ul>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
                <li>{item4}</li>
            </ul>
        </div>
    );
};

export default Card;
