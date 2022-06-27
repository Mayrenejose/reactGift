

 export const getGif = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7OMjqlruRw4ZTU9XdmfbVx6cploorZzC&q=${category}&limit=4`;
    const answer= await fetch(url);
    const { data } = await answer.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return  gifs;        
}