import { useMemo } from 'react'; 
import type {UsePaginationType } from "@/util/interface.tsx"; 
import { DOTS } from '@/util/dots.js'

//The function returns an array of pages used to render the pagination 
function usePagination({ currentPage, totalCount,  pageSize } : UsePaginationType) {
    //totalCount is the length of the array that contains all the blog posts 
    //pageSize is the number of items allowed to be displayed in a page
    //consecPage references the number of pages that are consecutive to the current page 
    //currentPage is the page number of the current page being displayed 
    const consecPage = 1; 
    const createRange = (first : number, last : number) : Array<number> => {
        var pageRange = [];
        for (var i = first; i <= last; i++) {
           pageRange.push(i)
        } 
        console.log("pageRange: " + pageRange)
        return pageRange; 
    } 

    //useMemo is used for efficiency and to cache the results of the Pagination to be used again if the dependencies don't change
    const Pagination = useMemo(() => {

        //Math.ceil is used to calculate total pages to include the remainder of the rows in the last page
        const totalPages = Math.ceil(totalCount / pageSize);
        console.log("totalPages: " + totalPages)
        const firstPage = 1;
        //The idead group of pages to be rendered is the first page, the last page, current page and any of the pages consecutive to the current page
        //If the total number of pages is smaller than the ideal group, execute the following block
        if (totalPages < consecPage + 5) {
            console.log("case 1")
            const range = createRange(firstPage, totalPages)
            return [...range];
        }
        /*
        const leftMostPage = currentPage - consecPage - 1 > 0 ? currentPage - consecPage : firstPage; 
        const rightMostPage = currentPage + consecPage + 1 < totalPages ? currentPage + consecPage : totalPages; 
        */

        var leftMostPage = 0;
        var rightMostPage = 0;

        //the following variables indicates how many consecutive pagination blocks must be replaced
        //...if it comes to the situation where the location of the current page to either the first or last pages cuts
        //...off any of the consecutive pagination blocks between them.
        var addLeftPage = 0;
        var addRightPage = 0;

        //If the area between current page and the first page leaves room for the consecutive pages 
        if (currentPage - consecPage - 2 > 0) {
            leftMostPage = currentPage - consecPage;
        }
        //otherwise take any of the consecutive pages that can't fit in the area and add it to the other side 
        else {
            leftMostPage = firstPage;
            addRightPage = consecPage - (currentPage - 2); 
        }
        //If the area between current page and the last page leaves room for the consecutive pages 
        if (currentPage + consecPage + 1 < totalPages) {
            rightMostPage = currentPage + consecPage;
        }
        else {
            rightMostPage = totalPages; 
            addLeftPage = consecPage - (totalPages  - currentPage - 1) 
        }

        if (leftMostPage !== firstPage) {
            console.log("Added "  + addLeftPage + " left paginations")
            leftMostPage -= addLeftPage; 
        }

        if (rightMostPage !== totalPages) {
            console.log("Added " + addRightPage + " right paginations")
            rightMostPage += addRightPage; 
        }
        console.log("leftMostPage: " + leftMostPage)
        console.log("rightMostPage: " + rightMostPage)
        const displayLeftDots = currentPage - consecPage - 1 > 1 ? true : false; 
        const displayRightDots = currentPage + consecPage + 1 < totalPages ? true : false; 
        console.log("displayLeftDots: " + displayLeftDots)
        console.log("displayRightDots: " + displayRightDots)
        

        const midRange = createRange(leftMostPage, rightMostPage)
        if (displayLeftDots && displayRightDots) {
            console.log("case 2")
            return [firstPage, DOTS, ...midRange, DOTS, totalPages]
        }
        if (!displayLeftDots && displayRightDots) {
            console.log("case 3")
            return[...midRange, DOTS, totalPages]
        }
        if (displayLeftDots && !displayRightDots) {
            console.log("case 4")
            return[firstPage, DOTS, ...midRange]
        }

    }, [totalCount, pageSize, consecPage, currentPage])

    return Pagination; 
}

export default usePagination;
