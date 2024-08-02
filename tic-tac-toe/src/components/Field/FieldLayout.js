import styles from './Field.module.css'
import PropTypes from "prop-types";
import { store } from '../../store'

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export const FieldLayout = () => {

    const stateRed = store.getState()
    console.log(stateRed)
    const {field, currentPlayer, isGameEnded, isDraw} = stateRed;

    function setCellContent(item, idx) {
        let updatedField = Array.from(field)

        if (item.length) {
            return
        } else if (!isGameEnded) {
            console.log('dispatching')
            store.dispatch({type: 'SET_CELL_CONTENT', payload: {
                ...stateRed,
                currentPlayer: currentPlayer,
                id: idx
            }})

            updatedField[idx] = currentPlayer

        }


        let winCheck = WIN_PATTERNS.some((pattern) => {
            return [...pattern].every((item) => updatedField[item] === currentPlayer)
        })
        let isFieldFilled = !updatedField.some((item) => item === '')
        if (winCheck) {
            store.dispatch({type: 'SET_GAME_END', payload: {
                    ...stateRed,
                    isGameEnded: true
                }})
        } else if (isFieldFilled) {
            store.dispatch({type: 'SET_DRAW', payload: {
                    ...stateRed,
                    isDraw: true
            }})
        } else if (!isGameEnded) {
            let nextPlayer;
            currentPlayer === 'X' ? nextPlayer = '0' : nextPlayer = 'X'
            store.dispatch({type: 'SET_NEXT_PLAYER', payload: {
                    ...stateRed,
                    currentPlayer: nextPlayer
                }})
        }

    }

    return (
        <ul className={styles.fieldWrapper}>
            {field.map((item, idx) => (
                <li className={styles.fieldCell} key={idx} onClick={() => setCellContent(item, idx)}>{item}</li>
            ))}
        </ul>
    )
}