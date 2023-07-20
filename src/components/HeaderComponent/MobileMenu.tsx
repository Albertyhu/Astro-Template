import { h } from 'preact';
import {useEffect, useRef } from 'preact/hooks'; 
import { MobileMenuOpen } from "../../util/atomItems.js";
import { useStore } from '@nanostores/preact';
import MenuLinks from './menuLinks.tsx';
import { Logo } from '../../customization/logo.js';

const MobileMenuComponent = () =>{
    const $MobileMenuOpen = useStore(MobileMenuOpen); 
    
    const CloseMobileMenu = () =>{
        MobileMenuOpen.set(false);
    }

    const MobileMenuRef = useRef<HTMLDivElement | null>(null); 
    let HeaderComponent = document.getElementById("header-component");
    let MobileIconComponent = document.getElementById("MobileIcon"); 
    const checkIfClickedOutside = (evt : MouseEvent) => {
        if (MobileMenuRef.current &&
            !MobileMenuRef.current.classList.contains("translate-x-[100px]") &&
            MobileIconComponent != evt.target &&
            !MobileIconComponent?.contains(evt.target as HTMLDivElement) &&
            !MobileMenuRef.current.contains(evt.target as HTMLDivElement)) {
            CloseMobileMenu()
        }
    }

    useEffect(()=>{
        window.addEventListener("mousedown", checkIfClickedOutside)
        return () =>{
            window.removeEventListener("mousedown", checkIfClickedOutside)
        }
    },[])
    
    useEffect(()=>{
        if($MobileMenuOpen){
            MobileMenuRef.current?.classList.remove("translate-x-[200px]")
        }
        else{
            MobileMenuRef.current?.classList.add("translate-x-[200px]")
        }
    }, [$MobileMenuOpen])


    return (
        <div
            id="Mobile_Menu"
            class = "grid md:hidden h-full w-[200px] bg-white fixed left-auto right-0 top-0 overflow-y-auto overflow-x-hidden translate-x-[200px] transition-all  bg-slate-100"
            ref = {MobileMenuRef}
        >
            <div
                id="Mobile_Menu_Wrapper"
                class = "w-9/12 mx-auto mt-[20px] text-black flex flex-col [&>a]:mb-10"
            >
                <a 
                    href ="/"
                    class ="mx-auto userselect-none"
                >
                    <img
                        src = {Logo()}
                        class = "mb-5"
                    />
                 </a>
                <MenuLinks />
                <p 
                class = "mobile-menu-links"
                onClick = {CloseMobileMenu} 
                >Close</p>
            </div>
        </div>
    )
}
export default MobileMenuComponent; 