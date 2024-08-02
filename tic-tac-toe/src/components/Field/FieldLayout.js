import styles from './Field.module.css'
import {useSelector, useDispatch} from "react-redux";
import {selectCurrentPlayer, selectIsGameOver, selectField} from "../../selectors";
import { setCell, setNextPlayer, SET_DRAW, SET_GAME_OVER } from '../../actions';

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export const FieldLayout = () => {
    const currentPlayer = useSelector(selectCurrentPlayer);
    const isGameOver = useSelector(selectIsGameOver);
    const field = useSelector(selectField);
    const dispatch = useDispatch();

    function setCellContent(item, idx) {
        let updatedField = Array.from(field)

        if (item.length) {
            return
        } else if (!isGameOver) {
            dispatch(setCell(idx, currentPlayer))
            updatedField[idx] = currentPlayer

        }

        let winCheck = WIN_PATTERNS.some((pattern) => {
            return [...pattern].every((item) => updatedField[item] === currentPlayer)
        })

        let isFieldFilled = !updatedField.some((item) => item === '')

        if (winCheck) {
            dispatch(SET_GAME_OVER)
        } else if (isFieldFilled) {
            dispatch(SET_DRAW)
        } else if (!isGameOver) {
            let nextPlayer;
            currentPlayer === 'X' ? nextPlayer = '0' : nextPlayer = 'X'
            dispatch(setNextPlayer(nextPlayer))
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