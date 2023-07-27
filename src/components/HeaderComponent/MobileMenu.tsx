import { h } from 'preact';
import {useEffect, useRef } from 'preact/hooks'; 
import { MobileMenuOpen } from "../../util/atomItems.js";
import { useStore } from '@nanostores/preact';
import MenuLinks from './menuLinks.tsx';
import { Logo } from '../../customization/logo.js';
import SwitchComponent from '../switch/switch_component.tsx';

const WIDTH = 250
const MENU_WIDTH = `w-[${WIDTH}px]`;
const TRANSLATE = `translate-x-[${WIDTH}px]`; 
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
            !MobileMenuRef.current.classList.contains(TRANSLATE) &&
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
            MobileMenuRef.current?.classList.remove(TRANSLATE)
        }
        else{
            MobileMenuRef.current?.classList.add(TRANSLATE)
        }
    }, [$MobileMenuOpen])

    return (
        <div
            id="Mobile_Menu"
            class = {`grid md:hidden h-full fixed left-auto right-0 top-0 overflow-y-auto overflow-x-hidden transition-all mobile-menu w-[250px] translate-x-[250px]`}
            ref = {MobileMenuRef}
        >
            <div
                id="Mobile_Menu_Wrapper"
                class = "w-9/12 mx-auto mt-[20px] text-black flex flex-col [&>a]:mb-10 Mobile_Menu_Wrapper"
            >
                <a 
                    href ="/"
                    class ="mx-auto userselect-none"
                >
                    <img
                        src = {Logo().src}
                        class = "mb-5"
                        alt="logo"
                    />
                 </a>
                <div class = "grid mobile-menu-links">
                    <MenuLinks />
                </div>
                <hr class="border-[1px] w-11/12 mx-auto bg-slate-300 mb-5" />
                <div class ="flex flex-row justify-between">
                    <span>Dark Mode</span><SwitchComponent />
                </div>
                <hr class="border-[1px] w-11/12 mx-auto bg-slate-300 my-5" />
                <p 
                class = "hover:bg-white w-full rounded-lg px-1 cursor-pointer mb-10"
                onClick = {CloseMobileMenu} 
                >Close</p>
            </div>
        </div>
    )
}
export default MobileMenuComponent; 