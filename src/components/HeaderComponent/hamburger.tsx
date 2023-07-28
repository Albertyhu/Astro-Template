import { useRef } from 'preact/hooks'; 
import { 
    MobileMenuOpen,
 } from "../../util/atomItems";
import { useStore } from '@nanostores/preact';

const MobileMenu = () =>{
const $MobileMenuOpen = useStore(MobileMenuOpen)
const MobileIconRef = useRef<HTMLDivElement | null>(null)

    const toggleMobileMenu = () =>{
        if($MobileMenuOpen){
            MobileMenuOpen.set(false)
        }
        else{
            MobileMenuOpen.set(true)
        }
    }
    return(
        <div
            id = "MobileIcon"
            class="hamburger bg-transparent"
            onClick = {()=>toggleMobileMenu()} 
            ref = {MobileIconRef}
        >
            <span class="line mb-[10px]"></span>
            <span class="line mb-[10px]"></span>
            <span class="line"></span>
        </div>
    )
}

export default MobileMenu;