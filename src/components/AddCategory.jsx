import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const handleChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length <= 1)return;       
        onNewCategory(inputValue.trim());    
        setinputValue('');
    }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
    <input 
    type="text"
    placeholder='Busca tu gifs favorito'
    value={inputValue}
    onChange={handleChange}
     />
    </form>
  )
}
