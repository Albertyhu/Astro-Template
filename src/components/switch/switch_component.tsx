import "./switch.css"; 
import { useState, useEffect } from 'preact/hooks'; 

const SwitchComponent = () => {
    const theme = (()=>{
        if(typeof localStorage != undefined && localStorage.getItem("theme")){
            return localStorage.getItem("theme")
        }
        if(window.matchMedia("{prefers-color-scheme: dark}").matches){
            return "dark"
        }
        return "light"
    })()

    const GoDark = () =>{
    document.documentElement.classList.add("dark"); 
    }

    const GoLight = () =>{
        document.documentElement.classList.remove("dark")
    }

    if(theme === 'light'){
        GoLight()
    }
    else{
        GoDark(); 
    }

    window.localStorage.setItem("theme",  theme)
    const [checked, setChecked] = useState(theme === "dark");
    const toggleClick = () =>{
        const element = document.documentElement; 
        element.classList.toggle("dark"); 
        const isDark = element.classList.contains("dark")
        var render = isDark ? "dark" : "light"
        setChecked(isDark)
        window.localStorage.setItem("theme", render)
    } 
    return(
        <label class="switch cursor-pointer">
            <input 
            type="checkbox" 
            checked = {checked}
            onChange ={()=>toggleClick()}
            />
            <span class="slider round"></span>
        </label> 
    )
}

export default SwitchComponent; 