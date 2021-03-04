import React, { useState, useEffect } from 'react';
import '../Game/Game.sass';
import Board from '../Board/Board';

const Game = () => {
    const [history, setHistory] = useState([{squares: Array(9).fill(null), step: ''}]);
    const [status, setStatus] = useState('');
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0); 
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
    }
    
    const handleClick = (i) => {
        const historyArr = history.slice(0, stepNumber + 1);
        const current = historyArr[stepNumber];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setStepNumber(history.length);
        setHistory(history.concat({squares: squares, step: xIsNext ? 'O' : 'X'}));
        setXIsNext(!xIsNext);
    }

    const current = history[stepNumber];
    const squares  = current.squares.slice();

    const moves = history.map((step, move) => {
        const desc = move ?
        `Ход ${move}, ходит: ${step.step}`:
        'К началу игры';
        return (
            <li key={move} className='game_moves-li'>
                <button className='game_moves-btn' onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner) {
            setStatus('Выиграл ' + winner);
        } else {
            setStatus('Следующий ход: ' + (xIsNext ? 'X' : 'O'));
        }
    }, [squares, xIsNext]);

    return (
       <div className='game'>
            <div className='status'>{status}</div>
           <div className='game_wrapper'>
                <div className='game_board'>
                    <Board 
                            squares={current.squares}
                            onClick={(i) => handleClick(i)}
                        />
                </div>
                <div id='moves-wrapper' className='game_moves-wrapper'>
                    <div>   
                        <div className='game_moves-scroll'> {moves} </div>
                    </div>
                </div>
           </div>
       </div>
    );
}

export default Game;