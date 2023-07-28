import { useEffect, useRef } from 'preact/hooks'; 
import uuid from 'react-uuid'; 
import "./style.css"
import { MessageArray } from '../../util/atomItems';
import { useStore } from '@nanostores/preact';

type MessagePropType = {
    message: Array<string>, 
    dispatch: (c: string) => void, 
} 

//this is component is for displaying messages that notifies user of when their post is saved, or when their comments are submitted, etc. 
const MessageComponent = () => {
    const $MessageArray = useStore(MessageArray); 
    function AnimateMessage(DivElem : HTMLDivElement) {

       var obj1= setTimeout(() => {
            DivElem?.classList.remove("MessageFadeOut");
            DivElem?.classList.add("MessageFadeIn");
        }, [1])
       var obj2 = setTimeout(() => {
            MessageArray.set([]); 
        }, [6000])
        var obj3 = setTimeout(() => {
            DivElem?.classList.remove("MessageFadeIn")
            DivElem?.classList.add("MessageFadeOut"); 
        }, [5000])
    }

    function RenderMessage() {
        //Dont use any hooks here.  
        return $MessageArray.map((item: string, index : number) => {
            const ID = `${item}-${index}`;
            return <p
                key={uuid()}
                id={ID}
                className={``}>{item}</p>
            })
    }

    const messageRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        if ($MessageArray  && $MessageArray.length > 0) {
            AnimateMessage(messageRef.current as HTMLDivElement)
        }
    }, [$MessageArray ])

    return (
        <div
            id="MessageArray"
            className="Message box_shadow MessageFadeOut"
            ref={messageRef}
        >
            {$MessageArray != null && $MessageArray.length > 0 && RenderMessage()}
        </div>
        )  
}

export default MessageComponent; 