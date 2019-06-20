import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import NoteApp from './components/NoteApp'

// React hook é uma função que lhe permite adicionar estados em um
// Stateless component ou life cycle methods
// functional components

//Enquanto em uma classe, sempre tinhamos um objeto com os atributos
//Com hooks, tu pode ter só um atributo sozinho que guarda a informação
// const App = (props) => {
//     //primeiro atributo é o estado e o segundo é a função responsável por modificar o estado
//     //os colchetes são para desconstruir o retorno da função, igual ao utilizado para desconstruir atributos de uma classe!
//     const [count, setCount] = useState(props.count)
//     //O estado inicial do useState tmb pode ser um obj!
//     //o useState gera um array, por isso se desconstrói desta forma
//     const [text, setText] = useState('')
//     //Obs.: utiliza-se várias chamadas de setState, pq se for utilizar só uma
//     //toda vez que tu for atualizar o estado, ele sobreescreve a informação anterior
//     //sendo assim, necessário o uso do spread operator (...state, )
    
//     //É uma combinação de componentDidMount e componentDidUpdate
//     //após o callback pode adicionar as variáveis que ativam o useEffect
//     //para realizar determinadas atualizações somente quando o necessário 
//     useEffect(() => {
//         console.log('useEffect ran')
//         document.title = count
//     }, [count])
//     //e o use effect pode ser chamado diversas vezes dentro do 
//     //componente
//     useEffect(() => {
//         console.log('isso só deve aparecer 1 vez')
//     }, []) //função funciona igual componentDidMount!!!

//     return (
//         <div>
//             <p>O {text || 'contador'} atual é {count}</p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(props.count)}>Reset</button>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <input value={text} onChange={(e) => {setText(e.target.value)}}/>
//         </div>
//     )
// }

//Props default para quando não pe fornecido para o componente
// App.defaultProps = {
//     count: 0
// }


ReactDOM.render(<NoteApp/>, document.getElementById('root'));
//ReactDOM.render(<App count={0}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
