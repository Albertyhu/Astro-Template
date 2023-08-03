import { useEffect, useState } from 'preact/hooks'; 
import { Icon } from 'astro-icon'
interface RecentSearchType {
    query: string, 
    setQuery: (c:string)=>void, 
}

const RenderRecentSearch = (props : RecentSearchType) =>{
    const {
        query,
        setQuery, 
    } = props; 
    const [historyResults, setSearchHistory ] = useState<Array<string>>([])
    const jsonData = localStorage.getItem("searchHistory")
    const searchHistory : Array<string> = jsonData ? JSON.parse(jsonData) : "";

    useEffect(()=>{
        if(query && query.length > 0){
            SearchHistory(query, setSearchHistory)
        }
        if(query.length === 0){
            setSearchHistory([])
        }
        console.log("fired")
    },[query])

    return(
        <div
            className = "z-10"
        >
            {historyResults && historyResults.length > 0 &&
                <div>
                    <div
                        className = "flex flex-col"
                    >
                        <Icon 
                            id="ScrollTopButton"
                            className = "mx-auto w-[3rem] h-[3rem] userselect-none"
                            name="mingcute:time-line" />
                        <h3
                            className = "bg-slate-300"
                        >Recent searches</h3>
                    </div>
                    <ul
                        className = "list-none list-indented"
                    >
                        {historyResults && historyResults.length > 0 && 
                            historyResults.map(result => <RenderItem result = {result} setQuery = {setQuery} />)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

interface HistoryResultType {
    result: string,
    setQuery: (c : string)=>void; 
}

const RenderItem = ( props : HistoryResultType ) =>{
    const {
        result, 
        setQuery, 
    } = props; 
    return(
        <li
            className ="my-10 mx-auto"
            onClick ={()=>setQuery(result)}
        >{result}</li>
    )
}

const SearchHistory = (query: string, setSearchHistory: (c:Array<string>)=>void) =>{
    const jsonData = localStorage.getItem("searchHistory")
    const searchHistory : Array<string> = jsonData ? JSON.parse(jsonData) : "";
    console.log("searchHistory: ", searchHistory)
    var arr = searchHistory.filter(item => item.includes(query))
    setSearchHistory(arr); 
}

export default RenderRecentSearch; 