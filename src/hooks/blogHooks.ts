import type { 
    PostType,
    CreateStaticPathArrayType,
    TagStaticPathArrayType 
 } from "@/util/interface"

 //This function creates and returns an array containing posts to be displayed based on the page number
export const getPaginatedArray = (allPosts: Array<PostType>, currentPage: number, pageSize : number) : Array<PostType>=>{
    return allPosts.slice((currentPage - 1) * pageSize, pageSize * currentPage)
}

//This function creates and returns the array necessary for getStaticPaths 
export const createStaticPathArray = ({
    allPosts, 
    PAGE_SIZE,
    totalPages, 
    imageFiles, 
}: CreateStaticPathArrayType ) : Array<any>=>{
    var staticPaths : Array<any> = []; 
    var i = 1; 
    do{
        var paginatedArray = getPaginatedArray(allPosts, i, PAGE_SIZE)
        var path = {
            params: {page : i},
            props:{
                totalPages,
                imageFiles, 
                paginatedArray, 
                totalPosts: allPosts.length, 
                PAGE_SIZE,
            }
        }
        staticPaths.push(path)
        i++; 
    }while(i <= totalPages); 
    return staticPaths; 
}

export const createStaticPathArrayForTags = ({
    allPosts, 
    PAGE_SIZE,
    totalPages, 
    imageFiles,
    uniqueTags,  
}:  TagStaticPathArrayType  ) : Array<any>=>{
    var staticPaths : Array<any> = []; 
    var i = 0; 
    do{
        var paginatedArray = getPaginatedArray(allPosts, i, PAGE_SIZE)
        var path = {
            params: {
                tag: uniqueTags[i].tag,
                page: i + 1, 
            },
            props:{
                totalPages,
                imageFiles, 
                paginatedArray, 
                totalPosts: allPosts.length, 
                PAGE_SIZE,
            }
        }
        staticPaths.push(path)
        i++; 
    }while(i < uniqueTags.length); 
    return staticPaths; 
}