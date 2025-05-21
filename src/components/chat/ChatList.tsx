// ** Assets
import searchIcon from '../../assets/main/chat/searchIcon.svg'
// ** Style
import style from '../../style/layouts/chatLayout.module.css'
// ** Components
import ChatListItem from '../../components/ui/chat/ChatListItem'
import { IChat } from './../../interfaces/index';
// ** utils
import { convertDateTypeHandler } from '../../utils/date';



// ** InterFaces
interface IChatList{
    chats: IChat[],
    displayedChats: IChat[],
    setDisplayedChats: (searchResult:IChat[])=> void,
    selectChatHandler: (id:string)=> void
}



export default function ChatList({chats,displayedChats,setDisplayedChats,selectChatHandler}:IChatList) {
    // ** Handlers
    const chatsSearchHandler = (e: React.FormEvent<HTMLInputElement>)=>{
        const searchValue = e.currentTarget.value;
        const searchResult = chats.filter(chat => chat.participants[0].name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        setDisplayedChats(searchResult);
    }

    
    
    // ** Render
    const chatsListRender = displayedChats.map(chatItme =>
        <ChatListItem name={chatItme.participants[0].name} lastMessage={chatItme.lastMessage.text} photo={chatItme.participants[0].photo} timesTamp={convertDateTypeHandler(chatItme.lastMessage.timestamp)} onClick={()=>{selectChatHandler(chatItme.chatId)}} key={chatItme.chatId}/>
    )



    return (
        <>
            <div className={style.chats_list_container} id='chats_list'>
                <div className={style.search}>
                    <input type="text" placeholder='بحث' onInput={(e)=>{chatsSearchHandler(e)}}/>
                    <img src={searchIcon} alt="Search icon" />
                </div>
                <div className={style.chats_list}>
                    {chatsListRender}
                </div>
            </div>
        </>
    )
}
