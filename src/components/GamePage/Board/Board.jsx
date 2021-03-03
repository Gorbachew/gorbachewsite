import React from 'react';
import '../Board/Board.sass';
import Square from '../Square/Square';

const Board = (props) => {
 
    const renderSuare = (i) => {
        return (
            <Square 
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className='board'>
                <div className='board-row'>
                    { renderSuare(0) }
                    { renderSuare(1) }
                    { renderSuare(2) }
                </div>
                <div className='board-row'>
                    { renderSuare(3) }
                    { renderSuare(4) }
                    { renderSuare(5) }
                </div>
                <div className='board-row'>
                    { renderSuare(6) }
                    { renderSuare(7) }
                    { renderSuare(8) }
                </div>
            </div>
        </div>

    );
}

export default Board;