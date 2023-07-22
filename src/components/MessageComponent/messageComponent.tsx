import { useEffect, useRef } from 'react'; 
import uuid from 'react-uuid'; 
import "./style.css"

type MessagePropType = {
    message: Array<string>, 
    dispatch: (c: string) => void, 
} 

//this is component is for displaying messages that notifies user of when their post is saved, or when their comments are submitted, etc. 
const MessageComponent = props => {
    const { message, dispatch } = props; 

    function AnimateMessage(DivElem) {

       var obj1= setTimeout(() => {
            DivElem?.classList.remove("MessageFadeOut");
            DivElem?.classList.add("MessageFadeIn");
        }, [1])
       var obj2 = setTimeout(() => {
            dispatch([]); 
        }, [6000])
        var obj3 = setTimeout(() => {
            DivElem?.classList.remove("MessageFadeIn")
            DivElem?.classList.add("MessageFadeOut"); 
        }, [5000])
    }

    function RenderMessage() {
        //Dont use any hooks here.  
        return message.map((item: string, index : number) => {
            const ID = `${item}-${index}`;
            return <p
                key={uuid()}
                id={ID}
                className={``}>{item}</p>
            })
    }

    const messageRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        if (message && message.length > 0) {
            AnimateMessage(messageRef.current)
        }
    }, [message])

    return (
        <div
            id="message"
            className="Message box_shadow MessageFadeOut"
            ref={messageRef}
        >
            {message != null && message.length > 0 && RenderMessage()}
        </div>
        )  
}

export default MessageComponent; 