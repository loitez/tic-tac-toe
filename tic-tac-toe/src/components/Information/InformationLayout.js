import styles from './Information.module.css'
import {useSelector} from "react-redux";
import {selectCurrentPlayer, selectIsDraw, selectIsGameOver} from "../../selectors";

export const InformationLayout = () => {
    const currentPlayer = useSelector(selectCurrentPlayer);
    const isDraw = useSelector(selectIsDraw);
    const isGameOver = useSelector(selectIsGameOver);

    return (
        <div className={styles.information}>
            { isDraw === true && 'Ничья' }
            { isDraw === false && isGameOver === true && `Победа: ${currentPlayer}`}
            { isDraw === false && isGameOver === false && `Ходит: ${currentPlayer}`}
        </div>
    )
}