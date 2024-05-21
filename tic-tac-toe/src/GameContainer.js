import {GameLayout} from "./components/Game/GameLayout";
import {useState} from "react";



export const GameContainer = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [isDraw, setIsDraw] = useState(false)
    const [field, setField] = useState([
        '', '', '',
        '', '', '',
        '', '', '',
    ])





    return (
      <GameLayout
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          field={field}
          setField={setField}
      />
    );
}