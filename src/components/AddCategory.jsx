import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
    <form >
    <input 
    type="text"
    placeholder='Busca tu gifs favorito'
    value={inputValue}
    onChange={handleChange}
     /> &nbsp;
    <button type="button" onClick={handleSubmit} class="btn btn-lg btn-warning buttonOne"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  )
}
