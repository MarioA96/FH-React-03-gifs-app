import { useState } from "react";

export const useCounter = ( initialValue: number = 10 ) => {
    const [counter, setCounter] = useState(initialValue);
    
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubract = () => {
        // Esta es otra forma de actualizar el estado cuando depende del estado anterior
        setCounter(prevState => prevState - 1);
    }
    const handleReset = () => {
        setCounter(initialValue);
    }

    return {
        //Properties / Values
        counter,

        //Methods / Actions
        handleAdd,
        handleSubract,
        handleReset
    }
}
