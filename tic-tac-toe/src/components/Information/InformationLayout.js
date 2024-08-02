import styles from './Information.module.css'
import PropTypes from "prop-types";
import {store} from "../../store";
import {useEffect} from "react";

export const InformationLayout = () => {
    const stateRed = store.getState()
    console.log(stateRed)
    const {field, currentPlayer, isGameEnded, isDraw} = stateRed;
    useEffect(() => {
        console.log(stateRed, 'useff')
    }, [currentPlayer])



    return (
        <div className={styles.information}>
            { isDraw === true && 'Ничья' }
            { isDraw === false && isGameEnded === true && `Победа: ${currentPlayer}`}
            { isDraw === false && isGameEnded === false && `Ходит: ${currentPlayer}`}
        </div>
    )
}