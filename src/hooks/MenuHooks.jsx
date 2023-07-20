import { 
    MobileMenuOpen,
 } from "../util/atomItems";
import { useStore } from '@nanostores/preact';

const $MobileMenuOpen = useStore(MobileMenuOpen); 

export const CloseMenu = (elem) =>{
    if(!elem.classList.contains("translate-x-[200px]"))
        elem.classList.add("translate-x-[200px]")
}

export const OpenMenu = (elem) =>{
    elem.classList.remove("translate-x-[200px]")
}
