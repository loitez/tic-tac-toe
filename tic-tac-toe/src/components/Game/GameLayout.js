import {FieldContainer} from '../Field/FieldContainer';
import {InformationContainer} from '../Information/InformationContainer'
import styles from './Game.module.css'
import { useDispatch } from 'react-redux';
import { RESET_GAME } from "../../actions";

export const GameLayout = () => {
    const dispatch = useDispatch()

    function startOver() {
        dispatch(RESET_GAME);
    }
    return (
        <div className={styles.gameWrapper}>
            <InformationContainer />
            <button className={styles.startOverButton} onClick={startOver}>Начать заново</button>
            <FieldContainer/>
        </div>
    );
}
