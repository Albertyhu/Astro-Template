//This method handles the search query that is typed into the search bar
import type { PostType, TagType } from '@/util/interface.tsx';

export const SearchQuery = (query: string, list: Array<PostType>) => {
   // var result = list.filter(item => item.toLowerCase().search(query.toLowerCase().trim()) > -1)
    return list.filter((item: PostType) => SearchFrontmatter(query, item))
}

const SearchFrontmatter = (query: string, post : PostType) : boolean=>{
    if(post.frontmatter.author === query){
        return true; 
    }
    if(post.frontmatter.title.includes(query)){
        return true; 
    }
    if(post.frontmatter.description.includes(query)){
        return true; 
    }
    if(QueryTags(query, post)){
        return true; 
    }
    return false; 
} 

const QueryTags = (query:string, post: PostType) =>{
    return post.frontmatter.tags?.some((item : TagType) => item.tag === query)
}