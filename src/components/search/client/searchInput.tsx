import {useState, useEffect} from 'react'; 
import type React from 'react';
import RenderRecentSearch from './recentSearches';

const SearchInput = () =>{
    const [query, setQuery] = useState<string>(""); 
    const [historyResults, setSearchHistory ] = useState<Array<string>>([])
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setQuery(event.target?.value); 
    }
    const submitSearch = () =>{
        const data = localStorage.getItem("searchHistory")
        var arr = data ? JSON.parse(data) : [];
        if(query != "" ){
            arr.push(query)
            localStorage.setItem("searchHistory", JSON.stringify(arr))
        }
        //window.location.href = `/blog/${query}`
    }

    useEffect(()=>{
        if(query && query.length > 0){
            SearchHistory(query, setSearchHistory)
        }
        if(query.length === 0){
            setSearchHistory([])
        }
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
                        onChange={(event)=>onChangeHandler(event)}
                    />
                </div>
                <button
                    type="button"
                    id = "SearchButton"
                    className = "btn-primary"
                    onClick ={submitSearch}
                >Search</button>
            </div>
            {historyResults && historyResults.length > 0 && 
                <RenderRecentSearch 
                    setQuery = {setQuery}
                    historyResults ={historyResults}
                    setSearchHistory={setSearchHistory}
                />
            }
        </>
    )
}

export default SearchInput; 


const SearchHistory = (query: string, setSearchHistory: (c:Array<string>)=>void) =>{
    const jsonData = localStorage.getItem("searchHistory")
    const searchHistory : Array<string> = jsonData ? JSON.parse(jsonData) : [];
    var arr = searchHistory.filter(item => item.includes(query))
    setSearchHistory(arr); 
}
