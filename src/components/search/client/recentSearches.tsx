import { useEffect, useState } from 'react'; 
import uuid from 'react-uuid';
interface RecentSearchType {
    setQuery: (c:string)=>void, 
    historyResults: Array<string>, 
    setSearchHistory:(c:Array<string>)=>void,
}

const RenderRecentSearch = (props : RecentSearchType) =>{
    const {
        setQuery, 
        historyResults, 
        setSearchHistory, 
    } = props; 

    return(
        <div
            className = "w-full h-fit py-10 bg-white z-10 mt-5"
            id = "HistoryResults"
        >
            <div
                className = "w-11/12 lg:w-8/12 mx-auto"
            >
                <div
                    id="HistoryWrapper"
                    className = "flex flex-col"
                >
                    <h3
                        className = "text-slate-400"
                    >Recent searches</h3>
                </div>
                <ul
                    className = "list-none list-indented"
                >
                    {historyResults && historyResults.length > 0 && 
                        historyResults.map((result,index) => 
                        <RenderItem 
                        historyResults={historyResults}
                        result = {result} 
                        setQuery = {setQuery} 
                        setSearchHistory={setSearchHistory}
                        index={index}
                        key={uuid()}
                        />)
                    }
                </ul>
            </div>
        </div>
    )
}

interface HistoryResultType {
    historyResults: Array<string>, 
    result: string,
    setQuery: (c : string)=>void, 
    setSearchHistory:(c:Array<string>)=>void,
    index: number, 
}

const RenderItem = ( props : HistoryResultType ) =>{
    const {
        historyResults, 
        result, 
        setQuery, 
        setSearchHistory, 
        index,
    } = props; 
    const deleteValue = () =>{
        var arr = historyResults; 
        arr.splice(index, 1)
        setSearchHistory(arr); 
        localStorage.setItem("searchHistory", JSON.stringify(arr))
    }
    return(
        <li
            className ="my-5 mx-auto cursor-pointer justify-between w-full flex"
        >
            <span
                className="hover:font-bold "
                onClick ={()=>setQuery(result)}
            >{result}</span>
            <span 
                className ="text-[#ff0000] hover:font-bold"
                onClick={deleteValue}
            >clear</span>
        </li>
    )
}



export default RenderRecentSearch; 