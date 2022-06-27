import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);
    
    const getImages = async () => {
        const newImages = await getGif(category);
        setimages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])

    return (
        <>
            <h3>{category}:</h3>
            <br/>
            <div className='card-grid'>
                {images.map(data => (
                    <GifItem 
                    key={data.id}
                    title={data.title} 
                    url={data.url}
                    />                    
                ))}
            </div>
        </>
    )
}
