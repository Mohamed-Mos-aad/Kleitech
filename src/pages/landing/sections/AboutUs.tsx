import style from '../../../style/pages/landing/sections/aboutUs.module.css'





// ** InterFaces
interface ISection{
    sectionId: string
}

export default function AboutUs({sectionId}:ISection) {
    return (
        <>
            <section className={style.section} id={sectionId}>
                
            </section>
        </>
    )
}
