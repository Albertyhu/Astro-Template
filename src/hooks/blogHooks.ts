import type { PostType } from "@/util/interface"
export const getPaginatedArray = (allPosts: Array<PostType>, currentPage: number, pageSize : number) : Array<PostType>=>{
    return allPosts.slice((currentPage - 1) * pageSize, pageSize * currentPage)
}