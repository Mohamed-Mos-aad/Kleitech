// ** Style
import style from '../../style/components/ui/messagePop.module.css'
// ** Assets
import { errorIcon, successIcon, loadingIcon} from '../../assets/icons/icons';
// ** Hooks && Tools
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';



export default function MessagePop() {
    // ** Store
    const messagePop = useSelector((state: RootState) => state.messagePop);

    // ** States
    const [thereMessage, setThereMessage]= useState<boolean>(false);
    const [stateIcon, setStateIcon] = useState(errorIcon);
    const [messageContent, setMessageContent] = useState({
        state: '',
        content: ''
    })



    useEffect(()=>{
        if(messagePop.content){
            setThereMessage(false);
            setTimeout(() => {
                setMessageContent({...messagePop});
                setThereMessage(true);

                switch(messagePop.state){
                    case("error"):
                        setStateIcon(errorIcon)
                        break;
                    case("success"):
                        setStateIcon(successIcon)
                        break;
                    case("loading"):
                        setStateIcon(loadingIcon)
                        break;
                }
            }, 100);
        }


        const timeout = setTimeout(() => {
            setThereMessage(false);
        }, 4000);

        return () => clearTimeout(timeout);
    },[messagePop])



    return (
        <>
            <div className={`${style.message_pop} ${thereMessage ? style.show : style.hide}`}>
                <div>{messageContent.content}</div>
                <img className={style[messageContent.state]} src={stateIcon} alt={messageContent.state} />
            </div>
        </>
    )
}
