export interface PostType {
    frontmatter: {
        layout: string,    
        title: string, 
        pubDate: Date, 
        description: string, 
        author: string, 
        featured_image: string, 
        images: Array<ImageType> | null | undefined, 
        tags: Array<TagType> | null | undefined, 
        body: HTMLElement | string | null | undefined, 
    }
}

export type ImageType = {
    url: string,
    alt: string,
}; 

export type TagType = {
    tag: string, 
};

export type TagObject = {
    tag: string, 
}

export type TagListType = {
    tags: Array<TagType>, 
}

export type ContactSubmission = {
    email: string, 
    subject: string, 
    message: string, 
}

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

export interface GlobObjectType {
  [key: string]: () => Promise<any>; // Change 'any' to the actual type of the image if known
}

export type UsePaginationType = {
    currentPage: number,
    totalCount: number,
    pageSize: number, 
} 

export type RenderPaginationType = {
    currentPage: number,
    totalCount: number,
    pageSize: number, 
    totalPages: number, 
    isMobile: boolean, 
    search_query?: string | null | undefined, 
} 

export type SearchQueryType = {
    query : string, 
    list: Array<any>, 
} 

export interface CreateStaticPathArrayType {
    allPosts: Array<PostType>, 
    PAGE_SIZE: number,
    totalPages: number, 
    imageFiles: object, 
}

export interface TagStaticPathArrayType {
    allPosts: Array<PostType>, 
    PAGE_SIZE: number,
}

export interface PathArray_TagsAndPageType {
    params: {
        tag: string, 
        page: number, 
    },
    props: {
        totalPages: number,
        paginatedArray: Array<PostType>, 
        totalPosts: number, 
    }
}