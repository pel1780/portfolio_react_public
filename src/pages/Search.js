import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Search = ({ travelData }) => {
    const navigate = useNavigate();

    const [input, setInput] = useState('원하는 장소를 입력해보세요');
    const [search, setSeach] = useState('');


    const searchHandler = e => {
        e.preventDefault();
        setSeach(input);
        navigate(`search/?q=${input}`)
    }

    const inputHandler = e => {
        const { value } = e.target;
        setInput(value);
    }


    return (
        <form onSubmit={searchHandler}>
            <input type="text" onChange={inputHandler} placeholder={input} />
            <button><BsSearch /></button>
        </form>
    )
}

export default Search;