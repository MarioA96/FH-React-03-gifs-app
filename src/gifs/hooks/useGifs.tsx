import { useRef, useState } from "react";

import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";


export const useGifs = () => {
    
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const gifsCached = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async(term: string) => {
        if(gifsCached.current[term]){
            setGifs(gifsCached.current[term]);
            return ;
        }
        
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
        gifsCached.current[term] = gifs;
    }

    const handleSearch = async(query: string = "") => {
        query = query.trim().toLowerCase();
        
        if(query.length === 0) return ;
        if(previousTerms.includes(query)) return ;

        setPreviousTerms( [query, ...previousTerms].splice(0,8) );

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCached.current[query] = gifs;
        // console.log(gifsCached);
    }
    
    
    return {
        //attributes
        gifs,
        previousTerms,

        //methods
        setGifs,
        setPreviousTerms,
        handleTermClicked,
        handleSearch
    }
}
