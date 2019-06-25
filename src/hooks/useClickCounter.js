import {useState, useEffect} from 'react'

const useClickCounter = () => {
    const [clicks, setClicks] = useState(0)

    const handleMouseClick = (e) => {
        console.log(e)
        console.log(clicks)
        setClicks(clicks+1)
    }

    useEffect(() => {
        document.addEventListener("click", handleMouseClick)
        return () => {
            document.removeEventListener("click", handleMouseClick)
        }
    }, [clicks])

    return clicks
}

export {useClickCounter as default}