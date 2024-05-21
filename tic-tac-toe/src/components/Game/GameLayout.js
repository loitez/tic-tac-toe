import {FieldContainer} from '../Field/FieldContainer';
import {InformationContainer} from '../Information/InformationContainer'
import styles from './Game.module.css'
import PropTypes from 'prop-types';

export const GameLayout = (props) => {
    function startOver() {
        props.setField([
            '', '', '',
            '', '', '',
            '', '', '',
        ])
        props.setIsDraw(false)
        props.setIsGameEnded(false)
        props.setCurrentPlayer('Х')
    }
    return (
        <div className={styles.gameWrapper}>
            <InformationContainer
                currentPlayer={props.currentPlayer}
                setCurrentPlayer={props.setCurrentPlayer}
                isGameEnded={props.isGameEnded}
                setGameEnded={props.setIsGameEnded}
                isDraw={props.isDraw}>
                setIsDraw={props.setIsDraw}
            </InformationContainer>
            <button className={styles.startOverButton} onClick={startOver}>Начать заново</button>
            <FieldContainer {...props}/>
        </div>
    );
}

GameLayout.propTypes = {
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    isGameEnded: PropTypes.bool,
    setIsGameEnded: PropTypes.func,
    isDraw: PropTypes.bool,
    setIsDraw: PropTypes.func,
    field: PropTypes.array,
    setField: PropTypes.func
}