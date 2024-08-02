export const setCell = (id, currentPlayer) => {
    return {
        type: 'SET_CELL_CONTENT',
        payload: { id: id, currentPlayer: currentPlayer }
    }
}