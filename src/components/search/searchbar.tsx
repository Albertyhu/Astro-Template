import {useState} from 'preact/hooks'; 

const SearchBar = () =>{
    const [query, setQuery] = useState("")
return(
    <div
    >   
        <input 
            type = "text"
            placeholder = "Search"
        />
    </div>
)
}

export default SearchBar; 