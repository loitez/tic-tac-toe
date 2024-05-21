import styles from './Information.module.css'
import PropTypes from "prop-types";

export const InformationLayout = (props) => {
    return (
        <div className={styles.information}>
            {
                props.isDraw === true && 'Ничья'
            }
            {
                props.isDraw === false && props.isGameEnded === true && `Победа: ${props.currentPlayer}`
            }
            {
                props.isDraw === false && props.isGameEnded === false && `Ходит: ${props.currentPlayer}`
            }
        </div>
    )
}

InformationLayout.propTypes = {
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    isGameEnded: PropTypes.bool,
    setIsGameEnded: PropTypes.func,
    isDraw: PropTypes.bool,
    setIsDraw: PropTypes.func
}