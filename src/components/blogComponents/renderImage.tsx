import { 
     useState,
     useRef,
     useEffect 
    } from 'react';

type RenderImageType = {
    altText: string, 
    image: string, 
}

const RenderImage = (props : RenderImageType) => {
    const {
        altText = "Main photo",
        image,
    } = props;

    const [lightbox, setLightbox] = useState(false);
    const lightboxRef = useRef(null); 
    const lightboxStyle = `h-auto w-11/12 md:w-6/12 bg-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]
                        fixed z-[100]`
    const imageStyle = `h-full w-full md:w-full md:h-auto bg-bottom bg-cover top-[50%] translate-y-[-50%] 
                        absolute object-cover cursor-pointer `
    const containerStyle = `w-full h-[150px] md:h-[250px] relative select-none bg-no-repeat overflow-hidden 
                        hover:border-4 hover:border-[#333333]`
    
    const clickEvent = (evt : MouseEvent) => {
        if (!lightboxRef?.current?.contains(evt.target)) {
            setLightbox(false); 
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown', clickEvent)
        return()=>{
            document.removeEventListener('mousedown', clickEvent)
        }
    },[])

    try {
        return (
            <>
                <div
                    id="MainImage"
                    className={`${containerStyle}`}
                    onClick={() => setLightbox(true)}
                >
                    <img
                        src={image}
                        alt={altText}
                        className={`${imageStyle}`}
                    />
                </div>
                {lightbox && window.innerWidth >= 636 &&
                    <img
                        src={image}
                        alt={`$altText} lightbox`}
                        className={`${lightboxStyle}`}
                        id="lightbox"
                        ref={lightboxRef}
                    />
                }
            </>
        )
    } catch (e) {
        console.log("error in rendering image: ", e)
    }
}

export default RenderImage; 