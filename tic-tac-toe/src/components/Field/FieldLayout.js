import styles from './Field.module.css'
import PropTypes from "prop-types";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export const FieldLayout = ({ field, setField, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw }) => {

    function setCellContent(item, idx) {
        let updatedField = Array.from(field)

        if (item.length) {
            return
        } else if (!isGameEnded) {
            updatedField[idx] = currentPlayer
            setField(updatedField)
        }


        let winCheck = WIN_PATTERNS.some((pattern) => {
            return [...pattern].every((item) => updatedField[item] === currentPlayer)
        })
        let isFieldFilled = !updatedField.some((item) => item === '')
        if (winCheck) {
            setIsGameEnded(true)
        } else if (isFieldFilled) {
            setIsDraw(true)
        } else if (!isGameEnded) {
            setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
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

FieldLayout.propTypes = {
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    isGameEnded: PropTypes.bool,
    setIsGameEnded: PropTypes.func,
    isDraw: PropTypes.bool,
    setIsDraw: PropTypes.func,
    field: PropTypes.array,
    setField: PropTypes.func
}