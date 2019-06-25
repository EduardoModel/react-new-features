import React, {useContext} from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'
import useClickCounter from '../hooks/useClickCounter'


const Note = ({note}) => {
    const {dispatch} = useContext(NotesContext) 
    const clicks = useClickCounter()
    const position = useMousePosition()

    // useEffect(() => {
    //     console.log('Setting up effect!')

    //     //retornar uma função do useEffect, funciona como a função
    //     //componentDidUnmount! (cleaning function)
    //     return(() => {
    //         console.log('Cleaning up Effect!')
    //     })
    // }, [])

    return(
        //Como o obj key ja foi definido acima, não há a necessidade de definí-lo novamente
        <div>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <p>{position.x}, {position.y}</p>
                    <button onClick={() => dispatch({type: 'REMOVE_NOTE', title:note.title})}>X</button>
                    <p>Clicks: {clicks}</p>
        </div>
    )
}

export {Note as default}