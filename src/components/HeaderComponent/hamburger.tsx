
import { MobileMenuOpen } from "../../util/atomItems";
import { useStore } from '@nanostores/preact';

const MobileMenu = () =>{
const $MobileMenuOpen = useStore(MobileMenuOpen)
    return(
        <div
            id = "MobileIcon"
            class="hamburger"
            onClick = {()=>MobileMenuOpen.set(!$MobileMenuOpen)} 
        >
            <span class="line mb-[10px]"></span>
            <span class="line mb-[10px]"></span>
            <span class="line"></span>
        </div>
    )
}

export default MobileMenu;