import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const OneComponent = () => {

    const [category, setcategory] = useState(['Betty la Fea']);

     const addCategory = (e) =>{
        if(category.includes(e))return;
        setcategory([e, ...category]); 
    } 

    return (
        <>
            <h1 className="text-center">Multi Gifs </h1>
            <h4 className="text-center">Encuentra los Gifs mas divertidos de tus personajes favoritos.</h4>
            <br/>
            <br/>
            <AddCategory onNewCategory={e => addCategory(e)} />
           
            <br/>
                {category.map( (categories) =>(                    
                    <GifGrid key= {categories} category={categories}/>

               ) )}
                
            
        </>
    ); 
}

export default OneComponent;


/*7OMjqlruRw4ZTU9XdmfbVx6cploorZzC*/