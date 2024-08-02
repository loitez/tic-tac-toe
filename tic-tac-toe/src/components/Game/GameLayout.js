import {FieldContainer} from '../Field/FieldContainer';
import {InformationContainer} from '../Information/InformationContainer'
import styles from './Game.module.css'
import PropTypes from 'prop-types';
import { store } from '../../store'

export const GameLayout = () => {

    function startOver() {
        store.dispatch({type: 'START_OVER'})
    }
    return (
        <div className={styles.gameWrapper}>
            <InformationContainer />
            <button className={styles.startOverButton} onClick={startOver}>Начать заново</button>
            <FieldContainer/>
        </div>
    );
}
