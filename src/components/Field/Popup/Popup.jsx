import React from 'react';

 const Popup = (props) => {
     return (
         <div>
             <h1>{`Your result: ${props.movesCounter} moves`}</h1>
         </div>
     )
 };

 export default Popup;
