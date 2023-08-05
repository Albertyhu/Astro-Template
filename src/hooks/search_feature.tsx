//This method handles the search query that is typed into the search bar
import type { PostType, TagType } from '@/util/interface.tsx';

export const SearchQuery = (query: string, list: Array<PostType>) => {
    const lowercase_query = query.toLowerCase().trim(); 
    return list.filter((item: PostType) => SearchFrontmatter(lowercase_query, item))
}

const SearchFrontmatter = (query: string, post : PostType) : boolean=>{
    const author = post.frontmatter.author.toLowerCase().trim(); 
    if(author.includes(query)){
        return true; 
    }
    const title = post.frontmatter.title.toLowerCase().trim(); 
    if(title.includes(query)){
        return true; 
    }
    const description = post.frontmatter.description.toLowerCase().trim(); 
    if(description.includes(query)){
        return true; 
    }
    if(QueryTags(query, post)){
        return true; 
    }
    return false; 
} 

const QueryTags = (query:string, post: PostType) =>{
    return post.frontmatter.tags?.some((item : TagType) => item.tag.toLowerCase().trim() === query)
}