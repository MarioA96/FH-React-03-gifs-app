import { mockGifs } from "./mock-data/gifs.mock"

import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"
import { useState } from "react"

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z','saitama']);

    const handleTermClicked = (term: string) => {
        console.log(term);
    }

    const handleSearch = (query: string = "") => {

        query = query.trim().toLowerCase();
        
        if(query.length === 0) return ;

        if(previousTerms.includes(query)) return ;

        setPreviousTerms( [query, ...previousTerms].splice(0,7) );
        // if(query !== ""){
        //     if(query in previousTerms) return ;

        //     if(previousTerms.length < 8){
        //         query = query.toUpperCase();
        //         query = query.trim();
        //         setPreviousTerms([query, ...previousTerms]);
        //     } else {
        //         return ;
        //     }
        // } else {
        //     return ;
        // }
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>

            {/* Search */}
            <SearchBar 
                    placeholder="Busca lo que quieras"
                    onQuery={handleSearch}
            />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={ handleTermClicked }/>

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
