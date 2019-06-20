import React, {useContext} from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

//dica: usar sempre o operador desconstrutor para os props!
const NoteList = () => {
    const {notes} = useContext(NotesContext)
    //tu importa o contexto e seleciona o que tu precisa utilizando o comando useContext

    return (notes.map((note) => ( 
        <Note key={note.title} note={note}/>
    )))
}

export {NoteList as default}