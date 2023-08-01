import type { GlobObjectType } from "@/util/interface";

//accepts a pathway
//accepts globObject
//extract filename of pathway
//Create a loop that extracts filename of each of globObject and compares that of the pathway
//If the loop finds a match, extract image 
export const RetrieveImageFromGlob = async (imagePath: string, globObject: GlobObjectType) =>{
    try{
        const imageFilename : string = retrieveFileName(imagePath); 
        for(var property in globObject){
            if(property.includes(imageFilename)){
                const image = await globObject[property]()
                return image; 
            }
        }
    } catch(error){
        console.log("RetrieveImageFromGlob error: ", error)
    }
}

export const retrieveFileName = (name: string) : string =>{
    try{
        if(name.length === 0)
            return ""
        const arr = name.split("/")
        return arr[arr.length - 1]
    } catch(error){
        console.log("retrieveFileName error: ", error)
        return ""; 
    }
}