import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({placeholder = "Buscar", onQuery}: Props) => {

    const [query, setQuery] = useState("");

    useEffect( () => {
        const timeoutId = setTimeout( ()=>{
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
        // setQuery("");
    }

    const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            handleSearch(); // Si esto lo aislamos y dejamos solo, no hay forma de controlar su emision
        }
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder={placeholder}
                value={ query }

                onChange={ (event)=>setQuery(event.target.value) }
                onKeyDown={ handleKeyDown }
            />
            <button onClick={ handleSearch }>Buscar</button>
        </div>
    )
}
