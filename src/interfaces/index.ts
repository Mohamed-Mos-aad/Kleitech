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
    hasIllnesses: string,
    userWeight: string,
    userHeight: string,
    hasDoctor: string,
    userDate: string,
    userState: string
}


// Allow And not Alow
export interface IAllowAndNotAllowData{
    allow: {
        food: string[],
        drinks: string[]
    },
    notAllow: {
        food: string[],
        drinks: string[]
    }
}