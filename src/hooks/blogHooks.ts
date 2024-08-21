import type {
  formattedPostType,
  PostType,
  CreateStaticPathArrayType,
  TagStaticPathArrayType,
  PathArray_TagsAndPageType,
  PostAssetType,
} from "@/util/interface";

import { makeURLfriendly } from "./string_hooks.tsx";

//This function creates and returns an array containing posts to be displayed based on the page number
const getPaginatedArray = (
  allPosts: Array<PostType>,
  currentPage: number,
  pageSize: number,
): Array<PostType> => {
  return allPosts.slice((currentPage - 1) * pageSize, pageSize * currentPage);
};

//This function creates and returns the array necessary for getStaticPaths
const createStaticPathArray = ({
  allPosts,
  PAGE_SIZE,
  totalPages,
  assets,
}: CreateStaticPathArrayType): Array<any> => {
  var staticPaths: Array<any> = [];
  var i = 1;
  var assetMap = new Map();
  const sortedPosts = SortPostsByNew(allPosts);
  do {
    //acquire array of blog posts to be displayed by each page, limited by PAGE_SIZE
    var paginatedArray = getPaginatedArray(sortedPosts, i, PAGE_SIZE);

    //insert the corresponding image data of each featured image of the blog post
    paginatedArray = hydratePaginatedPostArray(
      paginatedArray,
      assetMap,
      assets,
    );
    var path = {
      params: { page: i },
      props: {
        totalPages,
        assets,
        paginatedArray,
        totalPosts: sortedPosts.length,
        PAGE_SIZE,
      },
    };
    //console.log("paginatedArray: ", paginatedArray)
    staticPaths.push(path);
    i++;
  } while (i <= totalPages);
  return staticPaths;
};

//Sorts all posts by descending date
const SortPostsByNew = (AllPosts: Array<PostType>): Array<PostType> => {
  var sortedPosts = [...AllPosts];
  sortedPosts.sort((a: PostType, b: PostType) => {
    return (
      (new Date(b.frontmatter.pubDate) as any) -
      (new Date(a.frontmatter.pubDate) as any)
    );
  });
  return sortedPosts;
};

const displayPostArray = (AllPosts: Array<PostType>) => {
  console.log(AllPosts.map((post) => post.frontmatter.title));
};

const createStaticPathArrayForTagsAndPage = ({
  allPosts,
  assets,
  PAGE_SIZE,
}: TagStaticPathArrayType): Array<any> => {
  //Get all tags
  var allTags = allPosts
    .map((post: any) => post.frontmatter.tags)
    .flat()
    .map((item) => item.tag);
  //Get rid of redundant tags
  const uniqueTags: Array<string> = [...new Set(allTags)];
  //initialize array
  var staticPaths: Array<PathArray_TagsAndPageType> = [];
  uniqueTags.forEach((unique_tag: string) => {
    //find posts that contains the tag
    var filteredPosts = allPosts.filter(
      (post: any) =>
        post.frontmatter.tags?.some(
          (item: { tag: string }) => item.tag === unique_tag,
        ),
    );
    var totalPages: number = Math.ceil(filteredPosts.length / PAGE_SIZE);
    var i = 0;
    var assetMap = new Map();
    do {
      var paginatedArray: Array<PostType> = getPaginatedArray(
        filteredPosts,
        i,
        PAGE_SIZE,
      );
      paginatedArray = hydratePaginatedPostArray(
        paginatedArray,
        assetMap,
        assets,
      );
      var path = {
        params: {
          tag: makeURLfriendly(unique_tag),
          page: i,
        },
        props: {
          totalPages,
          paginatedArray,
          totalPosts: filteredPosts.length,
          PAGE_SIZE,
        },
      };
      staticPaths.push(path);
      i++;
    } while (i <= totalPages);
  });

  return staticPaths;
};

const createStaticPathArrayForTags = ({
  allPosts,
  PAGE_SIZE,
}: TagStaticPathArrayType): Array<any> => {
  var allTags = allPosts
    .map((post: any) => post.frontmatter.tags)
    .flat()
    .map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags.map((unique_tag: string) => {
    var filteredPosts = allPosts.filter(
      (post: any) =>
        post.frontmatter.tags?.some(
          (item: { tag: string }) => item.tag === unique_tag,
        ),
    );
    var totalPages: number = Math.ceil(filteredPosts.length / PAGE_SIZE);
    return {
      params: {
        tag: makeURLfriendly(unique_tag),
      },
      props: {
        totalPages,
        filteredPosts,
      },
    };
  });
};

//Do not use this one.
//It's inefficient because it forces the app to go through more than one loop
const getFeaturedImage = (pathway: string, assets: Array<any>) => {
  var pathArray = pathway.split("/");
  var fileName = pathArray[pathArray.length - 1];
  var fileNameArray = fileName.split(".");
  var formattedName = fileNameArray[fileNameArray.length - 1];
  return assets.find((asset: PostAssetType) => {
    if (!asset || !asset.default.src) return false;
    if (asset.default.src.includes(formattedName)) return asset.default.src;
    return false;
  });
};

const formatRecentPostArray = (
  allPosts: Array<PostType>,
  max: number,
): Array<formattedPostType> => {
  try {
    var recentPosts = allPosts
      .sort((a, b) => {
        var a_date: Date = new Date(a.frontmatter.pubDate);
        var b_date: Date = new Date(b.frontmatter.pubDate);
        return b_date.getTime() - a_date.getTime();
      })
      .slice(0, max);
    return recentPosts.map((post: PostType) => {
      return {
        featured_image: post.frontmatter.featured_image
          ? getImageFileName(post.frontmatter.featured_image)
          : null,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.pubDate,
        description: post.frontmatter.description,
        author: post.frontmatter.author,
        images: post.frontmatter.images,
        tags: post.frontmatter.tags,
        body: post.frontmatter.body,
        url: post.url,
      };
    });
  } catch (error) {
    console.log("formatRecentPostArray error: ", error);
    return [];
  }
};

//This function is used when rendering a single blog post
//main_feature is the pathway of the main image of the blog post
//recent_posts is an array of recent posts in their formmatted version
//function needs to loop one time
//returns object containing the featured images on all posts to be displayed
const setBlogPostImages = (
  assets: Array<any>,
  main_feature?: string,
  recent_posts?: Array<formattedPostType>,
) => {
  var formattedName: string = "";
  var payload: {
    main_featured_image: string | HTMLImageElement | null;
    recentPosts: Array<formattedPostType>;
  } = {
    main_featured_image: null,
    recentPosts: [],
  };
  if (main_feature) {
    formattedName = getImageFileName(main_feature);
  }
  for (var i = 0; i < assets.length; i++) {
    var assetFileName = getImageFileName(assets[i].default.src);
    if (assetFileName === formattedName) {
      payload["main_featured_image"] = assets[i].default.src;
    }
    if (recent_posts) {
      var foundPost = recent_posts.find(
        (val) => val.featured_image === assetFileName,
      );
      if (foundPost) {
        var formattedFountPost = {
          ...foundPost,
          featured_image: assets[i].default.src,
        };
        payload.recentPosts.push(formattedFountPost);
      }
    }

    //break point
    if (
      main_feature &&
      main_feature != "" &&
      payload.main_featured_image != null &&
      recent_posts?.length === payload.recentPosts.length
    ) {
      return payload;
    }
  }
  return payload;
};

const retrieveRecentImages = (
  allPosts: Array<PostType>,
  assets: Array<PostAssetType>,
  max: number,
) => {
  //recentPost is formmatted
  const recentPost = formatRecentPostArray(allPosts, max);
  var hydratedRecentPost = [];
  hydratedRecentPost = recentPost.map((post) => {
    var uploadedImage = assets.find((asset) => {
      return getImageFileName(asset.default.src) === post.featured_image;
    });
    return {
      ...post,
      featured_image: uploadedImage ? uploadedImage.default.src : null,
    };
  });
  return hydratedRecentPost;
};

//This function extracts the file name from the file path excluding the extension
//For example, './src/asset/uploads.sample.jpg' becomes 'sample'
const getImageFileName = (imageFile: string) => {
  var pathArray = imageFile.split("/");
  var fileName = pathArray[pathArray.length - 1];
  var fileNameArray = fileName.split(".");
  return fileNameArray[0];
};

//This retrieves the image data for each post
//The map object assetMap is used to reduce the need to go through redundant loops
//This is not pure function because it mutates the argument assetMap
const hydratePaginatedPostArray = (
  paginatedArray: Array<PostType>,
  assetMap: Map<string, any>,
  assets: Array<PostAssetType>,
) => {
  var hydratedArray = paginatedArray.map((item) => {
    if (item.frontmatter.featured_image) {
      var featured_image = null;
      var fileName = getImageFileName(item.frontmatter.featured_image);
      if (assetMap.get(fileName)) {
        featured_image = assetMap.get(fileName);
      } else {
        var foundAsset = assets?.find((asset) => {
          var found: boolean = asset.default.src.includes(fileName);
          if (found) {
            assetMap.set(fileName, asset.default.src);
          }
          return found;
        });
        featured_image = foundAsset?.default.src;
      }
    }
    if (featured_image) {
      return {
        ...item,
        featured_image,
      };
    }
    return item;
  });
  return hydratedArray;
};

//Creates a static path array for the paginated author page
const createStaticPathArrayForAuthors = ({
  allPosts,
  PAGE_SIZE,
  assets,
}: {
  allPosts: Array<PostType>;
  PAGE_SIZE: number;
  assets: Array<PostAssetType>;
}) => {
  var staticPaths: Array<any> = [];
  var assetMap = new Map();
  var authorMap: Map<string, Array<PostType>> = new Map();
  //Array of all authors
  const uniqueAuthors: Array<string> = [
    ...new Set(
      allPosts.map((post, index) => {
        if (authorMap.has(post.frontmatter.author)) {
          var tempArr: Array<PostType> = authorMap.get(post.frontmatter.author)
            ? authorMap.get(post.frontmatter.author)
            : [];
          tempArr?.push(post);
          authorMap.set(post.frontmatter.author, tempArr);
        } else {
          authorMap.set(post.frontmatter.author, [post]);
        }
        return post.frontmatter.author;
      }),
    ),
  ];
  uniqueAuthors.forEach((author) => {
    var i = 1;
    var postsArr = authorMap.get(author);
    var totalPages =
      postsArr.length / PAGE_SIZE + (postsArr.length % PAGE_SIZE ? 1 : 0);
    do {
      //acquire array of blog posts to be displayed by each page, limited by PAGE_SIZE
      var paginatedArray = getPaginatedArray(postsArr, i, PAGE_SIZE);
      //insert the corresponding image data of each featured image of the blog post
      paginatedArray = hydratePaginatedPostArray(
        paginatedArray,
        assetMap,
        assets,
      );
      var path = {
        params: {
          name: author,
          page: i,
        },
        props: {
          totalPages,
          assets,
          paginatedArray,
          totalPosts: postsArr.length,
          PAGE_SIZE,
        },
      };
      staticPaths.push(path);
      i++;
    } while (i <= totalPages);
  });

  return staticPaths;
};

export {
  getPaginatedArray,
  createStaticPathArray,
  createStaticPathArrayForTagsAndPage,
  createStaticPathArrayForTags,
  getFeaturedImage,
  setBlogPostImages,
  formatRecentPostArray,
  retrieveRecentImages,
  getImageFileName,
  hydratePaginatedPostArray,
  createStaticPathArrayForAuthors,
  SortPostsByNew,
};
