import {useState, useEffect} from 'preact/hooks'; 
import type React from 'react';
import type { ChangeEvent } from 'react';
import RenderRecentSearch from './recentSearches';
const SearchInput = () =>{
    const [query, setQuery] = useState<string>("")
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setQuery(event.target?.value); 
    }
    const submitSearch = () =>{
        localStorage.setItem("searchHistory", query)
        window.location.href = `/blog/${query}`
    }
    useEffect(()=>{
        console.log("fired")
    },[query])

    return(
        <>
            <div
                className = "flex flex-row"
            >
                <div
                    id = 'QueryWrapper'
                    className = "flex bg-[#ffffff] rounded-lg mx-auto w-full border-2 border-black mr-5"
                >
                    <input 
                        type = "text"
                        placeholder = "Type here to search a blog post"
                        value = {query}
                        id="QueryInput"
                        className = "rounded-lg w-full px-5"
                        onChange={onChangeHandler}
                    />
                </div>
                <button
                    type="button"
                    id = "SearchButton"
                    className = "btn-primary"
                    onClick ={submitSearch}
                >Search</button>
            </div>
            <RenderRecentSearch query = {query} setQuery={setQuery} />
        </>
    )
}

export default SearchInput; 