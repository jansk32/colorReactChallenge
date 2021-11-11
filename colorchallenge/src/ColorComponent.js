import React, {useEffect} from 'react';

function ColorComponent (props) {
    if (props.styling.index % 10 === 0 ){
        return (
            <div>
               <div style={props.styling.style}></div><br /> 
            </div>
        )
    }else{
        <div style={props.styling.style}></div>
    }
}

export default ColorComponent;