This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Small project to learn the new React feature: Hooks

These new features allow you to have a state in a stateless component, making it possible without turning the component in a class-based component.

# The new commands are: 
## useState()
This is a function which the argument is the type you want to create the state and the return is the state itself (can also call as a 'variable') and the setter function(or update function), which you call whenever you need to change the state.

### Example
```javascript
const App = () => {(
    const [name, setName] = useState('')
    // Obs.: See we utilize the brackets to deconstruct the returned object from the function call!
    <input value={name} onChange={(e) => setName(e.target.value)} />
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
    <input value={name} onChange={(e) => setName(e.target.value)} />
)}

//Case with a void second argument, which works as a function "componentDidMount", executing only once
const App = () => {(
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('I\'m aliveeeee')
    }, [])
    <input value={name} onChange={(e) => setName(e.target.value)} />
)}

//Case with a second argument, which runs only when the argument changes
const App = () => {(
    const [name, setName] = useState('')
    useEffect(() => {
        setName(name + '!')
    }, [name])
    <input value={name} onChange={(e) => setName(e.target.value)}/>
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
    <input value={name} onChange={(e) => setName(e.target.value)}/>
)}
```