// ** Interfaces
interface ILandingPageSections{
    id: string,
    name: string,
    title: string
}
interface IMainNavBarPages{
    id: string,
    title: string
}




// ** Landing NavBar Data
export const landingPageSections:ILandingPageSections[] = [
    {
        id: '',
        name:'about-us',
        title: 'نبذة عنّا'
    },
    {
        id: 'join-us',
        name:'join-us',
        title: 'انضم لنا'
    },
    {
        id: 'our-services',
        name:'our-services',
        title: 'خدماتنا'
    },
    {
        id: 'contact-us',
        name:'contact-us',
        title: 'تواصل معنا'
    },
    {
        id: 'patient-reviews',
        name:'patient-reviews',
        title: 'تقييمات المستخدمين'
    }
]

// ** Main NavBar Data
export const mainPagesPatientNavBar:IMainNavBarPages[] = [
    {
        id: '',
        title: 'الرئيسيه'
    },
    {
        id: 'consultation',
        title: 'الاستشارات'
    },
    {
        id: 'advices',
        title: 'النصائح'
    },
    {
        id: 'alarm',
        title: 'التذكيرات'
    }
]

export const mainPagesDoctorNavBar:IMainNavBarPages[] = [
    {
        id: '',
        title: 'الرئيسيه'
    },
    {
        id: 'chats',
        title: 'المحادثات'
    }
]