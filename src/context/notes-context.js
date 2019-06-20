import React from 'react'

//Tem que ser fornecido no componente que provê os recursos e
//nos componentes que se utlizam destes recursos!
const NotesContext = React.createContext()

export {NotesContext as default}

//No final o context é muito similar ao Redux!