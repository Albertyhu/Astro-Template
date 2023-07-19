const MobileMenu= document?.getElementById("Mobile_Menu"); 

export const CloseMenu = () =>{
    if(!MobileMenu.classList.contains("translate-x-[200px]"))
        MobileMenu.classList.add("translate-x-[200px]")
}

export const OpenMenu = ()=>{
    MobileMenu.classList.remove("translate-x-[200px]")
}