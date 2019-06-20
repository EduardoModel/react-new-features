const notesReducer = (state, action) => {
    switch(action.type){
        case 'POPULATE_NOTES':
            return action.notes

        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)

        case 'ADD_NOTE':
            return [...state, {title: action.title, body:action.body}]

        default:
            return state
    }
}

export { notesReducer as default }