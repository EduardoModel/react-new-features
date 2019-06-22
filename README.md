This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Small project to learn the new React feature: Hooks

These new features allow you to have a state in a stateless component, making it possible without turning the component in a class-based component.

# The new commands are: 
## useState
This is a function which the argument is the type you want to create the state and the return is the state itself (can also call as a 'variable') and the setter function(or update function), which you call whenever you need to change the state.

### Example
```javascript
const App = () => {(
    //Here we track a state which contains only a string
    const [name, setName] = useState('')
    // Obs.: See we utilize the brackets to deconstruct the returned object from the function call!
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
)}
```
## useEffect
This function is called whenever the component suffers a change, for example, when a button is pressed. These function takes a callback function as an argument and executes, as sayed before, every time the component re-renders. But you can add a second argument, which is the tracking state (variable) and only fires the function when these arguments change. 
This function can also have similar functionality as the functions: componentDidMount, componentDidUpdate, and componentDidUnmount.

### Example
```javascript
//Case without a second argument, that means the function always will run when the component suffers a change
const App = () => {(
    const [name, setName] = useState('')
    useEffect(() => {
        setName(name + '!')
    })
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
)}

//Case with a void second argument, which works as a function "componentDidMount", executing only once
const App = () => {(
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('I\'m aliveeeee')
    }, [])
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
)}

//Case with a second argument, which runs only when the argument changes
const App = () => {(
    const [name, setName] = useState('')
    useEffect(() => {
        setName(name + '!')
    }, [name])
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
)}

//Case with a void second argument, which runs only when the argument changes and a return statement, that runs when the component will be unmounted, working as a function "componentDidUnmout", can say the function like that, works like a constructor and a destructor in the same statement (C++)
const App = () => {(
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('I\'m aliveeeee')
        return () => {
            console.log('I don\'t wanna dieeeeee')
        }
    }, [])
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
)}
```

##useReducer
The function useReducer allow us to have a reducer, just like Redux, but without the library itself. The functionality is the same, allowing us to access a state which is shared with all the child components of a specific component, making the rest of the components reusable and flexibles.
The principle is simple: first, we create a context of a state we want to share. Second, we make a reducer, equal to the Redux. Then we need to wrap all the children's components who need to access the context with the Context.Provider tag. In the end, we only need to use the context created and utilize the dispatch function to manipulate the objects in the main state.
### Example
```javascript
//We need to declare a Context first
const NamesContext = React.createContext()

//And make a Reducer
const namesReducer = (state, action) => {
    switch(action.type){
        case 'ADD_NAME':
            return [...state, {name: action.name}]

        case 'REMOVE_NAME':
            return state.filter((name) => name !== action.name)

        case 'SEARCH_NAME':
            return state.find({name: action.name})

        default:
            return state
    }
}

//With the Context we create the Reducer for the App and making the new state available to all childrens components
const App = () => {(
    const [names, dispatch] = useReducer(NamesReducer, [])
    return (
        <NamesContext.Provider value={{names, dispatch}}>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <Component1 />
            <Component2 />
        </NamesContext.Provider>
    )
)}

//The Component2 renders all objects inside the names state
const Component2 = () => {
    const {names} = useContext(NamesContext)
    return (names.map((name) => (
        <p>Component 1 is with his fellow {name}!</p>
    )))
}

//The Component2 is responsable for adding, removing and searching names.
const Component2 = () => {
    const [dispatch] = useContext(NamesReducer)
    const [nameSearch, setNameSearch] = useState('')
    const [nameDelete, setNameDelete] = useState('')    
    const [nameAdd, setNameAdd] = useState('')

    const searchName = () => {
        alert(dispatch({type: 'SEARCH_NAME', name: nameSearch}))
        setNameSearch('')
    }

    const deleteName = () => {
        dispatch({type: 'DELETE_NAME', name: nameDelete})
        alert(`Name ${nameDelete} deleted!`)
        setNameDeletet('')
    }

    const addName = () => {
        dispatch({type: 'ADD_NAME', name: nameAdd})
        alert(`Name ${nameAdd} added!`)
        setNameAdd('')
    }

    return (
        <div>
        <input placeholder='Name to search...' onChange={(e) => setNameSearch(e.target.value)}/>
        <button onClick={searchName}>Search</button>

        <input placeholder='Name to delete...' onChange={(e) => setNameDelete(e.target.value)}/>
        <button onClick={deleteName}>Delete</button>
    
        <input placeholder='Name to add...' onChange={(e) => setNameAdd(e.target.value)}/>
        <button onClick={searchName}>Add</button>

        </div>
    )
}
```