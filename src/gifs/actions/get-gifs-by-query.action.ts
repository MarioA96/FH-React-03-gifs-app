import { giphyApi } from "../api/giphy.api";

import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from '../interfaces/gif.interface'

export const getGifsByQuery = async(query: string): Promise<Gif[]> => {
    
    const response = await giphyApi<GiphyResponse>(
        '/search',
        {
            params: {
                q: query,
                limit: 10,
                // Below from giphyApi
                // lang: 'es',
                // api_key: import.meta.env.VITE_GIPHY_API_KEY,
                // api_key: 'oYQa7B95z3geWHQdq87i2AO4IKEHMiky'
            }
        }
    );

    return response.data.data.map( (gif)=>({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }) );

}