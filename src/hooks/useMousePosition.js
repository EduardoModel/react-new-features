import {useState, useEffect} from 'react'

//Convenção de nomenclatura
const useMousePosition = () => {
    //Quando um conjunto de informações mudam juntas
    //é uma boa pratica agregá-las em um objeto!
    const [position, setPosition] = useState({x: 0, y: 0})

    const handleMouseMove = (e) => {
        setPosition({x: e.pageX, y: e.pageY})
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return position
}

export {useMousePosition as default}