import React from 'react';
import '../Square/Square.sass';

const Squere = (props) => {

    return (
        <button className='square' onClick={() => props.onClick()} >
            {props.value}
        </button>
    );
}

export default Squere;