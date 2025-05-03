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
    }[][]
}

export interface IDoctorsSimpleData{
    id: number,
    name: string,
    specialty: string,
    photo?: string
}