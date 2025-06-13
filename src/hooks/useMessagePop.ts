// ** Store
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { clearMessagePop, setMessagePop } from "../app/slices/ui/messagePopSlice";



// ** Interface
interface IMessagePop {
    state: 'success' | 'error' | 'loading';
    content: string;
}

export function useMessagePop(){
    // ** Default
    const dispatch: AppDispatch = useDispatch();

    const showMessage = ({state,content}:IMessagePop) =>{
        dispatch(setMessagePop({state,content}));
    }

    setTimeout(() => {
        dispatch(clearMessagePop());
    }, 4000);

    return {showMessage};
}