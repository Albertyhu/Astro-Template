import usePagination from "../../hooks/usePagination.ts"; 
//import { DOTS } from "../../util/dots.js"
import type { UsePaginationType } from "@/util/interface.tsx";

const RenderPagination = (props : UsePaginationType) =>{
    const {pageSize, totalCount, currentPage} = props; 
    const array = usePagination({currentPage, totalCount, pageSize})
    console.log("array: ", array)
    return(
        <div
        id="PaginationContainer"
        class = "block list-none text-center"
        >
            <li
                id="leftArrow"
                class = "PaginatedListItem"
            >&#706;</li>
            <li
                id="rightArrow"
                class = "PaginatedListItem"
            >&#707;</li>
        </div>
    )
}
export default RenderPagination; 