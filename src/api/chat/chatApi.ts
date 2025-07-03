// ** Firebase
import { getDatabase, ref, set, push, onValue, update, remove, get } from 'firebase/database';
// ** Interfaces
import { IChat, IMessage } from '../../interfaces';


// ** Get chats
export const fetchMessages = async (currentUserId:string): Promise<IChat[]> => {
    const db = getDatabase();
    const userChatsSnap = await get(ref(db, `users/${currentUserId}/chats`));
    const chatIdsObj = userChatsSnap.val();
    
    if (!chatIdsObj) return [];

    const chatIds = Object.keys(chatIdsObj);

    const chats = await Promise.all(
            chatIds.map(async (chatId) => {
                const chatSnap = await get(ref(db, `chats/${chatId}`));
                return {
                    id: chatId,
                    ...chatSnap.val()
                };
            })
        );

    return chats;
};

// ** New Chat
export const addChat = async (chat: IChat) => {
    const db = getDatabase();
    await set(ref(db, `chats/${chat.id}`), chat);

    for (const participant of chat.participants) {
        await set(ref(db, `users/${participant.userId}/chats/${chat.id}`), true);
    }
};

// ** Send Message
export const sendMessage = async (message: IMessage, chatId: string) => {
    const db = getDatabase();
    const messageRef = ref(db, `chats/${chatId}/messages`);
    await push(messageRef, message);
};

// ** Edit Message
export const editeMessage = async (message: IMessage, chatId: string) => {
    const db = getDatabase();
    const chatRef = ref(db, `chats/${chatId}/messages`);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const messageKey = Object.keys(data).find(key => data[key].messageId === message.messageId);
            if (messageKey) {
                update(ref(db, `chats/${chatId}/messages/${messageKey}`), message);
            }
        }
    }, { onlyOnce: true });
};

// ** Delete Message
export const deleteMessage = async (chatId: string, messageId: string) => {
    const db = getDatabase();
    const chatRef = ref(db, `chats/${chatId}/messages`);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const messageKey = Object.keys(data).find(key => data[key].messageId === messageId);
            if (messageKey) {
                remove(ref(db, `chats/${chatId}/messages/${messageKey}`));
            }
        }
    }, { onlyOnce: true });
};

// ** Pin Message
export const pinMessage = async (chatId: string, messageId: string, isPinned: boolean) => {
    const db = getDatabase();
    const chatRef = ref(db, `chats/${chatId}/messages`);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const messageKey = Object.keys(data).find(key => data[key].messageId === messageId);
            if (messageKey) {
                update(ref(db, `chats/${chatId}/messages/${messageKey}`), { isPinned });
            }
        }
    }, { onlyOnce: true });
};