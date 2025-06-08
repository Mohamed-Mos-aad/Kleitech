// ** Input Element
export interface IInputElement{
    id: string,
    name: string,
    type: string,
    value: string,
    placeholder: string,
    img: {
        src: string,
        alt: string
    },
    error: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
}


// User Sign Up Data
export interface ISignUpData{
    userName: string,
    userId: string,
    userPhone: string,
    userEmail: string,
    userPassword: string,
    userPasswordConfirm: string,
    hasIllnesses: boolean | null | string,
    userWeight: string,
    userHeight: string,
    hasDoctor: boolean | null | string,
    userDate: string,
    userState: string
}


// Allow And not Alow
export interface IAdvices{
    allow: {
        food: string[],
        drinks: string[]
    },
    notAllow: {
        food: string[],
        drinks: string[]
    }
}


// ** BookingData
export interface IBookingData{
    userName: string,
    userPhone: string
}


export interface IDoctorsData{
    id: number,
    name: string,
    specialty: string,
    location: string,
    price: string,
    rating: { avg_rating: number, visitors_count: number },
    availability: {
        time: string,
        status: boolean
    }[][],
    photo?: '',
    isOnline?: '',
}

export interface IDoctorsSimpleData{
    id: number,
    name: string,
    specialty: string,
    photo?: string
}




// ** Chat
export interface Participant {
    userId: string;
    name: string;
    photo: string;
    role: string;
    isOnline: boolean;
    lastSeen: string;
}

export interface IChat{
    id: string;
    participants: {
        userId: string;
        name: string;
        photo: string;
        role: string;
        isOnline: boolean;
        lastSeen: string;
    }[];
    messages: IMessage[];
    isArchived: boolean;
    lastMessage: {
        messageId: string;
        text: string;
        timestamp: string
    };
}

export interface IMessage {
    messageId: string;
    senderId: string;
    receiverId: string;
    timestamp: string;
    status: string;
    type: 'text' | 'voice' | 'document' | 'image';
    text?: string;
    file?: File;
    audioUrl?: string;
    photoUrl?: string;
    reactions: { userId: string; reaction: string }[];
    isPinned: boolean;
    isReplyTo: null | string;
}



// ** Alarm
// ** Interfaces
export interface IAlarmData{
    type: "Medicine"| "Water"| "xRay",
    name?: string,
    recurrence_count?: number,
    start_date?: string,
    start_time?: string,
    gender?: string,
    wake_time?: string,
    sleep_time?: string,
    reminder_interval?: string,
    weekly_sessions?: number,
    next_session_date?: string,
    session_time?: string,
}