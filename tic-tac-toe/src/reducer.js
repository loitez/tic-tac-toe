export const initialState = {
    field: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    isGameOver: false,
    isDraw: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_GAME': {
            return initialState
        }
        case 'SET_CELL_CONTENT': {
            const updatedField = [...state.field]
            updatedField[action.payload.id] = action.payload.currentPlayer
            return {
                ...state,
                field: updatedField
            }
        }
        case 'SET_NEXT_PLAYER': {
            return {
                ...state,
                currentPlayer: action.payload
            }
        }
        case 'SET_DRAW': {
            return {
                ...state,
                isDraw: true
            }
        }
        case 'SET_GAME_OVER': {
            return {
                ...state,
                isGameOver: true
            }
        }
        default:
            return state
    }
}