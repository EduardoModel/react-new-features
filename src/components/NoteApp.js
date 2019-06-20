// Com hooks tu pode transformar um stateless component em um 
// componente com estado, sem ter que fazer a conversão do componente 
// para uma classe!
import React,  { useState, useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

// useEffect funciona como os métodos componentDidMount e componentDidUpdate
// mas pode ser modificado on the fly para somente ser executado caso 
// determinados parâmetros sejam modificados, por exemplo o atributo title.
const NoteApp = () => {
    //const [notes, setNotes] = useState([])
    //O useReducer tu usa pra fazer a manipulação de objetos mais complexos
    //evitando que a lógica pesada fique no componente!
    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        if(notes){
            dispatch({ type: 'POPULATE_NOTES', notes})
        }    
        //setNotes(JSON.parse(localStorage.getItem("notes") || []))
    }, [])

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]) // -> dependências do useEffect



    return(
        //Com essa tag, pode-se criar um contexto para todos os
        //componentes que estão dentro deste escopo!
        ///No argumento value tu provê as variáveis que tu queira
        //que os demais componentes tenham acesso
        <NotesContext.Provider value={{notes, dispatch}}>
            <h1>Notas</h1>
            <NoteList />
            <p>Adicionar nota</p>
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export {NoteApp as default}